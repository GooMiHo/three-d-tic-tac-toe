const Os = (x, z, y) => {
  let geometry1 = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
  let material1 = new THREE.MeshLambertMaterial({ color: 0x431670 });
  let torus = new THREE.Mesh(geometry1, material1);
  torus.rotation.x = 1.57;
  torus.position.y = y;
  torus.rotation.y = 3.14;
  if (x) torus.position.x = x;
  if (z) torus.position.z = z;
  torus.castShadow = true;
  torus.rotation.z = 1;
  return torus;
}
