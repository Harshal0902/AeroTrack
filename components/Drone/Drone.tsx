import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
const loader = new GLTFLoader();

export function drone() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 5);
    camera.position.z = 5;
    camera.rotation.z = 0.5;

    scene = new THREE.Scene();

    const light = new THREE.AmbientLight(0xffffff, 5);
    scene.add(light);


    loader.load("/s9_mini_drone/scene.gltf", (gltf) => {
        let model = gltf.scene
        model.scale.set(.05, .05, .05)

        gsap.to(camera.position, {
            z: 1,
            duration: 1,
            ease: "back.out(1.7)"
        })
        gsap.to(camera.rotation, {
            z: 0,
            duration: 1
        })

        gsap.to(model.rotation, {
            x: 1,
            duration: 1,
            delay: 1
        })
        gsap.to(model.rotation, {
            y: Math.PI * 1.75,
            duration: 2,
            delay: 1
        })
        gsap.to(model.scale, {
            delay: 1,
            duration: 1,
            x: .08,
            y: .08,
            z: .08
        })
        gsap.to(model.position, {
            delay: 1,
            duration: 1,
            x: .65,
            y: .05
        })

        scene.add(model)
    })
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    renderer.setClearColor(0x016795, 1);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function animation() {
    renderer.render(scene, camera);
}
