
// /*eslint-disable no-undef */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//===================== resize on widow resize =================================

window.addEventListener('resize', function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

//============================ board ===================================

const board = Board();
scene.add(board);

//=============================== Xs =====================================

const x = Xs(5, 3);
scene.add(x);

const x2 = Xs(5);
scene.add(x2);

const x3 = Xs(5, -3);
scene.add(x3);

const x4 = Xs(6.5, 1.5);
scene.add(x4);

const x5 = Xs(6.5, -1.5);
scene.add(x5);

//=============================== Os =====================================
const o = Os(-7);
scene.add(o);

const o2 = Os(-7, 3);
scene.add(o2);

const o3 = Os(-7, -3);
scene.add(o3);

const o4 = Os(-8.5, 1.5);
scene.add(o4);

const o5 = Os(-8.5, -1.5);
scene.add(o5);

//========================= camera position ===============================

camera.position.z = 15;

//============================ lighting ===================================

const ambientLighting = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLighting);

const spotlight = new THREE.PointLight(0xFFFFFF, 2, 150);
spotlight.position.set(50, 50, 50);
scene.add(spotlight);

const spotlight2 = new THREE.PointLight(0xFFFFFF, 2, 100);
spotlight2.position.set(-50, -50, -50);
scene.add(spotlight2);


//========================== constrols =================================

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const objects = [o, x, o2, x2, o3, x3, o4, x4, o5, x5];
const controls2 = new THREE.DragControls(objects, camera, renderer.domElement);


var render = function () {
  renderer.render(scene, camera);
};

var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  // update();
  render();
};

GameLoop();
