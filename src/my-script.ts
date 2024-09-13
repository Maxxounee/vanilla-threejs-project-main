/** МОЙ СКРИПТ */
import Camera from "./modules/camera";
import Scene from './modules/scene';
import AmbientLight from './modules/light/ambient';
import DirectionalLight from "./modules/light/directional";

import * as THREE from 'three'

console.log('test')
/* core необходим для работы studio */
import {getProject, types} from '@theatre/core'
import studio from '@theatre/studio'
import Torus from "./models/torus";
import Renderer from "./modules/renderer";

studio.initialize()

const camera = new Camera().camera;

const scene = new Scene().scene;
const renderer = new Renderer().renderer;

const torus = new Torus().model;
const ambientLight = new AmbientLight().light;
const directionalLight = new DirectionalLight().light;

scene.add(torus);
scene.add(ambientLight);
scene.add(directionalLight);

const project = getProject('Название проекта');
const sheet = project.sheet('Анимируемая сцена');

renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

function tick(): void {
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

function resizeHandler() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

window.addEventListener('resize', resizeHandler, false);


// scene.add(mesh);