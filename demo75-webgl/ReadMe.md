#Three

##一、脚本地址

	https://github.com/mrdoob/three.js

##二、三大组件及基础操作

###1、三大组件

	1、场景（scene）
	2、相机（camera）
	3、渲染器（renderer）
	
	代码
	var scene = new THREE.Scene();  // 场景
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);// 透视相机
	var renderer = new THREE.WebGLRenderer();   // 渲染器
	renderer.setSize(window.innerWidth, window.innerHeight);    // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
	document.body.appendChild(renderer.domElement);	

###2、添加物体到场景中

	var geometry = new THREE.CubeGeometry(1,1,1); 
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var cube = new THREE.Mesh(geometry, material); 
	scene.add(cube);
	
	原型：CubeGeometry(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides)
		width：立方体x轴的长度

		height：立方体y轴的长度

		depth：立方体z轴的深度，也就是长度

###3、渲染

	renderer.render(scene, camera);
	
	渲染的原型
	render( scene, camera, renderTarget, forceClear )
		scene 前面定义的场景
		camera 前面定义的相机
		renderTarget 渲染的目标，默认是渲染到前面定义的render变量中
		forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。

###4、渲染循环

	渲染有两种方式：实时渲染和离线渲染 。

##三、点线面

###1、点

在3D世界中点可以用THREE.Vector3D来表示，以下定义了一个x=4,y=8,z=9的点。

	方法一、var point1 = new THREE.Vecotr3(4,8,9);
	方法二、var point1 = new THREE.Vector3();point1.set(4,8,9);
	
###2、线，参考demo2

	1. 声明一个几何体geometry -> var geometry = new THREE.Geometry();
	2. 几何体中有一个vertices变量，可以用来存放点。
		1. 定义一种线条的材质，使用THREE.LineBasicMaterial类型来定义，它接受一个集合作为参数，其原型如下LineBasicMaterial(parameters) 
			1. color：16进制颜色默认白颜色，
			2. Linewith：线宽默认，
			3. Linecap：线条两端外观默认圆角端点，
			4. Linejoin：两个线条连接点处的外观，默认是‘round’，表示圆角
			5. VertexColors：定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值。
			6. Fog：定义材质的颜色是否受全局雾效的影响。