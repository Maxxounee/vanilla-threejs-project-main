import * as THREE from "three";

type Options = {
    fov?: number;
    aspect?: number;
    near?: number;
    far?: number;
    position?: { x?: number; y?: number; z?: number; }
}
export default class Camera {
    instance: THREE.PerspectiveCamera;

    constructor(opt: {} = {}) {
        this.instance = this.init(opt);
    }

    init(opt: Options = {}) {
        const camera = new THREE.PerspectiveCamera(
            opt.fov ?? 70,
            opt.aspect ?? innerWidth / innerHeight,
            opt.near ?? 10,
            opt.far ?? 200,
        )

        camera.position.x = opt.position?.x ?? 0;
        camera.position.y = opt.position?.y ?? 0;
        camera.position.z = opt.position?.z ?? 50;

        return camera;
    }

    get camera() {
        return this.instance;
    }
}