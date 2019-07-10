var renderer;

function initThree() {
  width = document.getElementById('canvas-frame').clientWidth;
  height = document.getElementById('canvas-frame').clientHeight;
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  document.getElementById('canvas-frame').appendChild(renderer.domElement);
  renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;

function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.x = 0;
  camera.position.y = 1000;
  camera.position.z = 0;
  camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 1;
  camera.lookAt(
    0,
    0,
    0
  );
}

var scene;

function initScene() {
  scene = new THREE.Scene();
}

var light;

function initLight() {
  light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
  light.position.set(100, 100, 200);
  scene.add(light);
}

var cube;

function initObject() {
	var geometry = new THREE.Geometry();
	// B begin
	geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
	geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );
	// B end

	for ( var i = 0; i <= 20; i ++ ) {

		var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
		line.position.z = ( i * 50 ) - 500;
		scene.add( line );

		var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
		line.position.x = ( i * 50 ) - 500;
		line.rotation.y = 90 * Math.PI / 180;
		scene.add( line );

	}
}

function render() {
  renderer.clear();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function threeStart() {
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  render();
}

window.onload=function () {
  threeStart()
}