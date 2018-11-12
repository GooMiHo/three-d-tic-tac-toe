
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

const x = Xs(12, 3, 2);
scene.add(x);

const x2 = Xs(12, 0, 2);
scene.add(x2);

const x3 = Xs(12, -3, 2);
scene.add(x3);

const x4 = Xs(14.5, 1.5, 2);
scene.add(x4);

const x5 = Xs(14.5, -1.5, 2);
scene.add(x5);

const x6 = Xs(10, 1.5, 2);
scene.add(x6);

const x7 = Xs(10, 4.5, 2);
scene.add(x7);

const x8 = Xs(10, -1.5, 2);
scene.add(x8);

const x9 = Xs(10, -4.5, 2);
scene.add(x9);

//=========================

const xa = Xs(12, 3);
scene.add(xa);

const xa2 = Xs(12);
scene.add(xa2);

const xa3 = Xs(12, -3);
scene.add(xa3);

const xa4 = Xs(14.5, 1.5);
scene.add(xa4);

const xa5 = Xs(14.5, -1.5);
scene.add(xa5);

const xa6 = Xs(10, 1.5);
scene.add(xa6);

const xa7 = Xs(10, 4.5);
scene.add(xa7);

const xa8 = Xs(10, -1.5);
scene.add(xa8);

const xa9 = Xs(10, -4.5);
scene.add(xa9);

//=========================

const xb = Xs(-5, -12, 2);
scene.add(xb);

const xb2 = Xs(-2, -12, 2);
scene.add(xb2);

const xb3 = Xs(1, -12, 2);
scene.add(xb3);

const xb4 = Xs(-0.5, -14.5, 2);
scene.add(xb4);

const xb5 = Xs(-3.5, -14.5, 2);
scene.add(xb5);

const xb6 = Xs(-3.5, -10, 2);
scene.add(xb6);

const xb7 = Xs(-6.5, -10, 2);
scene.add(xb7);

const xb8 = Xs(-0.5, -10, 2);
scene.add(xb8);

const xb9 = Xs(2.5, -10, 2);
scene.add(xb9);

//=========================

const xc = Xs(-5, -12);
scene.add(xc);

const xc2 = Xs(-2, -12);
scene.add(xc2);

const xc3 = Xs(1, -12);
scene.add(xc3);

const xc4 = Xs(-0.5, -14.5);
scene.add(xc4);

const xc5 = Xs(-3.5, -14.5);
scene.add(xc5);

const xc6 = Xs(-3.5, -10);
scene.add(xc6);

const xc7 = Xs(-6.5, -10);
scene.add(xc7);

const xc8 = Xs(-0.5, -10);
scene.add(xc8);

const xc9 = Xs(2.5, -10);
scene.add(xc9);



//=============================== Os =====================================

const o = Os(-14, null, 1);
scene.add(o);

const o2 = Os(-14, 3, 1);
scene.add(o2);

const o3 = Os(-14, -3, 1);
scene.add(o3);

const o4 = Os(-15.5, 1.5, 1);
scene.add(o4);

const o5 = Os(-15.5, -1.5, 1);
scene.add(o5);

const o6 = Os(-12, 1.5, 1);
scene.add(o6);

const o7 = Os(-12, 4.5, 1);
scene.add(o7);

const o8 = Os(-12, -1.5, 1);
scene.add(o8);

const o9 = Os(-12, -4.5, 1);
scene.add(o9);


//=========================

const oa = Os(-14, null, -1);
scene.add(oa);

const oa2 = Os(-14, 3, -1);
scene.add(oa2);

const oa3 = Os(-14, -3, -1);
scene.add(oa3);

const oa4 = Os(-15.5, 1.5, -1);
scene.add(oa4);

const oa5 = Os(-15.5, -1.5, -1);
scene.add(oa5);

const oa6 = Os(-12, 1.5, -1);
scene.add(oa6);

const oa7 = Os(-12, 4.5, -1);
scene.add(oa7);

const oa8 = Os(-12, -1.5, -1);
scene.add(oa8);

const oa9 = Os(-12, -4.5, -1);
scene.add(oa9);

