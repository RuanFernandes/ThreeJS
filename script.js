import * as THREE from "three";
import * as Events from "./events/events";
import GameObjects from "./GameObjects";
import * as dat from "dat.gui";

let screensize = { width: window.innerWidth, height: window.innerHeight };

const GameObject = new GameObjects();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    screensize.width / screensize.height,
    0.1,
    1000
);
camera.position.z = 20;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(screensize.width, screensize.height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
const material = new THREE.MeshBasicMaterial({
    color: 0x0ff000,
    wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
GameObject.add({ name: "Ground", instance: mesh });
scene.add(GameObject.findObjectByName("Ground").instance);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

renderer.render(scene, camera);
animate();

window.addEventListener("keydown", Events.onKeyDownEvent);
export { GameObject };
