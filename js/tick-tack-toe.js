
// /*eslint-disable no-undef */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
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

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove(event) {

  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

// function render() {

// 	// update the picking ray with the camera and mouse position
// 	raycaster.setFromCamera( mouse, camera );

// 	// calculate objects intersecting the picking ray
// 	var intersects = raycaster.intersectObjects( scene.children );

// 	for ( var i = 0; i < intersects.length; i++ ) {

// 		intersects[ i ].object.material.color.set( 0xff0000 );

// 	}

// 	renderer.render( scene, camera );

// }

// window.addEventListener( 'mousemove', onMouseMove, false );

// window.requestAnimationFrame(render);


//========================== constrols =================================

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enabled = false;

const objects = [o, x, o2, x2, o3, x3, o4, x4, o5, x5];
const controls2 = new THREE.DragControls(objects, camera, renderer.domElement);

let onObj = false;

function disabledControls() {
  window.removeEventListener('mousedown', test)
  controls.enabled = false;
  console.log('hi')

}

//========================== render =================================

var render = function () {

  // update ray with the camera/mouse position
  raycaster.setFromCamera(mouse, camera);

  // find objects intersecting the ray
  var intersects = raycaster.intersectObjects(objects, board);

  for (var i = 0; i < intersects.length; i++) {
    // intersects[i].object.rotation.x = Math.PI / 2;
    // if (intersects[i].object.material.color) {
    //   intersects[i].object.material.color.set(0xff0000);
    // }
  }

  const setShiftKey = function (event) {
    if (event.keyCode === 16 || event.charCode === 16) {
      return true;
    }
    return false;
  };

  window.addEventListener('keydown', function(event) {
    if (setShiftKey(event)) {
      controls.enabled = true;
    }
  })

  window.addEventListener('keyup', function(event) {
    if (setShiftKey(event)) {
      controls.enabled = false;
    }
  })

  renderer.render(scene, camera);
};

window.addEventListener('mousemove', onMouseMove, false);

window.requestAnimationFrame(render);

var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  // update();
  render();
};

GameLoop();
