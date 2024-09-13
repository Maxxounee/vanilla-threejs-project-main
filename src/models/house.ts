import * as THREE from "three";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

export default class House {
    instance: THREE.Mesh;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    async init(opt: {} = {}) {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader();

            loader.load('src/assets/models/house/house.gltf', (gltf) => {
                const house = gltf.scene;
                console.log(house)
                house.children[12].material = new THREE.MeshStandardMaterial({color: '#1be804'});
                house.children[12].material.metalness = 0.69;
                // house.children[12].material.color = {}
                house.position.z = 20;
                house.rotation.y = 0.3;
                house.rotation.x = 0.3;
                resolve(house);
            });
        })
    }

    get model() {
        return this.instance;
    }
}

/**/