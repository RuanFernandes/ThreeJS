import { GameObject } from "../script";

function onKeyDownEvent(event) {
    console.log(event.key);

    const GroundMesh = GameObject.findObjectByName("Ground").instance;

    GroundMesh.position.x += 0.05;
    GroundMesh.position.y += 0.05;
}

export { onKeyDownEvent };
