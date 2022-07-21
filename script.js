import * as THREE from "three";
import * as Events from "./events/events";
import ObjectManager from "./ObjectManager";
import * as dat from "dat.gui";

let screensize = { width: window.innerWidth, height: window.innerHeight };

const ObjManager = new ObjectManager();
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

// Mesh 1

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

renderer.render(scene, camera);
animate();

window.addEventListener("keydown", Events.onKeyDownEvent);
export { ObjManager };
