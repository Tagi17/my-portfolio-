import THREE, {
    ACESFilmicToneMapping,
    AmbientLight,
    Box3,
    BoxGeometry,
    DirectionalLight,
    EdgesGeometry,
    LineBasicMaterial,
    LineSegments,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PointLight,
    SRGBColorSpace,
    Scene,
    WebGLRenderer,
} from "three";

class Cube extends Mesh {
    constructor() {
  
      const geometry = new BoxGeometry();
      const material = new MeshStandardMaterial({
        color: "black",
        transparent: true,
        opacity: 0.5,
      });

      material.flatShading = true;
      super(geometry, material);
  
      const edges = new EdgesGeometry(geometry);
      const lineMaterial = new LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
      const wireframe = new LineSegments(edges, lineMaterial);
      this.add(wireframe); 
    }
  
    update() {
      this.rotation.x += 0.005;
      this.rotation.y += 0.005;
    }
  
    dispose() {
      this.geometry.dispose();
      this.material.dispose();
    }
  }
  
  const scene = new Scene();
  const camera = new PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000 );
  camera.position.z = 5;
  
  const ambientLight = new AmbientLight();
  scene.add(ambientLight);
  
  const directionalLight = new DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  const cube = new Cube();
  scene.add(cube);

  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  export { scene, camera, renderer, cube };
  