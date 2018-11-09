const Xs = (x, z) => {
  const material = new THREE.MeshLambertMaterial({color: 0x1825E8});

  const geometry1 = new THREE.BoxGeometry(1.8, 0.4, 0.4, 0.1);
  const rectangle1 = new THREE.Mesh( geometry1, material);
  rectangle1.position.y = 1;
  rectangle1.position.x = 2;

  const geometry2 = new THREE.BoxGeometry(1.8, 0.4, 0.4, 0.1);
  const rectangle2 = new THREE.Mesh( geometry2, material);
  rectangle2.position.y = 1;
  rectangle2.position.x = 2;
  rectangle2.rotation.y = Math.PI / 2;

  const singleGeometry = new THREE.Geometry();

  rectangle1.updateMatrix(); // as needed
  singleGeometry.merge(rectangle1.geometry, rectangle1.matrix);

  rectangle2.updateMatrix(); // as needed
  singleGeometry.merge(rectangle2.geometry, rectangle2.matrix);

  const mesh = new THREE.Mesh(singleGeometry, material);

  if (x) mesh.position.x = x;
  if (z) mesh.position.z = z;

  return mesh;

}
