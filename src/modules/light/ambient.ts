import * as THREE from "three";

export default class Ambient {
    instance: THREE.AmbientLight;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    init(opt: {} = {}) {
        const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)

        return ambientLight;
    }

    get light() {
        return this.instance;
    }
}