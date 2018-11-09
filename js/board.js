function Board() {
  const geometry = new THREE.BoxGeometry(10, 1, 10);
    const cubeMaterials = [
      new THREE.MeshLambertMaterial({ color: 0x4ECCC1}), // right
      new THREE.MeshLambertMaterial({ color: 0x4ECCC1}), // left
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://preview.ibb.co/hGczhf/tick-tac-toe-grid.png'), side: THREE.DoubleSide } ), //top
      new THREE.MeshLambertMaterial({ color: 0x4ECCC1}), //bottom
      new THREE.MeshLambertMaterial({ color: 0x4ECCC1}), //front
      new THREE.MeshLambertMaterial({ color: 0x4ECCC1}) //back
    ];
    //LambertMaterial or Phong
    //const material = new THREE.MeshBasicMaterial({ color: 0x4ECCC1});
    const material = new THREE.MeshFaceMaterial(cubeMaterials);
    const rectangle = new THREE.Mesh(geometry, material);
    return rectangle;
}

