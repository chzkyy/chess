import * as THREE from "./three.js-master/build/three.module.js";

const initialize = () => {
  const scene = new THREE.Scene();
  const camera = createCamera();
  const renderer = createRenderer();
  const loader = new THREE.TextureLoader();
  const AmbientLight = createAmbientLight(scene);
  const pointlight = createPointLight(scene);

  const chessboard = createChessboard(scene, loader);
  const kinglowpart = createkinglowpart(scene, loader);
  const kingMiddlepart = createkingMiddlepart(scene, loader);
  const kingUpperPart = createKingUpperPart(scene, loader);
  const kingHorizontalPart = crateKingHorizontalPart(scene, loader);
  const kingVerticalPart = createKingVerticalPart(scene, loader);


  const render = () => {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
  }

  render();
}

const createCamera = () => {
  const [fov, aspect, near, far] = 
  [60, window.innerWidth / window.innerHeight, 0.1, 2000];
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(400, 200, -400);
  camera.lookAt(0, 0, 0);

  return camera;
}

const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor('#4d2600');
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.basicShadowMap = true;

  return renderer;
}

const createPointLight = (scene) => {
  const pointlight = new THREE.PointLight(
    '#FFFFFF', 0.9, 1500, 0.7);
  pointlight.position.set(-100, 350, -450);
  pointlight.castShadow = true;
  pointlight.shadow.camera.far = 1200;

  scene.add(pointlight);
  return pointlight;
}

const createAmbientLight = (scene) => {
  const AmbientLight = new THREE.AmbientLight('#211E1E', 0.2);

  scene.add(AmbientLight);
  return AmbientLight;
}

const createChessboard = (scene, loader) => {
  const geometry = new THREE.BoxGeometry(500, 500, 7);
  const texture = loader.load('./assets/chess-board.jpg');
  const material = new THREE.MeshPhongMaterial({ 
    map: texture
  });
  const chessboard = new THREE.Mesh(geometry, material);

  chessboard.position.set(0, 0, 0);
  chessboard.rotateX(Math.PI / 2);
  chessboard.rotateY(0);
  chessboard.rotateZ(Math.PI/2);
  chessboard.receiveShadow = true;
  chessboard.castShadow = true;

  scene.add(chessboard);
  return chessboard;
}

const createkinglowpart = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(20, 30, 20, 50);
  const texture = loader.load('./assets/chess-king.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture
  });
  const kinglowpart = new THREE.Mesh(geometry, material);

  kinglowpart.position.set(70, 15, -180);
  kinglowpart.castShadow = true;
  kinglowpart.receiveShadow = true;

  scene.add(kinglowpart);
  return kinglowpart;
}

const createkingMiddlepart = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(15, 15, 100, 32);
  const texture = loader.load('./assets/chess-king.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture
  });
  const kingMiddlepart = new THREE.Mesh(geometry, material);

  kingMiddlepart.position.set(70, 75, -180);
  kingMiddlepart.castShadow = true;
  kingMiddlepart.receiveShadow = true;

  scene.add(kingMiddlepart);
  return kingMiddlepart;
}

const createKingUpperPart = (scene, loader) => {
  const geometry = new THREE.CylinderGeometry(22.5, 17.5, 20, 32);
  const texture = loader.load('./assets/chess-king.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture
  });
  const kingUpperPart = new THREE.Mesh(geometry, material);
  
  kingUpperPart.position.set(70, 115, -180);
  kingUpperPart.castShadow = true;
  kingUpperPart.receiveShadow = true;

  scene.add(kingUpperPart);
  return kingUpperPart;
}

const crateKingHorizontalPart = (scene, loader) => {
  const geometry = new THREE.BoxGeometry(35, 8, 8);
  const texture = loader.load('./assets/chess-king.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture
  });
  const kingHorizontalPart = new THREE.Mesh(geometry, material);
  
  kingHorizontalPart.position.set(70, 140, -180);
  kingHorizontalPart.rotation.set(0, 25, 0);
  kingHorizontalPart.castShadow = true;
  kingHorizontalPart.receiveShadow = true;

  scene.add(kingHorizontalPart);
  return kingHorizontalPart;
}


const createKingVerticalPart = (scene, loader) => {
  const geometry = new THREE.BoxGeometry(8, 30, 5);
  const texture = loader.load('./assets/chess-king.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture
  });
  const kingVerticalPart = new THREE.Mesh(geometry, material);

  kingVerticalPart.position.set(70, 140, -180);
  kingVerticalPart.rotation.set(0, 25, 0);
  kingVerticalPart.castShadow = true;
  kingVerticalPart.receiveShadow = true;

  scene.add(kingVerticalPart);
  return kingVerticalPart;
}

initialize();