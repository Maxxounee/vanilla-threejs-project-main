import * as THREE from "three";

export default class Torus {
    instance: THREE.Mesh;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    init(opt: {} = {}) {
        const geometry = new THREE.TorusKnotGeometry(5, 1, 300, 5)
        const material = new THREE.MeshStandardMaterial({color: '#f00'})
        console.log('maaterualk,m ', material)
        setTimeout(() => {
            material.roughness = 10;
            material.metalness = 1;
        }, 1000)
        material.color = new THREE.Color('#049ef4')
        material.roughness = 0.5

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true
        mesh.receiveShadow = true

        return mesh;
    }

    get model() {
        return this.instance;
    }
}