//=========================

const ob = Os(null, 14, 1);
scene.add(ob);

const ob2 = Os(-3, 14, 1);
scene.add(ob2);

const ob3 = Os(3, 14, 1);
scene.add(ob3);

const ob4 = Os(-1.5, 15.5, 1);
scene.add(ob4);

const ob5 = Os(1.5, 15.5, 1);
scene.add(ob5);

const ob6 = Os(-1.5, 12, 1);
scene.add(ob6);

const ob7 = Os(-4.5, 12, 1);
scene.add(ob7);

const ob8 = Os(1.5, 12, 1);
scene.add(ob8);

const ob9 = Os(4.5, 12, 1);
scene.add(ob9);

//=========================

const oc = Os(null, 14, -1);
scene.add(oc);

const oc2 = Os(-3, 14, -1);
scene.add(oc2);

const oc3 = Os(3, 14, -1);
scene.add(oc3);

const oc4 = Os(-1.5, 15.5, -1);
scene.add(oc4);

const oc5 = Os(1.5, 15.5, -1);
scene.add(oc5);

const oc6 = Os(-1.5, 12, -1);
scene.add(oc6);

const oc7 = Os(-4.5, 12, -1);
scene.add(oc7);

const oc8 = Os(1.5, 12, -1);
scene.add(oc8);

const oc9 = Os(4.5, 12, -1);
scene.add(oc9);

//========================= camera position ===============================

camera.position.z = 15;
camera.position.x = 15;
camera.position.y = 15;

//============================ lighting ===================================

const ambientLighting = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLighting);

const spotlight = new THREE.PointLight(0xFFFFFF, 2, 150);
spotlight.position.set(50, 50, 50);
scene.add(spotlight);

const spotlight2 = new THREE.PointLight(0xFFFFFF, 2, 100);
spotlight2.position.set(-50, -50, -50);
scene.add(spotlight2);

//================== raycasting for mouse position ======================

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

//========================== constrols =================================

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enabled = false;

const objects = [
                  o, o2, o3, o4, o5, o6, o7, o8, o9,
                  oa, oa2, oa3, oa4, oa5, oa6, oa7, oa8, oa9,
                  ob, ob2, ob3, ob4, ob5, ob6, ob7, ob8, ob9,
                  oc, oc2, oc3, oc4, oc5, oc6, oc7, oc8, oc9,
                  x, x2, x3, x4, x5, x6, x7, x8, x9,
                  xa, xa2, xa3, xa4, xa5, xa6, xa7, xa8, xa9,
                  xb, xb2, xb3, xb4, xb5, xb6, xb7, xb8, xb9,
                  xc, xc2, xc3, xc4, xc5, xc6, xc7, xc8, xc9
                ];
const controls2 = new THREE.DragControls(objects, camera, renderer.domElement);

//========================== render =================================

var render = function () {

function onClick(event) {

  raycaster.setFromCamera( mouse, camera );

	// finds objects intersecting the ray
	var intersects = raycaster.intersectObjects( objects );

	for ( var i = 0; i < intersects.length; i++ ) {
    console.log(event.altKey)
    if (event.altKey) {
      if (intersects[i].object.rotation.z === 1) {
        if (intersects[i].object.rotation.y === 1.57 ) {
          intersects[i].object.rotation.y =  3.14;
        } else {
          intersects[i].object.rotation.y =  1.57;
        }
      } else {
        if (intersects[i].object.rotation.z === 1.57 ) {
          intersects[i].object.rotation.z =  3.14;
        } else {
          intersects[i].object.rotation.z =  1.57;
        }
      }

    } else {
      if (intersects[i].object.rotation.x === 1.57 ) {

        intersects[i].object.rotation.x =  3.14;
      } else {
        intersects[i].object.rotation.x =  1.57;
      }
    }
	}

  // calculates mouse position
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}
  renderer.render( scene, camera );

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
  });

  renderer.render(scene, camera);
  window.addEventListener( 'click', onClick, false );
};

window.requestAnimationFrame(render);

var GameLoop = function () {
  requestAnimationFrame(GameLoop);
  render();
};

GameLoop();
