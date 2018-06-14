'use strict';
$(function () {
    let Base = window.Base || {}; // 基础配置文件
    let Config = window.Config || {}; // 图层树展示
    let MapTree = window.MapTree || {}; // 实例化Map对象加载地图,并为其添加相关功能

    // 基础配置文件
    Config = {
        //地图容器div的ID
        target: 'mapCon',
        // 瓦片地图名称
        TileName: "天地图_影像13_15",
        // 瓦片地图的显示名称
        tName: "MapGIS IGS TileLayer",
        // 矢量地图名称
        docName: "12345",
        doc2Name: "LRDL_2000",
        // 矢量地图显示名称
        mName: "MapGIS IGS MapDocLayer",
        // ip地址
        ip: "10.164.251.222",
        // 端口号
        port: "6163",
        user: "",
        password: "",
        // 地图中心点
        center: [111.2, 34.77],
        // 投影
        projection4: "EPSG:4326",
        projection3: "EPSG:3857",
        // 初始缩放级别
        zoom: 14,
        // 最小缩放级别
        minZoom: 13,
        // 最大缩放级别
        maxZoom: 16,
        //设置旋转角度
        // rotation: Math.PI / 6
        rotation: 0,
        // 鼠标位置DOM的ID
        mousePosition: 'mouse-position',
        // 地图缩放延伸的区域
        extend: [111.13227664319722, 34.712871905272884, 111.27904811225743, 34.80599655079968],
        //图层列表容器ID
        mapTreeId: "layerTree",
        //缩放按钮集合jQuery dom节点,例:"#zoom-in,.zoom-in"
        zoomInBtnGroups: "#zoom-in",
        zoomOutBtnGroups: "#zoom-out",
        zoomRestoreBtnGroups: "#restore",
        // 地图数组
        mapArray: [MapTree.TileLayer, MapTree.mapDocLayer, MapTree.map2DocLayer]
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
        mapDocLayer: new Zondy.Map.Doc(Config.mName, Config.docName, {
            ip: Config.ip,
            port: Config.port
        }),
        map2DocLayer: new Zondy.Map.Doc(Config.mName, Config.doc2Name, {
            ip: Config.ip,
            port: Config.port
        }),
        TileLayer: new Zondy.Map.TileLayer(Config.tName, Config.TileName, {
            ip: Config.ip,
            port: Config.port
        }),
        oper: null
    };

    // 实例化Map对象加载地图,并为其添加相关功能
    Base = {
        //获取地图视图
        getMapInfos: false,
        themeActive: '',
        themesInfoArrs: [],
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
                MapTree.TileLayer, MapTree.mapDocLayer
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
            controls: ol.control.defaults().extend([
                //鼠标位置在当前地图中位置展示
                new ol.control.MousePosition({
                    target: document.getElementById(Config.mousePosition)
                }),
                // // 地图延伸区域设置,效果同view.extent
                // new ol.control.ZoomToExtent({
                //     extent: Config.extend
                // })
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
            for (var i = 0; i < layers.getLength(); i++) {
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
                that.addChangeEvent(elementInput, mt.layer[i]);
            }
        },
        /**
         * 为checkbox元素绑定变更事件
         * @param {input} element checkbox元素
         * @param {ol.layer.Layer} layer 图层对象
         */
        addChangeEvent(element, layer) {
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
        addChangeEvent2(e) {
            console.log(e.checked);
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
        addChangeEvent3(e) {
            let that = this;
            let mt = MapTree;
            console.log(e.checked);
            let index1 = e.getAttribute("data-index1");
            let index2 = e.getAttribute("data-index2");
            let index3 = e.getAttribute("data-index3");
            e.onclick = function () {
                if (e.checked) {
                    //可见 e.name代表图层索引
                    // MapTree.mapDocLayer.setLayerStatus(index, "include");
                    // MapTree.mapDocLayer.refresh();
                    that.themesInfoArrs[index1].ThemeArr[index2].UniqueThemeInfoArr[0].IsVisible = true;
                    mt.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                    //调用专题图成服务功后的回调
                } else {
                    //不可见 e.name代表图层索引
                    // MapTree.mapDocLayer.setLayerStatus(index, "exclude");
                    // MapTree.mapDocLayer.refresh();
                    that.themesInfoArrs[index1].ThemeArr[index2].UniqueThemeInfoArr[0].IsVisible = false;
                    mt.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                    //调用专题图成服务功后的回调
                }
            };
        },
        addChangeEvent4(e) {
            let that = this;
            let mt = MapTree;
            console.log(e.checked);
            let index1 = e.getAttribute("data-index1");
            let index2 = e.getAttribute("data-index2");
            e.onclick = function () {
                if (e.checked) {
                    //可见 e.name代表图层索引
                    // MapTree.mapDocLayer.setLayerStatus(index, "include");
                    // MapTree.mapDocLayer.refresh();
                    that.themesInfoArrs[index1].ThemeArr[index2].Visible = true;
                    mt.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                    //调用专题图成服务功后的回调
                } else {
                    //不可见 e.name代表图层索引
                    // MapTree.mapDocLayer.setLayerStatus(index, "exclude");
                    // MapTree.mapDocLayer.refresh();
                    that.themesInfoArrs[index1].ThemeArr[index2].Visible = false;
                    mt.oper.updateThemesInfo(that.themeActive, `${index1}/${index2}`, that.themesInfoArrs, that.onUniqueTheme.bind(that));
                    //调用专题图成服务功后的回调
                }
            };
        },
        //调用专题图成服务功后的回调
        onUniqueTheme(flg) {
            let that = this;
            console.log(that.map);
            if (flg) {
                //刷新地图，即重新加载生成专题图后的地图文档
                MapTree.mapDocLayer.refresh();
            }
            else {
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
            $("#doc1").on('click', () => {
                that.getMapInfo();
            });
            $("#doc2").on('click', () => {
                that.updateTheme();
            });
        },
        // 缩小,放大,平移到指定位置,复位.End

        operInit() {
            //初始化专题图服务类
            let mt = MapTree;
            let config = Config;
            mt.oper = new Zondy.Service.ThemeOper();
            mt.oper.ip = config.ip;
            mt.oper.port = config.port;
            mt.oper.guid = mt.mapDocLayer.source.guid;
        },
        //更新专题图
        updateTheme() {
            let that = this;
            let mt = MapTree;
            mt.oper.getThemesInfo(Config.docName, "0/0", function (themesInfoArr) {
                that.themesInfoArrs = themesInfoArr;
                that.themeActive = Config.docName;
                if (themesInfoArr.length > 0 && themesInfoArr[0].ThemeArr != null) {
                    // for (i = 0; i < themesInfoArr[0].ThemeArr.length; i++) {
                    //     if (themesInfoArr[0].ThemeArr[i].Type == "CUniqueTheme") {
                    //         themesInfoArr[0].ThemeArr[i].UniqueThemeInfoArr[0].RegInfo.FillClr = 23;
                    //         themesInfoArr[0].ThemeArr[i].UniqueThemeInfoArr[1].RegInfo.FillClr = 353;
                    //         themesInfoArr[0].ThemeArr[0].DefaultInfo.RegInfo.FillClr = 12;

                    //     }
                    // }
                    // 更新专题图信息
                    let id = "#" + Config.mapTreeId;
                    //图层目录容器
                    let length = $(id).children('li').length;
                    let liLists = $(id).children(`li`).eq(length - 1).children('ul').children('li')[0];
                    var elementUl = document.createElement('ul');
                    themesInfoArr.forEach((ele, i) => {
                        console.log(ele, i);
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
                            var elementInput2 = document.createElement('input');
                            elementInput2.type = "checkbox";
                            elementInput2.checked = true;
                            // elementInput.name = i;
                            elementInput2.setAttribute("data-index1", i);
                            elementInput2.setAttribute("data-index2", index);
                            // elementInput.attributes = true;
                            elementLi2.appendChild(elementInput2);
                            //创建label元素
                            var elementLable2 = document.createElement('label');
                            elementLable2.className = "layer";
                            elementLable2.innerText = element.Name;
                            elementLi2.appendChild(elementLable2);
                            that.addChangeEvent4(elementInput2);

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
                                that.addChangeEvent3(elementInput);
                                elementUl2.appendChild(elementUl);
                            });
                            liLists.appendChild(elementUl2);
                        });
                        //设置图层默认显示状态
                        // if (mt.layerVisibility[i]) {
                        //     elementInput.checked = true;
                        // }
                        //为checkbox添加变更事件
                        console.log(that);
                    });
                    console.log(elementUl);
                    // if (i == themesInfoArr[0].ThemeArr.length)
                    //     alert("没有该专题信息");
                } else
                    alert("没有该专题信息");
            });
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
                MapTree.formatData = JSON.parse(result.attribute[0].value);
                //将结果显示在指定的div
                // Process(formatData, 1, "reslutTable");
                let id = "#" + Config.mapTreeId;
                let dataArray = JSON.parse(result.attribute[0].value);
                //图层目录容器
                let length = $(id).children('li').length;
                let liLists = $(id).children(`li`)[length - 1];
                console.log($(id).children(`li`).children('ul'));

                // if (!liLists.children('ul')) {

                // }
                var elementUl = document.createElement('ul');
                dataArray.forEach((ele, i) => {
                    console.log(ele, i);
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
                    console.log(that);

                    that.addChangeEvent2(elementInput);
                });
                liLists.appendChild(elementUl);
                that.getMapInfos = true;
            }
        },
        init() {
            let that = this;
            // 初始化图层树控件
            that.loadLayersControl(that.map, Config.mapTreeId);
            // 挂载点击事件
            that.clickEventsGroups();
            // 初始化专题服务类
            that.operInit();
            console.log(MapTree);
        }
    };
    Base.init();
});