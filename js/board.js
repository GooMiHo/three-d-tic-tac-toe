function Board() {
  const geometry = new THREE.BoxGeometry(10, 10, 10);
    const cubeMaterials = [
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://image.ibb.co/mAn8sq/cube-side2.jpg'), side: THREE.DoubleSide } ), // right
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://image.ibb.co/mAn8sq/cube-side2.jpg'), side: THREE.DoubleSide } ), // left
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://preview.ibb.co/noR7kA/cube-side1.jpg'), side: THREE.DoubleSide } ), //top
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://preview.ibb.co/noR7kA/cube-side1.jpg'), side: THREE.DoubleSide } ), //bottom
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://image.ibb.co/irG4yV/cube-side3.jpg'), side: THREE.DoubleSide } ), //front
      new THREE.MeshLambertMaterial( { map: new THREE.TextureLoader().load('https://image.ibb.co/irG4yV/cube-side3.jpg'), side: THREE.DoubleSide } ) //back
    ];
    //LambertMaterial or Phong
    //const material = new THREE.MeshBasicMaterial({ color: 0x4ECCC1});
    const material = new THREE.MeshFaceMaterial(cubeMaterials);
    const rectangle = new THREE.Mesh(geometry, material);
    return rectangle;
}

