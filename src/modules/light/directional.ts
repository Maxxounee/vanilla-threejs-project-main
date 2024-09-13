import * as THREE from "three";

export default class Directional {
    instance: THREE.DirectionalLight;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    init(opt: {} = {}) {
        const directionalLight = new THREE.DirectionalLight('#ff0000', 1);
        directionalLight.position.y = 20
        directionalLight.position.z = 20

        directionalLight.castShadow = true

        directionalLight.shadow.mapSize.width = 2048
        directionalLight.shadow.mapSize.height = 2048
        directionalLight.shadow.camera.far = 50
        directionalLight.shadow.camera.near = 1
        directionalLight.shadow.camera.top = 20
        directionalLight.shadow.camera.right = 20
        directionalLight.shadow.camera.bottom = -20
        directionalLight.shadow.camera.left = -20

        return directionalLight;
    }

    get light() {
        return this.instance;
    }
}