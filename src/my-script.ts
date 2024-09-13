/** МОЙ СКРИПТ */
import Camera from "./modules/camera";
import Scene from './modules/scene';
import AmbientLight from './modules/light/ambient';
import DirectionalLight from "./modules/light/directional";

import {types} from '@theatre/core'

import Torus from "./models/torus";
import House from "./models/house";

import Renderer from "./modules/renderer";
import AnimationControls from "./modules/animationControls";

/** Cцена */
const camera = new Camera().camera;
const scene = new Scene().scene;
const renderer = new Renderer().renderer;
const ambientLight = new AmbientLight().light;
const directionalLight = new DirectionalLight().light;

/** Объекты */
const torus = new Torus().model;
let house;

scene.add(torus);
scene.add(ambientLight);
scene.add(directionalLight);

renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

const sheet = new AnimationControls().sheet;

function tick(): void {
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

function resizeHandler() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

async function addHouse() {
    house = await new House().model;

    scene.add(house);
}

function setTorusControls() {
    const torusKnotObj = sheet.object('Объект Torus mesh', {
        rotation: types.compound({
            x: types.number(torus.rotation.x, {range: [-2, 2]}),
            y: types.number(torus.rotation.y, {range: [-2, 2]}),
            z: types.number(torus.rotation.z, {range: [-2, 2]}),
        }),

        position: types.compound({
            x: types.number(torus.position.x, {range: [-2, 2]}),
            y: types.number(torus.position.y, {range: [-2, 2]}),
            z: types.number(torus.position.z, {range: [-2, 2]}),
        }),
    })

    torusKnotObj.onValuesChange((values) => {
        const {x: rx, y: ry, z: rz} = values.rotation;
        const {x: px, y: py, z: pz} = values.position;

        torus.rotation.set(rx * Math.PI, ry * Math.PI, rz * Math.PI);
        torus.position.set(px * 10, py * -5, pz * 10);
    })
}


function setHouseControls() {
    const torusKnotObj = sheet.object('Объект House mesh', {
        rotation: types.compound({
            x: types.number(house.rotation.x, {range: [-2, 2]}),
            y: types.number(house.rotation.y, {range: [-2, 2]}),
            z: types.number(house.rotation.z, {range: [-2, 2]}),
        }),

        position: types.compound({
            x: types.number(house.position.x, {range: [-2, 2]}),
            y: types.number(house.position.y, {range: [-2, 2]}),
            z: types.number(house.position.z, {range: [-2, 2]}),
        }),
    })

    torusKnotObj.onValuesChange((values) => {
        const {x: rx, y: ry, z: rz} = values.rotation;
        const {x: px, y: py, z: pz} = values.position;

        house.rotation.set(rx * Math.PI, ry * Math.PI, rz * Math.PI);
        house.position.set(px * 10, py * -5, pz * 30);
    })
}

function removeAnimationDataFromLocalStorage() {
    /** Удаление данных об анимации из localStorage */
    /** Актуальные данные в /src/animation/file.json */
    localStorage.removeItem('theatre-0.4.persistent');
}

async function main() {
    // removeAnimationDataFromLocalStorage();

    window.addEventListener('resize', resizeHandler, false);
    tick();
    await addHouse();
    setTorusControls();
    setHouseControls();
}

main();

