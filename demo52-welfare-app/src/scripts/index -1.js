'use strict';
$(function () {
    let Base = window.Base || {}; // 基础配置文件
    let Config = window.Config || {}; // 图层树展示
    let MapTree = window.MapTree || {}; // 实例化Map对象加载地图,并为其添加相关功能
    let LayerGroup = window.LayerGroup || {}; // 实例化LayerGroup图层数组
    let MapSearch = window.MapSearch || {}; // 地图查询相关全局变量
    let MapMeasure = window.MapMeasure || {}; // 地图查询相关全局变量

    // 基础配置文件
    Config = {
        //地图容器div的ID
        target: 'mapCon',
        // 瓦片地图名称
        TileName: "谷歌经纬度影像19",
        // 瓦片地图的显示名称，类似备注可以随便起名
        tName: "MapGIS Of SMX",
        // 矢量地图名称
        docName: "12345",
        // 矢量地图显示名称
        mName: "MapGIS Of 12345",
        user: "",
        password: "",
        // ip地址
        // ip: "10.164.251.222",
        ip: "10.160.237.77",
        // 端口号
        port: "6163",
        // 地图中心点
        center: [111.1928, 34.7808],
        // 投影
        projection4: "EPSG:4326",
        projection3: "EPSG:3857",
        // 初始缩放级别
        zoom: 14,
        // 最小缩放级别
        minZoom: 13,
        // 最大缩放级别
        maxZoom: 19,
        //设置旋转角度
        // rotation: Math.PI / 6
        rotation: 0,
        //瓦片参数原点
        origin: [-180, -90],
        // 瓦片大小
        tileSize: 256,
        crossOrigin: "anonymous",
        // 鼠标位置DOM的ID
        mousePosition: 'mouse-position',
        // 地图缩放延伸的区域
        extend: [111.13227664319722, 34.712871905272884, 111.27904811225743, 34.80599655079968],
        //图层列表容器ID
        mapTreeId: "container_left_content",
        //缩放按钮集合jQuery dom节点,例:"#zoom-in,.zoom-in"
        zoomInBtnGroups: "#zoom-in",
        zoomOutBtnGroups: "#zoom-out",
        zoomRestoreBtnGroups: "#restore",
        // 地图数组
        mapArray: [MapTree.layer_vec, MapTree.layer_cva, MapTree.layer_img, MapTree.layer_cia, MapTree.mapDocLayer],
        deepClone: function (obj) {
            var str, newobj = obj.constructor === Array ? [] : {};
            let that = this;
            if (typeof obj !== 'object') {
                return;
            } else if (window.JSON) {
                str = JSON.stringify(obj), //序列化对象
                    newobj = JSON.parse(str); //还原
            } else { //如果不支持以上方法
                for (var i in obj) {
                    newobj[i] = typeof obj[i] === 'object' ? that.deepClone(obj[i]) : obj[i];
                }
            }
            return newobj;
        }
    };

    // 图层树展示
    MapTree = {
        //  map中的图层数组
        layer: [],
        //  图层名称数组
        layerName: [],
        //  图层可见属性数组
        layerVisibility: [],
        // 指定地图的相关信息
        formatData: [],
        // 专题图信息集合
        themesInfoArrs: {
            first: '',
            second: '',
            third: ''
        },
        // 初始化天地图矢量图层
        layer_vec: new Zondy.Map.TianDiTu({
            layerType: Zondy.Enum.Map.TiandituType.VEC,
            projection: ol.proj.get(Config.projection4),
            ip: Config.ip,
            port: Config.port,
            tileSize: Config.tileSize,
            crossOrigin: Config.crossOrigin
        }),
        // 初始化天地图注记图层
        layer_cva: new Zondy.Map.TianDiTu({
            layerType: Zondy.Enum.Map.TiandituType.CVA,
            projection: ol.proj.get(Config.projection4),
            ip: Config.ip,
            port: Config.port,
            tileSize: Config.tileSize,
            crossOrigin: Config.crossOrigin
        }),
        // 初始化天地图影像图层
        layer_img: new Zondy.Map.TileLayer(Config.tName, Config.TileName, {
            ip: Config.ip,
            port: Config.port
        }),
        layer_cia: new Zondy.Map.TianDiTu({
            layerType: Zondy.Enum.Map.TiandituType.CIA,
            projection: ol.proj.get(Config.projection4),
            ip: Config.ip,
            port: Config.port,
            tileSize: Config.tileSize,
            crossOrigin: Config.crossOrigin
        }),
        // 初始化12345图层
        mapDocLayer: new Zondy.Map.Doc(Config.mName, Config.docName, {
            ip: Config.ip,
            port: Config.port
        }),

    };

    // 地图查询相关
    MapSearch = {
        // 查询绘制图层
        query_drawLayer: null,
        drawLayer: null,
        vectorLayer: null,
        vectorSource: null,
        // 初始化专题图服务类
        oper: null,
        // 鼠标点击位置
        querypoint: null,
        // popup对象
        popup: null,
        // 查询类型
        querytype: 0
    }

    // 测量功能相关全局变量
    MapMeasure = {
        //绘制对象
        draw: '',
        // 测量类型对象
        measuertype: null,
        // 加载测量的绘制矢量层
        measuerVector: null,
        measure_source: null,
        // 定义一个球对象
        wgs84Sphere: new ol.Sphere(6378137),
        /**
         * 当前绘制的要素（Currently drawn feature.）
         * @type {ol.Feature}
         */
        sketch: null,
        /**
         * 帮助提示框对象（The help tooltip element.）
         * @type {Element}
         */
        helpTooltipElement: null,
        /**
         *帮助提示框显示的信息（Overlay to show the help messages.）
         * @type {ol.Overlay}
         */
        helpTooltip: null,
        /**
         * 测量工具提示框对象（The measure tooltip element. ）
         * @type {Element}
         */
        measureTooltipElement: null,
        /**
         *测量工具中显示的测量值（Overlay to show the measurement.）
         * @type {ol.Overlay}
         */
        measureTooltip: null,
        /**
         *  当用户正在绘制多边形时的提示信息文本
         * @type {string}
         */
        continuePolygonMsg: '鼠标单击绘制多边形',
        /**
         * 当用户正在绘制线时的提示信息文本
         * @type {string}
         */
        continueLineMsg: '鼠标单击绘制线',
    }

    // 图层组
    LayerGroup = {
        // 影像+注记图层组
        imgLayergroup: new ol.layer.Group({
            layers: [
                MapTree.layer_img,
                MapTree.layer_cia
            ]
        }),
        // 矢量+注记图层组
        vecLayergroup: new ol.layer.Group({
            layers: [
                MapTree.layer_vec,
                MapTree.layer_cva
            ]
        }),
        // 数据图层组
        dataLayergroup: null
    }

    // 实例化Map对象加载地图,并为其添加相关功能
    Base = {
        //是否获取地图视图
        getMapInfos: false,
        roadResults: null,
        themeActive: '',
        // 当前使用的搜索样式
        acitiveSearch: '',
        // 专题图信息
        themesInfoArrs: [],
        themesInfoArrs1: [],
        // 地图对象
        views: {
            view() {
                return this.map.getView();
            },
            zoom() {
                return this.map.getZoom();
            },
        },
        // 实例化Map对象加载地图
        map: new ol.Map({
            //地图容器div的ID
            target: Config.target,
            //地图容器中加载的图层
            layers: [
                //加载瓦片图层数据（OSM）及其他图层数据（加载矢量图层数据）
                MapTree.layer_vec, MapTree.layer_cva, MapTree.layer_img, MapTree.layer_cia, MapTree.mapDocLayer
            ],
            //地图视图设置
            view: new ol.View({
                //地图初始中心点
                center: Config.center,
                //地图初始显示级别
                zoom: Config.zoom,
                projection: Config.projection4,
                //最小级别
                minZoom: Config.minZoom,
                //最大级别
                maxZoom: Config.maxZoom,
                //设置旋转角度
                rotation: Config.rotation,
                // 地图延伸区域设置
                extent: Config.extend
            }),
            // 默认扩展的控件
            controls: ol.control.defaults({
                //地图中默认控件
                /* @type {ol.control.Attribution} */
                attributionOptions: ({
                    //地图数据源信息控件是否可收缩,默认为true
                    collapsible: true
                })
            }).extend([
                //鼠标位置在当前地图中位置展示
                new ol.control.MousePosition({
                    //坐标格式
                    coordinateFormat: ol.coordinate.createStringXY(4),
                    //地图投影坐标系（若未设置则输出为默认投影坐标系下的坐标）
                    projection: Config.projection4,
                    //坐标信息显示样式类名，默认是'ol-mouse-position'
                    className: 'custom-mouse-position',
                    //显示鼠标位置信息的目标容器
                    target: document.getElementById(Config.mousePosition),
                    //未定义坐标的标记
                    undefinedHTML: '&nbsp;'
                }),
                // 地图延伸区域设置,效果同view.extent
                new ol.control.ZoomToExtent({
                    extent: Config.extend
                })
            ])
        }),
        // 图层树功能Begin
        /**
         * 加载图层列表数据
         * @param {ol.Map} map 地图对象
         * @param {string} id 图层列表容器ID
         */
        loadLayersControl(map, id) {
            let that = this;
            let mt = MapTree;
            //图层目录容器
            var treeContent = document.getElementById(id);
            //获取地图中所有图层
            var layers = map.getLayers();
            // console.log(layers)
            for (var i = 0; i < layers.getLength(); i++) {
                if (layers.array_[i].name) {
                    //获取每个图层的名称、是否可见属性
                    mt.layer[i] = layers.item(i);
                    mt.layerName[i] = mt.layer[i].get('name');
                    mt.layerVisibility[i] = mt.layer[i].getVisible();

                    //新增li元素，用来承载图层项
                    var elementLi = document.createElement('li');
                    // 添加子节点
                    treeContent.appendChild(elementLi);
                    //创建复选框元素
                    var elementInput = document.createElement('input');
                    elementInput.type = "checkbox";
                    elementInput.name = "layers";
                    elementLi.appendChild(elementInput);
                    //创建label元素
                    var elementLable = document.createElement('label');
                    elementLable.className = "layer";
                    //设置图层名称
                    that.setInnerText(elementLable, mt.layerName[i]);
                    elementLi.appendChild(elementLable);

                    //设置图层默认显示状态
                    if (mt.layerVisibility[i]) {
                        elementInput.checked = true;
                    }
                    //为checkbox添加变更事件
                    that.addChangeEventMapDoc(elementInput, mt.layer[i]);
                }
            }
            that.getMapInfo();
        },
        /**
         * 为checkbox元素绑定变更事件
         * @param {input} element checkbox元素
         * @param {ol.layer.Layer} layer 图层对象
         * 控制图层文档的显示与隐藏
         */
        addChangeEventMapDoc(element, layer) {
            let that = this;
            element.onclick = function () {
                if (element.checked) {
                    //显示图层
                    layer.setVisible(true);
                } else {
                    //不显示图层
                    layer.setVisible(false);
                }
            };
        },
        /**
         * 为checkbox元素绑定变更事件
         * @param {input} e checkbox元素
         * 控制图层的显示与隐藏
         */
        addChangeEventLayer(e) {
            let index = e.getAttribute("data-index");
            e.onclick = function () {
                if (e.checked) {
                    //可见 e.name代表图层索引
                    MapTree.mapDocLayer.setLayerStatus(index, "include");
                    MapTree.mapDocLayer.refresh();
                } else {
                    //不可见 e.name代表图层索引
                    MapTree.mapDocLayer.setLayerStatus(index, "exclude");
                    MapTree.mapDocLayer.refresh();
                }
            };

        },
        /**
         * 为checkbox元素绑定变更事件
         * @param {input} e checkbox元素
         * 控制专题图内对应属性的显示与隐藏
         */
        addChangeEventAttr(e) {
            let that = this;
            let mt = MapTree;
            let index1 = e.getAttribute("data-index1");
            let index2 = e.getAttribute("data-index2");
            let index3 = e.getAttribute("data-index3");
            e.onclick = function () {
                if (index1 == 0) {
                    if (e.checked) {
                        that.themesInfoArrs[0].ThemeArr[0].UniqueThemeInfoArr[index3].IsVisible = true;
                        MapSearch.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                        //调用专题图成服务功后的回调
                    } else {
                        that.themesInfoArrs[0].ThemeArr[0].UniqueThemeInfoArr[index3].IsVisible = false;
                        MapSearch.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                        //调用专题图成服务功后的回调
                    }
                } else if (index1 == 3) {
                    if (e.checked) {
                        that.themesInfoArrs1[0].ThemeArr[0].UniqueThemeInfoArr[index3].IsVisible = true;
                        MapSearch.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs1, that.onUniqueTheme.bind(that));
                        //调用专题图成服务功后的回调
                    } else {
                        that.themesInfoArrs1[0].ThemeArr[0].UniqueThemeInfoArr[index3].IsVisible = false;
                        MapSearch.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs1, that.onUniqueTheme.bind(that));
                        //调用专题图成服务功后的回调
                    }
                }
            };
        },
        /**
         * 为checkbox元素绑定变更事件
         * @param {input} e checkbox元素
         * 控制专题图层的显示与隐藏
         */
        addChangeEventTheme(e) {
            let that = this;
            let mt = MapTree;
            let index1 = e.getAttribute("data-index1");
            let index2 = e.getAttribute("data-index2");
            e.onclick = function () {
                if (e.checked) {
                    that.themesInfoArrs[index1].ThemeArr[index2].Visible = true;
                    MapSearch.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                    //调用专题图成服务功后的回调
                } else {
                    that.themesInfoArrs[index1].ThemeArr[index2].Visible = false;
                    MapSearch.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                    //调用专题图成服务功后的回调
                }
            };
        },
        //调用专题图成服务功后的回调
        onUniqueTheme(flg) {
            let that = this;
            if (flg) {
                //刷新地图，即重新加载生成专题图后的地图文档
                MapTree.mapDocLayer.refresh();
            } else {
                return false;
            }
        },
        /**
         * 动态设置元素文本内容（兼容）
         */
        setInnerText(element, text) {
            if (typeof element.textContent == "string") {
                element.textContent = text;
            } else {
                element.innerText = text;
            }
        },
        // 图层树功能End

        // 缩小,放大,平移到指定位置,复位.Begin
        // 单击缩小功能
        zoomOut() {
            //获取地图视图
            var view = this.map.getView();
            //获得当前缩放级数
            var zoom = view.getZoom();
            //地图缩小一级
            view.setZoom(zoom - 1);
        },
        // 单击放大功能
        zoomIn() {
            //获取地图视图
            var view = this.map.getView();
            //获得当前缩放级数
            var zoom = view.getZoom();
            //地图放大一级
            view.setZoom(zoom + 1);
        },
        // 单击平移功能,后续功能待添加
        translation() {
            //获取地图视图
            var view = this.map.getView();
            //获得当前缩放级数
            var zoom = view.getZoom();
            //地图放大一级
            //设置是否变化缩放级别
            // view.setZoom(zoom );
            //重新设置中心点
            view.setCenter([111.2, 34.76]);
        },
        //复位功能（复位到初始状态）
        restore() {
            //获取地图视图
            var view = this.map.getView();
            //初始中心点
            view.setCenter(Config.center);
            //初始旋转角度
            view.setRotation(Config.rotation);
            //初始缩放级数
            view.setZoom(Config.zoom);
        },
        // 点击事件集合
        clickEventsGroups() {
            let that = this;
            $(Config.zoomOutBtnGroups).on('click', () => {
                that.zoomOut();
            });
            $(Config.zoomInBtnGroups).on('click', () => {
                that.zoomIn();
            });
            $('#panto').on('click', () => {
                that.translation();
            });
            $(Config.zoomRestoreBtnGroups).on('click', () => {
                that.restore();
            });
        },
        // 缩小,放大,平移到指定位置,复位.End

        //初始化专题图服务类
        operInit() {

            let mt = MapTree;
            let config = Config;
            MapSearch.oper = new Zondy.Service.ThemeOper();
            MapSearch.oper.ip = config.ip;
            MapSearch.oper.port = config.port;
            MapSearch.oper.guid = mt.mapDocLayer.source.guid;
        },
        /* ===矢量地图文档目录服务（获取指定地图信息）=== */

        //获取指定地图信息
        getMapInfo() {
            let that = this;
            //实例化Zondy.Service.Catalog.MapDoc类，设置操作的地图文档为用户指定的地图文档,地图为索引值为0的地图
            var docCatalog = new Zondy.Service.Catalog.MapDoc({
                ip: Config.ip,
                port: Config.port,
                //设置地图文档的名称
                docName: Config.docName,
                //设置地图的索引号
                mapIndex: 0,
                //是否返回由DWS所返回的原始格式信息
                returnFullStyle: true
            });
            //调用getMapInfo函数，获取地图相关信息，在回调函数中处理结果
            docCatalog.getMapInfo(that.getListSuccess.bind(this), true, true);
        },
        //获取服务器地图文档列表成功后的回调函数
        getListSuccess(result) {
            let that = this;
            let mt = MapTree;
            if (result.length == 0) {
                alert("没有获取到矢量地图文档！");
                $("#reslutTable").empty(); //清空结果显示面板
                return;
            } else if (that.getMapInfos) {
                return;
            } else {
                //将一个JSON转换成一个包含JSON文本的字符串
                mt.formatData = JSON.parse(result.attribute[0].value);
                // console.log('====================================');
                // console.log(mt.formatData);
                // console.log('====================================');
                //将结果显示在指定的div
                // Process(formatData, 1, "reslutTable");
                let id = "#" + Config.mapTreeId;
                let dataArray = JSON.parse(result.attribute[0].value);
                //图层目录容器
                let length = $(id).children('li').length;
                let liLists = $(id).children(`li`)[length - 1];

                // if (!liLists.children('ul')) {

                // }
                var elementUl = document.createElement('ul');
                dataArray.forEach((ele, i) => {
                    if (ele) {
                        //获取每个图层的名称、是否可见属性
                    //新增li元素，用来承载图层项
                    var elementLi = document.createElement('li');
                    // 添加子节点
                    elementUl.appendChild(elementLi);
                    //创建复选框元素
                    var elementInput = document.createElement('input');
                    elementInput.type = "checkbox";
                    elementInput.checked = true;
                    // elementInput.name = i;
                    elementInput.setAttribute("data-index", i);
                    // elementInput.attributes = true;
                    elementLi.appendChild(elementInput);
                    //创建label元素
                    var elementLable = document.createElement('label');
                    elementLable.className = "layer";
                    //设置图层名称
                    let attrAr = ele.attributeArr;
                    attrAr.forEach((element, index) => {
                        if (element.name == 'name') {
                            elementInput.name = element.value;
                            elementLable.innerText = element.value;
                        }
                    });
                    elementLi.appendChild(elementLable);

                    //设置图层默认显示状态
                    // if (mt.layerVisibility[i]) {
                    //     elementInput.checked = true;
                    // }
                    //为checkbox添加变更事件

                    that.addChangeEventLayer(elementInput);
                    }
                });
                liLists.appendChild(elementUl);
                that.getMapInfos = true;
                that.updateTheme();
                that.updateTheme1();
                that.updateTheme2();
            }
        },

        //更新专题图
        updateTheme() {
            let that = this;
            let mt = MapTree;
            MapSearch.oper.getThemesInfo(Config.docName, "0/0", function (themesInfoArr) {
                that.themesInfoArrs = themesInfoArr;
                that.themeActive = Config.docName;
                if (themesInfoArr.length > 0 && themesInfoArr[0].ThemeArr != null) {
                    // 更新专题图信息
                    let id = "#" + Config.mapTreeId;
                    //图层目录容器
                    let length = $(id).children('li').length;
                    let liLists = $(id).children(`li`).eq(length - 1).children('ul').children('li')[0];
                    var elementUl = document.createElement('ul');
                    themesInfoArr.forEach((ele, i) => {
                        //设置图层名称
                        let attrAr = ele.ThemeArr;
                        attrAr.forEach((element, index) => {
                            let uniqueThemeArr = element.UniqueThemeInfoArr;
                            var elementUl2 = document.createElement('ul');
                            //获取每个图层的名称、是否可见属性
                            //新增li元素，用来承载图层项
                            var elementLi2 = document.createElement('li');
                            // 添加子节点
                            elementUl2.appendChild(elementLi2);
                            //创建复选框元素
                            // var elementInput2 = document.createElement('input');
                            // elementInput2.type = "checkbox";
                            // elementInput2.checked = true;
                            // // elementInput.name = i;
                            // elementInput2.setAttribute("data-index1", i);
                            // elementInput2.setAttribute("data-index2", index);
                            // // elementInput.attributes = true;
                            // elementLi2.appendChild(elementInput2);
                            //创建label元素
                            var elementLable2 = document.createElement('label');
                            elementLable2.className = "layer";
                            elementLable2.innerText = element.Name;
                            elementLi2.appendChild(elementLable2);
                            // 控制专题图展示
                            // that.addChangeEventTheme(elementInput2);

                            uniqueThemeArr.forEach((eles, indexs) => {
                                //获取每个图层的名称、是否可见属性
                                //新增li元素，用来承载图层项
                                var elementLi = document.createElement('li');
                                // 添加子节点
                                elementUl.appendChild(elementLi);
                                //创建复选框元素
                                var elementInput = document.createElement('input');
                                elementInput.type = "checkbox";
                                elementInput.checked = true;
                                // elementInput.name = i;
                                elementInput.setAttribute("data-index1", i);
                                elementInput.setAttribute("data-index2", index);
                                elementInput.setAttribute("data-index3", indexs);
                                // elementInput.attributes = true;
                                elementLi.appendChild(elementInput);
                                //创建label元素
                                var elementLable = document.createElement('label');
                                elementLable.className = "layer";
                                elementLable.innerText = eles.Caption;
                                elementLi.appendChild(elementLable);
                                that.addChangeEventAttr(elementInput);
                                elementLi2.appendChild(elementUl);
                            });
                            liLists.appendChild(elementUl2);
                        });
                        //设置图层默认显示状态
                        // if (mt.layerVisibility[i]) {
                        //     elementInput.checked = true;
                        // }
                        //为checkbox添加变更事件
                    });
                    // if (i == themesInfoArr[0].ThemeArr.length)
                    //     alert("没有该专题信息");
                } else
                    alert("没有该专题信息");
            });
        },
        updateTheme1() {
            let that = this;
            let mt = MapTree;
            MapSearch.oper.getThemesInfo(Config.docName, "2/0", function (themesInfoArr) {
                that.themesInfoArrs1 = themesInfoArr;
                that.themeActive = Config.docName;
                if (themesInfoArr.length > 0 && themesInfoArr[0].ThemeArr != null) {
                    // 更新专题图信息
                    let id = "#" + Config.mapTreeId;
                    //图层目录容器
                    let length = $(id).children('li').length;
                    let liLists = $(id).children(`li`).eq(length - 1).children('ul').children('li')[2];
                    let index1 = $(id).children(`li`).eq(length - 1).children('ul').children('li').eq(2).children('input').attr('data-index');
                    

                    let elementUl = document.createElement('ul');
                    themesInfoArr.forEach((ele, i) => {
                        
                        //设置图层名称
                        let attrAr = ele.ThemeArr;
                        attrAr.forEach((element, index) => {
                            let uniqueThemeArr = element.UniqueThemeInfoArr;
                            var elementUl2 = document.createElement('ul');
                            //获取每个图层的名称、是否可见属性
                            //新增li元素，用来承载图层项
                            var elementLi2 = document.createElement('li');
                            // 添加子节点
                            elementUl2.appendChild(elementLi2);
                            //创建复选框元素
                            // var elementInput2 = document.createElement('input');
                            // elementInput2.type = "checkbox";
                            // elementInput2.checked = true;
                            // // elementInput.name = i;
                            // elementInput2.setAttribute("data-index1", i);
                            // elementInput2.setAttribute("data-index2", index);
                            // // elementInput.attributes = true;
                            // elementLi2.appendChild(elementInput2);
                            //创建label元素
                            var elementLable2 = document.createElement('label');
                            elementLable2.className = "layer";
                            elementLable2.innerText = element.Name;
                            elementLi2.appendChild(elementLable2);
                            // 控制专题图展示
                            // that.addChangeEventTheme(elementInput2);

                            uniqueThemeArr.forEach((eles, indexs) => {
                                //获取每个图层的名称、是否可见属性
                                //新增li元素，用来承载图层项
                                var elementLi = document.createElement('li');
                                // 添加子节点
                                elementUl.appendChild(elementLi);
                                //创建复选框元素
                                var elementInput = document.createElement('input');
                                var elementInput1 = document.createElement('input');
                                elementInput.type = "checkbox";
                                elementInput1.type = "color";
                                elementInput.checked = true;
                                elementInput1.disabled = true;
                                // elementInput.name = i;
                                if (indexs == 0) {
                                    elementInput1.value = '#00FF00';
                                }
                                if (indexs == 1) {
                                    elementInput1.value = '#00B7D7';
                                }
                                if (indexs == 2) {
                                    elementInput1.value = '#F7B5CB';
                                }
                                if (indexs == 3) {
                                    elementInput1.value = '#F200A5';
                                }
                                elementInput.setAttribute("data-index1", index1);
                                elementInput.setAttribute("data-index2", index);
                                elementInput.setAttribute("data-index3", indexs);
                                elementInput1.setAttribute("data-colorCode", eles.LinInfo.OutClr[0]);
                                elementInput1.setAttribute("data-index", indexs);
                                // elementInput.attributes = true;
                                elementLi.appendChild(elementInput);
                                //创建label元素
                                var elementLable = document.createElement('label');
                                elementLable.className = "layer";
                                elementLable.innerText = eles.Caption;
                                elementLi.appendChild(elementLable);
                                elementLi.appendChild(elementInput1);
                                that.addChangeEventAttr(elementInput);
                                elementLi2.appendChild(elementUl);
                            });
                            liLists.appendChild(elementUl2);
                        });
                        //设置图层默认显示状态
                        // if (mt.layerVisibility[i]) {
                        //     elementInput.checked = true;
                        // }
                        //为checkbox添加变更事件
                        
                    });
                    
                    // if (i == themesInfoArr[0].ThemeArr.length)
                    //     alert("没有该专题信息");
                } else
                    alert("没有该专题信息");
            });
        },
        updateTheme2() {
            let that = this;
            let mt = MapTree;
            MapSearch.oper.getThemesInfo(Config.docName, "3/0", function (themesInfoArr) {
                that.themesInfoArrs1 = themesInfoArr;
                that.themeActive = Config.docName;
                if (themesInfoArr.length > 0 && themesInfoArr[0].ThemeArr != null) {
                    // 更新专题图信息
                    let id = "#" + Config.mapTreeId;
                    //图层目录容器
                    let length = $(id).children('li').length;
                    let liLists = $(id).children(`li`).eq(length - 1).children('ul').children('li')[3];
                    let index1 = $(id).children(`li`).eq(length - 1).children('ul').children('li').eq(3).children('input').attr('data-index');
                    

                    let elementUl = document.createElement('ul');
                    themesInfoArr.forEach((ele, i) => {
                        
                        //设置图层名称
                        let attrAr = ele.ThemeArr;
                        attrAr.forEach((element, index) => {
                            let uniqueThemeArr = element.UniqueThemeInfoArr;
                            var elementUl2 = document.createElement('ul');
                            //获取每个图层的名称、是否可见属性
                            //新增li元素，用来承载图层项
                            var elementLi2 = document.createElement('li');
                            // 添加子节点
                            elementUl2.appendChild(elementLi2);
                            //创建复选框元素
                            // var elementInput2 = document.createElement('input');
                            // elementInput2.type = "checkbox";
                            // elementInput2.checked = true;
                            // // elementInput.name = i;
                            // elementInput2.setAttribute("data-index1", i);
                            // elementInput2.setAttribute("data-index2", index);
                            // // elementInput.attributes = true;
                            // elementLi2.appendChild(elementInput2);
                            //创建label元素
                            var elementLable2 = document.createElement('label');
                            elementLable2.className = "layer";
                            elementLable2.innerText = element.Name;
                            elementLi2.appendChild(elementLable2);
                            // 控制专题图展示
                            // that.addChangeEventTheme(elementInput2);

                            uniqueThemeArr.forEach((eles, indexs) => {
                                //获取每个图层的名称、是否可见属性
                                //新增li元素，用来承载图层项
                                var elementLi = document.createElement('li');
                                // 添加子节点
                                elementUl.appendChild(elementLi);
                                //创建复选框元素
                                var elementInput = document.createElement('input');
                                var elementInput1 = document.createElement('input');
                                elementInput.type = "checkbox";
                                elementInput1.type = "color";
                                elementInput.checked = true;
                                elementInput1.disabled = true;
                                // elementInput.name = i;
                                if (indexs == 0) {
                                    elementInput1.value = '#FFBFA3';
                                }
                                if (indexs == 1) {
                                    elementInput1.value = '#FFDF87';
                                }
                                elementInput.setAttribute("data-index1", index1);
                                elementInput.setAttribute("data-index2", index);
                                elementInput.setAttribute("data-index3", indexs);
                                elementInput1.setAttribute("data-colorCode", eles.LinInfo.OutClr[0]);
                                elementInput1.setAttribute("data-index", indexs);
                                // elementInput.attributes = true;
                                elementLi.appendChild(elementInput);
                                //创建label元素
                                var elementLable = document.createElement('label');
                                elementLable.className = "layer";
                                elementLable.innerText = eles.Caption;
                                elementLi.appendChild(elementLable);
                                elementLi.appendChild(elementInput1);
                                that.addChangeEventAttr(elementInput);
                                elementLi2.appendChild(elementUl);
                            });
                            liLists.appendChild(elementUl2);
                        });
                        //设置图层默认显示状态
                        // if (mt.layerVisibility[i]) {
                        //     elementInput.checked = true;
                        // }
                        //为checkbox添加变更事件
                        
                    });
                    
                    // if (i == themesInfoArr[0].ThemeArr.length)
                    //     alert("没有该专题信息");
                } else
                    alert("没有该专题信息");
            });
        },
        //左侧功能栏切换
        toggleMenu() {
            if ($(".menu-trigger").hasClass("on")) {
                $(".menu-trigger").removeClass("on").addClass("off");
                $(".container_left").css("left", "-20%");
                $(".menu-trigger").text("》");
            } else {
                $(".menu-trigger").removeClass("off").addClass("on");
                $(".menu-trigger").text("《");
                $(".container_left").css("left", 0);
            }
        },
        // 初始化右下角天地图设置
        mapListInit() {
            $("#vecmap").css("border-color", "rgba(255, 255, 255,0.8)");
            $("#imgmap").css("border-color", "rgba(0, 255, 255,0.8)");
        },

        // 搜索功能Begin

        // 属性查询
        queryByAttribute(val) {
            //startPressBar();
            //初始化查询结构对象，设置查询结构包含几何信息
            let that = this;
            var queryStruct = new Zondy.Service.QueryFeatureStruct();
            queryStruct.IncludeGeometry = true;
            //实例化查询参数对象
            var queryParam = new Zondy.Service.QueryParameter({
                resultFormat: "json",
                struct: queryStruct
            });
            //设置查询分页号
            queryParam.pageIndex = 0;
            //设置查询要素数目
            queryParam.recordNumber = 50;

            // queryParam.where = name;
            var name = `name like '%${val}%'`;
            queryParam.where = name;

            //实例化地图文档查询服务对象
            var queryService = new Zondy.Service.QueryDocFeature(queryParam, Config.docName, 4, {
                ip: Config.ip,
                port: Config.port
            });
            //执行查询操作，querySuccess为查询回调函数
            queryService.query(that.querySuccess.bind(that), that.queryError.bind(that));
        },
        //道路查询
        roadQueryByAttribute(val) {
            let that = this;
            that.startPressBar();
            that.clearA();
            //初始化查询结构对象，设置查询结构包含几何信息
            var queryStruct = new Zondy.Service.QueryFeatureStruct();
            //是否包含几何图形信息
            queryStruct.IncludeGeometry = true;
            //是否包含属性信息
            queryStruct.IncludeAttribute = true;
            //是否包含图形显示参数
            queryStruct.IncludeWebGraphic = false;
            //实例化查询参数对象
            var queryParam = new Zondy.Service.QueryParameter({
                resultFormat: "json",
                struct: queryStruct
            });
            //设置查询分页号
            queryParam.pageIndex = 0;
            //设置查询要素数目
            queryParam.recordNumber = 60;

            // var name = `name like '%崤山%'`;
            var name = `name like '%${val}%'`;
            queryParam.where = name;

            
            //实例化地图文档查询服务对象
            var queryService = new Zondy.Service.QueryDocFeature(queryParam, Config.docName, 2, {
                ip: Config.ip,
                port: Config.port
            });
            //执行查询操作，querySuccess为查询回调函数
            queryService.query(that.roadQuerySuccess.bind(that), that.queryError.bind(that));
        },
        roadQuerySuccess(result) {
            let that = this;
            console.log(result);
            $('#reslutTable ul').html('');
            //停止进度条
            that.roadResults = result;
            that.stopPressBar();
            
            

            var formatData = JSON.stringify(result);
            
            var title = result.AttStruct.FldName;
            var dataArray = result.SFEleArray;
            var html = '';
            var nameIndex = '';
            var widthIndex = '';
            var idIndex = '';
            var regionIndex = '';
            title.forEach((ele, index) => {
                if (ele.toUpperCase() == 'NAME') {
                    nameIndex = index;
                }
                if (ele.toUpperCase() == 'WIDTH') {
                    widthIndex = index;
                }
                if (ele.toLowerCase() == 'property_type') {
                    idIndex = index;
                }
                if (ele.toUpperCase() == 'region') {
                    regionIndex = index;
                }
            });
            if (nameIndex >= 0 && dataArray) {
                that.clearA();
                for (var i = 0; i < dataArray.length; i++) {
                    var eles = dataArray[i].AttValue;
                    var elexy = dataArray[i].bound;
                    
                    html += `
                        <li data-index="${i}" data-width="${eles[widthIndex]}" data-id="${eles[idIndex]}" data-xmax="${(elexy.xmax+elexy.xmin)/2}" data-ymax="${(elexy.ymax+elexy.ymin)/2}">
                            <p>${eles[nameIndex]}</p>
                            <p style="display:none">${eles[widthIndex]}</p>
                            <p>${eles[idIndex]}</p>
                            <p style="display:none">${elexy.xmax}</p>
                            <p style="display:none">${elexy.ymax}</p>
                        </li>`
                }
                $('#reslutTable ul').html(html);
                $('#reslutTable ul li:eq(0)').addClass('search-active');
                // Process(formatData, 1, "reslutTable");
                //初始化Zondy.Format.PolygonJSON类
                var format = new Zondy.Format.PolygonJSON();
                //将MapGIS要素JSON反序列化为ol.Feature类型数组
                var features = format.read(result);

                //实例化一个矢量图层drawLayerr用于高亮显示结果
                var drawSource = new ol.source.Vector({
                    wrapX: false
                });
                drawSource.addFeatures(features);
                that.drawLayer = new ol.layer.Vector({
                    source: drawSource,
                    style: new ol.style.Style({
                        //填充色
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.5)'
                        }),
                        //边线样式
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255,0, 0, 1)',
                            width: 10
                        })
                    })
                });

                that.map.addLayer(that.drawLayer);

                // map.setView(new ol.View({
                //     center: [42, -25],
                //     zoom: 2,
                //     projection: 'EPSG:4326'
                // }));

            } else {
                html = '<li class="no-datas">暂无搜索结果</li>';
                $('#reslutTable ul').html(html);
                // $('#reslutTable ul li:eq(0)').addClass('search-active');
            }

        },
        //查询失败回调
        queryError(e) {
            let that = this;
            //停止进度条
            that.stopPressBar();
        },

        //属性查询成功回调
        querySuccess(result) {
            let that = this;
            var newFeatures = [];
            $('#reslutTable ul').html('');
            //停止进度条
            that.stopPressBar();

            var formatData = JSON.stringify(result);
            
            var title = result.AttStruct.FldName;
            var dataArray = result.SFEleArray;
            var html = '';
            var nameIndex = '';
            var addressIndex = '';
            var lonIndex = '';
            var latIndex = '';
            title.forEach((ele, index) => {
                if (ele.toUpperCase() == 'NAME') {
                    nameIndex = index;
                }
                if (ele.toUpperCase() == 'ADDNAME') {
                    addressIndex = index;
                }
                if (ele.toUpperCase() == 'LON') {
                    lonIndex = index;
                }
                if (ele.toUpperCase() == 'LAT') {
                    latIndex = index;
                }
            });
            if (nameIndex >= 0 && addressIndex >= 0 && lonIndex >= 0 && latIndex >= 0 && dataArray) {
                that.clearA();
                //vectorLayer = null;
                //删除图层

                for (var i = 0; i < dataArray.length; i++) {

                    var eles = dataArray[i].AttValue;
                    //
                    var lonIndex1 = eles[lonIndex] - 0;
                    var latIndex1 = eles[latIndex] - 0;
                    var nameIndex1 = eles[nameIndex];
                    //实例化Vector要素，通过矢量图层添加到地图容器中
                    //新建一个要素 ol.Feature
                    var newFeature = new ol.Feature({
                        //几何信息
                        geometry: new ol.geom.Point([lonIndex1, latIndex1]),
                        //名称属性
                        name: nameIndex1
                    });
                    //设置要素的样式
                    newFeature.setStyle(that.createLabelStyle(newFeature));
                    newFeatures.push(newFeature);


                    //将新要素添加到数据源中
                    //vectorSource.addFeature(newFeature);

                    html += `
                <li data-lon="${eles[lonIndex]}" data-lat="${eles[latIndex]}">
                    <p>${eles[nameIndex]}</p>
                    <p>${eles[addressIndex]}</p>
                    <p style="display:none;">${eles[lonIndex]}</p>
                    <p style="display:none;>${eles[latIndex]}</p>
                </li>`
                }
                $('#reslutTable ul').html(html);
                //矢量标注的数据源
                that.vectorSource = new ol.source.Vector({
                    features: newFeatures
                });
                //矢量标注图层
                that.vectorLayer = new ol.layer.Vector({
                    source: that.vectorSource
                });

                that.map.addLayer(that.vectorLayer);
            } else {
                html = '<li class="no-datas">暂无搜索结果</li>';
                $('#reslutTable ul').html(html);
            }
        },
        //poi添加点
        /**
         * 创建矢量标注样式函数,设置image为图标ol.style.Icon
         * @param {ol.Feature} feature 要素
         */
        createLabelStyle(feature) {
            return new ol.style.Style({
                image: new ol.style.Icon(
                    /** @type {olx.style.IconOptions} */
                    ({
                        anchor: [0.5, 0.1],
                        anchorOrigin: 'bottom-left',
                        anchorXUnits: 'fraction',
                        anchorYUnits: 'pixels',
                        offsetOrigin: 'bottom-left',
                        // offset:[0,10],
                        // 图标缩放比例
                        scale: 0.3,
                        //透明度
                        opacity: 1,
                        //图标的url
                        src: 'images/location-1.png'
                    })),
                text: new ol.style.Text({
                    //位置
                    textAlign: 'center',
                    //基准线
                    textBaseline: 'middle',
                    //文字样式
                    font: 'normal 12px 微软雅黑',
                    //文本内容
                    text: feature.get('name'),
                    //文本填充样式（即文字颜色）
                    fill: new ol.style.Fill({
                        color: '#aa3300'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#ffcc33',
                        width: 2
                    })
                })
            });
        },
        //清除客户端查询结果信息
        clearA() {
            //停止进度条
            let that = this;
            that.stopPressBar();
            if (that.vectorLayer) {
                //map.removeLayer(vectorLayer);
                that.vectorSource = null;
                //清空绘制图形
                that.vectorLayer.setSource(that.vectorSource);
                that.map.addLayer(that.vectorLayer);
            }

            if (that.drawLayer) {
                //map.removeLayer(drawLayer);
                that.drawSource = null;
                //清空绘制图形
                that.drawLayer.setSource(that.drawSource);
                that.map.addLayer(that.drawLayer);
            }

            if (that.drawLayer1) {
                //map.removeLayer(drawLayer);
                that.drawSource = null;
                //清空绘制图形
                that.drawLayer1.setSource(that.drawSource);
                that.map.addLayer(that.drawLayer1);
            }
        },
        //停止进度条
        stopPressBar() {
            $('#preview').css("display", "none");
        },
        //开始进度条动画
        startPressBar() {
            $('#preview').css("display", "block");
        },
        //搜索END

        //测绘Begin
        /**
         * 鼠标移动事件处理函数
         * @param {ol.MapBrowserEvent} evt
         */
        pointerMoveHandler(evt) {
            let measure = MapMeasure;
            let that = this;
            if (evt.dragging) {
                return;
            }
            /** @type {string} */
            var helpMsg = '鼠标单击开始绘制'; //当前默认提示信息
            //判断绘制几何类型设置相应的帮助提示信息
            if (measure.sketch) {
                var geom = (measure.sketch.getGeometry());
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = measure.continuePolygonMsg; //绘制多边形时提示相应内容
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = measure.continueLineMsg; //绘制线时提示相应内容
                }
            }
            measure.helpTooltipElement.innerHTML = helpMsg; //将提示信息设置到对话框中显示
            measure.helpTooltip.setPosition(evt.coordinate); //设置帮助提示框的位置
            $(measure.helpTooltipElement).removeClass('hidden'); //移除帮助提示框的隐藏样式进行显示
        },
        /**
         * 加载交互绘制控件函数
         */
        addInteraction() {
            let measure = MapMeasure;
            let that = this;
            var type = (measure.measuertype == '面积测量' ? 'Polygon' : 'LineString');
            measure.draw = new ol.interaction.Draw({
                source: measure.measure_source, //测量绘制层数据源
                type: /** @type {ol.geom.GeometryType} */ (type), //几何图形类型
                style: new ol.style.Style({ //绘制几何图形的样式
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.5)',
                        lineDash: [10, 10],
                        width: 2
                    }),
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)'
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)'
                        })
                    })
                })
            });
            that.map.addInteraction(measure.draw);

            that.createMeasureTooltip(); //创建测量工具提示框
            that.createHelpTooltip(); //创建帮助提示框

            var listener;
            //绑定交互绘制工具开始绘制的事件
            measure.draw.on('drawstart',
                function (evt) {
                    // set sketch
                    measure.sketch = evt.feature; //绘制的要素
                    /** @type {ol.Coordinate|undefined} */
                    var tooltipCoord = evt.coordinate; // 绘制的坐标
                    //绑定change事件，根据绘制几何类型得到测量长度值或面积值，并将其设置到测量工具提示框中显示
                    listener = measure.sketch.getGeometry().on('change', function (evt) {
                        var geom = evt.target; //绘制几何要素
                        var output;
                        if (geom instanceof ol.geom.Polygon) {
                            output = that.formatArea( /** @type {ol.geom.Polygon} */ (geom)); //面积值
                            tooltipCoord = geom.getInteriorPoint().getCoordinates(); //坐标
                        } else if (geom instanceof ol.geom.LineString) {
                            output = that.formatLength( /** @type {ol.geom.LineString} */ (geom)); //长度值
                            tooltipCoord = geom.getLastCoordinate(); //坐标
                        }
                        measure.measureTooltipElement.innerHTML = output; //将测量值设置到测量工具提示框中显示
                        measure.measureTooltip.setPosition(tooltipCoord); //设置测量工具提示框的显示位置
                    });
                }, this);
            //绑定交互绘制工具结束绘制的事件
            measure.draw.on('drawend',
                function (evt) {
                    measure.measureTooltipElement.className = 'tooltip tooltip-static'; //设置测量提示框的样式
                    measure.measureTooltip.setOffset([0, -7]);
                    measure.sketch = null; //置空当前绘制的要素对象
                    measure.measureTooltipElement = null; //置空测量工具提示框对象
                    that.createMeasureTooltip(); //重新创建一个测试工具提示框显示结果
                    ol.Observable.unByKey(listener);
                }, this);
        },

        /**
         *创建一个新的帮助提示框（tooltip）
         */
        createHelpTooltip() {
            let measure = MapMeasure;
            let that = this;
            if (measure.helpTooltipElement) {
                measure.helpTooltipElement.parentNode.removeChild(measure.helpTooltipElement);
            }
            measure.helpTooltipElement = document.createElement('div');
            measure.helpTooltipElement.className = 'tooltip hidden';
            measure.helpTooltip = new ol.Overlay({
                element: measure.helpTooltipElement,
                offset: [15, 0],
                positioning: 'center-left'
            });
            that.map.addOverlay(measure.helpTooltip);
        },
        /**
         *创建一个新的测量工具提示框（tooltip）
         */
        createMeasureTooltip() {
            let measure = MapMeasure;
            let that = this;
            if (measure.measureTooltipElement) {
                measure.measureTooltipElement.parentNode.removeChild(measure.measureTooltipElement);
            }
            measure.measureTooltipElement = document.createElement('div');

            measure.measureTooltipElement.className = 'tooltip tooltip-measure';
            measure.measureTooltip = new ol.Overlay({
                element: measure.measureTooltipElement,
                offset: [0, -15],
                positioning: 'bottom-center'
            });
            measure.measureTooltip.cls == "MeasureTooltip"
            that.map.addOverlay(measure.measureTooltip);
        },

        /**
         * 测量长度输出
         * @param {ol.geom.LineString} line
         * @return {string}
         */
        formatLength(line) {
            let measure = MapMeasure;
            let that = this;
            var coordinates = line.getCoordinates(); //解析线的坐标
            var length = 0;
            var sourceProj = that.map.getView().getProjection(); //地图数据源投影坐标系
            //通过遍历坐标计算两点之前距离，进而得到整条线的长度
            for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
                var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
                var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
                length += measure.wgs84Sphere.haversineDistance(c1, c2);
            }
            var output;
            if (length > 100) {
                output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km'; //换算成KM单位
            } else {
                output = (Math.round(length * 100) / 100) + ' ' + 'm'; //m为单位
            }
            return output; //返回线的长度
        },
        /**
         * 测量面积输出
         * @param {ol.geom.Polygon} polygon
         * @return {string}
         */
        formatArea(polygon) {
            let measure = MapMeasure;
            let that = this;
            var sourceProj = that.map.getView().getProjection(); //地图数据源投影坐标系
            var geom = /** @type {ol.geom.Polygon} */ (polygon.clone().transform(sourceProj, 'EPSG:4326')); //将多边形要素坐标系投影为EPSG:4326
            var coordinates = geom.getLinearRing(0).getCoordinates(); //解析多边形的坐标值
            var area = Math.abs(measure.wgs84Sphere.geodesicArea(coordinates)); //获取面积
            var output;
            if (area > 10000) {
                output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>'; //换算成KM单位
            } else {
                output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>'; //m为单位
            }
            return output; //返回多边形的面积
        },
        //搜索结果切换
        resultChange(ele) {
            let that = this;
            if (!ele.hasClass('search-active')) {
                ele.addClass('search-active').siblings().removeClass('search-active');
            }
            // clearA();
            if (that.acitiveSearch == 1) {
                var lon = ele.attr('data-lon') - 0;
                var lat = ele.attr('data-lat') - 0;
                var view = that.map.getView();
                var zoom1 = view.getZoom();
                view.setZoom(15);
                //初始中心点
                view.setCenter([lon, lat]);
            } else if (that.acitiveSearch == 2) {
                that.clearA();
                var xmax = ele.attr('data-xmax') - 0;
                var ymax = ele.attr('data-ymax') - 0;
                var id = ele.attr('data-id');
                var index = ele.attr('data-index');
                // 单个高亮显示时候
                var resultsSingles = Config.deepClone(that.roadResults);
                resultsSingles.SFEleArray = [resultsSingles.SFEleArray[index]]; //应该拼成一个数组
                resultsSingles.TotalCount = 1;
                var format = new Zondy.Format.PolygonJSON();
                var features = format.read(resultsSingles);
                //实例化一个矢量图层drawLayerr用于高亮显示结果
                var drawSource = new ol.source.Vector({
                    wrapX: false
                });
                drawSource.addFeatures(features);

                that.drawLayer1 = new ol.layer.Vector({
                    source: drawSource,
                    style: new ol.style.Style({
                        //填充色
                        fill: new ol.style.Fill({
                            color: 'rgba(255,0, 0, 1)'
                        }),
                        //边线样式
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255,0, 0, 1)',
                            width: 12
                        })
                    })
                });
                that.map.addLayer(that.drawLayer1);
                var view = that.map.getView();
                var zoom1 = view.getZoom();
                view.setZoom(15);
                //初始中心点
                view.setCenter([xmax, ymax]);
            }
        },
        init() {
            let that = this;
            let measure = MapMeasure;
            // 初始化图层树控件
            that.loadLayersControl(that.map, Config.mapTreeId);
            // 挂载点击事件
            that.clickEventsGroups();
            // 初始化专题服务类
            that.operInit();
            // 初始化左下角专题图框选择
            that.mapListInit();
            //实现目录的隐藏和显示
            if ($(".menu-trigger").length > 0) {
                $(".menu-trigger").on("click", function () {
                    that.toggleMenu();
                })
            }
            // poi搜索
            $("#gis-search").on('click', function () {
                that.clearA();
                that.acitiveSearch = 1;
                var val = $("#search-input").val();
                // if (inputSearch){
                //     map.removeLayer(vectorLayer);
                // }
                // if (vectorLayer) {
                //     //移除高亮显示结果图层drawLayerr
                //     map.removeLayer(vectorLayer);
                //
                // }
                if (!val) {
                    alert('您还没有输入信息呢！');
                } else {
                    that.inputSearch = val;
                    that.queryByAttribute(val);
                    $("#reslutTable").show();
                }
            });
            // 道路搜索
            $("#road-search").on('click', function () {
                that.clearA();
                that.acitiveSearch = 2;
                var val = $("#search-input").val();
                if (that.inputSearch) {
                    that.map.removeLayer(that.vectorLayer);
                }
                if (!val) {
                    alert('您还没有输入信息呢！');
                } else {
                    that.inputSearch = val;
                    that.roadQueryByAttribute(val);
                    $("#reslutTable").show();
                }
            });
            // 搜索结果的点击切换
            $("#reslutTable>ul").on('click', 'li', function () {
                let _that = $(this);
                that.resultChange(_that);
            });
            // 右下角地图切换
            $('#vecmap').on('click', function () {
                LayerGroup.vecLayergroup.getLayersArray()[0].setZIndex(-1);
                LayerGroup.vecLayergroup.getLayersArray()[1].setZIndex(-1);
                LayerGroup.imgLayergroup.getLayersArray()[0].setZIndex(-2);
                LayerGroup.imgLayergroup.getLayersArray()[1].setZIndex(-2);

                $("#vecmap").css("border-color", "rgba(0, 255, 255,0.8)");
                $("#imgmap").css("border-color", "rgba(255, 255, 255,0.8)");


            });
            //关闭搜索列表页面
            $("#close-search").on('click', function () {
                that.clearA();
                $("#reslutTable").hide();
                $("#reslutTable ul").html('');
                //alert(1);
                //vectorLayer = null;
                that.map.removeLayer(that.vectorLayer);
            });
            $('#imgmap').on('click', function () {
                LayerGroup.imgLayergroup.getLayersArray()[0].setZIndex(-1);
                LayerGroup.imgLayergroup.getLayersArray()[1].setZIndex(-1);
                LayerGroup.vecLayergroup.getLayersArray()[0].setZIndex(-2);
                LayerGroup.vecLayergroup.getLayersArray()[1].setZIndex(-2);
                $("#vecmap").css("border-color", "rgba(255, 255, 255,0.8)");
                $("#imgmap").css("border-color", "rgba(0, 255, 255,0.8)");

            });
            $('.commontool').find("span").click(function () {
                $(this).parent().find("span").each(function () {
                    $(this).removeClass('a_click');
                });
                $(this).addClass('a_click');
                if (measure.draw != null) {
                    that.map.removeInteraction(measure.draw); //移除绘制图形
                    measure.draw = null;
                }
                if ($(this).attr("title") == "退出测量") {
                    that.map.un('pointermove', that.pointerMoveHandler); //地图容器绑定鼠标移动事件，动态显示帮助提示框内容
                    if (measure.helpTooltipElement) {
                        measure.helpTooltipElement.parentNode.removeChild(measure.helpTooltipElement);
                        measure.helpTooltipElement = null;
                    }
                    if (measure.meaurserVector) {
                        that.map.removeLayer(measure.meaurserVector);
                        measure.meaurserVector = null;
                        measure.measure_source = null;
                    }
                    if (measure.measureTooltipElement) {
                        var len = that.map.getOverlays().getLength();
                        var j = 0;
                        for (var i = 0; i < len; i++) {
                            that.map.removeOverlay(that.map.getOverlays().getArray()[j]);
                        }
                        measure.measureTooltipElement = null;
                    }
                    return;
                }
                if ($(this).attr("title") == "距离测量" || $(this).attr("title") == "面积测量") {
                    measure.measuertype = $(this).attr("title");
                    if (measure.meaurserVector == null) {
                        measure.measure_source = new ol.source.Vector();
                        //加载测量的绘制矢量层
                        measure.meaurserVector = new ol.layer.Vector({
                            source: measure.measure_source,
                            style: new ol.style.Style({ //图层样式
                                fill: new ol.style.Fill({
                                    color: 'rgba(255, 255, 255, 0.6)' //填充颜色
                                }),
                                stroke: new ol.style.Stroke({
                                    color: '#ff0000', //边框颜色
                                    width: 5 // 边框宽度
                                }),
                                image: new ol.style.Circle({
                                    radius: 7,
                                    fill: new ol.style.Fill({
                                        color: '#ff0000'
                                    })
                                })
                            })
                        });
                        that.map.addLayer(measure.meaurserVector);
                    }

                    that.map.on('pointermove', that.pointerMoveHandler); //地图容器绑定鼠标移动事件，动态显示帮助提示框内容
                    //地图绑定鼠标移出事件，鼠标移出时为帮助提示框设置隐藏样式
                    $(that.map.getViewport()).on('mouseout', function () {
                        $(that.helpTooltipElement).addClass('hidden');
                    });
                    that.addInteraction(); //添加绘图进行测量
                }

                if ($(this).attr("title") == "地图导出") {

                    document.execCommand('SaveAs');
                    that.map.once('postcompose', function (event) {
                        var canvas = event.context.canvas;
                        if (navigator.msSaveBlob) {
                            navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
                        } else {
                            canvas.toBlob(function (blob) {
                            });
                        }
                    });
                    that.map.renderSync();
                }
            });
            // popup标注隐藏
            $('#popup-closer').click(function () {
                //未定义popup位置
                popup.setPosition(undefined);
                //失去焦点
                $('#popup-closer')[0].blur();
                clearA();
                return false;
            });
            $('#vecmap').click();
        }
    };
    Base.init();
});