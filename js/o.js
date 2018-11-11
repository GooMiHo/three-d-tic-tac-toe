// Physijs.scripts.worker = '/physijs_worker.js';
// Physijs.scripts.ammo = '/ammo.js';

const Os = (x, z) => {
  let geometry1 = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
  let material1 = new THREE.MeshLambertMaterial({ color: 0xffff00 });
  let torus = new THREE.Mesh(geometry1, material1);
  torus.rotation.x = Math.PI / 2;
  torus.position.y = 1;
  if (x) torus.position.x = x;
  if (z) torus.position.z = z;
  torus.castShadow = true;
  return torus;
}
