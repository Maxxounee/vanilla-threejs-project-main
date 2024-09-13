import * as THREE from "three";

export default class Renderer {
    instance: THREE.Renderer;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    init(opt: {} = {}) {
        const renderer = new THREE.WebGLRenderer({antialias: true})

        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        return renderer;
    }

    get renderer() {
        return this.instance;
    }
}