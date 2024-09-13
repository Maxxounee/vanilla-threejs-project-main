import * as THREE from "three";

export default class Scene {
    instance: THREE.Scene;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    init(opt: {} = {}) {
        const scene = new THREE.Scene()
        return scene;
    }

    get scene() {
        return this.instance;
    }
}