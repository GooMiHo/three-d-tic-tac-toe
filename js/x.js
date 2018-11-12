const Xs = (x, z, y) => {
  const material = new THREE.MeshLambertMaterial({color: 0x0A5950});

  const geometry1 = new THREE.BoxGeometry(1.8, 0.4, 0.4, 0.1);
  const rectangle1 = new THREE.Mesh( geometry1, material);
  rectangle1.position.y = 1;
  rectangle1.position.x = 2;

  const geometry2 = new THREE.BoxGeometry(1.8, 0.4, 0.4, 0.1);
  const rectangle2 = new THREE.Mesh( geometry2, material);
  rectangle2.position.y = 1;
  rectangle2.position.x = 2;
  rectangle2.rotation.y = 1.57;
  rectangle2.rotation.x = 3.14;

  const singleGeometry = new THREE.Geometry();

  rectangle1.updateMatrix();
  singleGeometry.merge(rectangle1.geometry, rectangle1.matrix);

  rectangle2.updateMatrix();
  singleGeometry.merge(rectangle2.geometry, rectangle2.matrix);

  const xMesh = new THREE.Mesh(singleGeometry, material);

  if (x) xMesh.position.x = x;
  if (z) xMesh.position.z = z;
  if (y) xMesh.position.y = y;
  xMesh.rotation.x = 3.14;

  return xMesh;

}
