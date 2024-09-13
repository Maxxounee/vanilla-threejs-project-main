/** ОРИГИНАЛЬНЫЙ СКРИПТ. БЕЗ ИЗМЕНЕНИЙ */
import './style.css'
import * as THREE from 'three'

/**
 * Camera
 */


/**
 * Scene
 */

const scene = new THREE.Scene()

/*
 * TorusKnot
 */
const geometry = new THREE.TorusKnotGeometry(10, 3, 300, 16)
const material = new THREE.MeshStandardMaterial({color: '#f00'})
material.color = new THREE.Color('#049ef4')
material.roughness = 0.5

const mesh = new THREE.Mesh(geometry, material)
mesh.castShadow = true
mesh.receiveShadow = true
scene.add(mesh)

/*
 * Lights
 */

// Ambient Light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

// Point light
const directionalLight = new THREE.DirectionalLight('#ff0000', 30 /* , 0, 1 */)
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

scene.add(directionalLight)

// RectAreaLight
const rectAreaLight = new THREE.RectAreaLight('#ff0', 1, 50, 50)

rectAreaLight.position.z = 10
rectAreaLight.position.y = -40
rectAreaLight.position.x = -20
rectAreaLight.lookAt(new THREE.Vector3(0, 0, 0))

scene.add(rectAreaLight)

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({antialias: true})

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)

/**
 * Update the screen
 */
function tick(): void {
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

/**
 * Handle `resize` events
 */
window.addEventListener(
    'resize',
    function () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    },
    false,
)

const test = {
    "metadata": {
        "version": 4.5,
        "type": "Object",
        "generator": "Object3D.toJSON"
    },
    "geometries": [
        {
            "uuid": "b6a6e1f6-2441-4edd-adda-091d1f2ba74f",
            "type": "BufferGeometry",
            "data": {
                "attributes": {
                    "position": {
                        "itemSize": 3,
                        "type": "Float32Array",
                        "array": [
                            0.35267841815948486,
                            0.3325161039829254,
                            0,
                            0.35267841815948486,
                            0.3325161039829254,
                            0,
                            0.35267841815948486,
                            0.3325161039829254,
                            0,
                            -0.35267841815948486,
                            0.3325161039829254,
                            0,
                            -0.35267841815948486,
                            0.3325161039829254,
                            0,
                            -0.35267841815948486,
                            0.3325161039829254,
                            0,
                            -0.35267841815948486,
                            -0.2430374026298523,
                            0.25284647941589355,
                            -0.35267841815948486,
                            -0.2430374026298523,
                            0.25284647941589355,
                            -0.35267841815948486,
                            -0.2430374026298523,
                            0.25284647941589355,
                            -0.35267841815948486,
                            0.09341267496347427,
                            0.25284647941589355,
                            -0.35267841815948486,
                            0.09341267496347427,
                            0.25284647941589355,
                            -0.35267841815948486,
                            0.09341267496347427,
                            0.25284647941589355,
                            -0.35267841815948486,
                            -0.2430374026298523,
                            -0.25284647941589355,
                            -0.35267841815948486,
                            -0.2430374026298523,
                            -0.25284647941589355,
                            -0.35267841815948486,
                            -0.2430374026298523,
                            -0.25284647941589355,
                            -0.35267841815948486,
                            0.09341267496347427,
                            -0.25284647941589355,
                            -0.35267841815948486,
                            0.09341267496347427,
                            -0.25284647941589355,
                            -0.35267841815948486,
                            0.09341267496347427,
                            -0.25284647941589355,
                            0.35267841815948486,
                            -0.2430374026298523,
                            0.25284647941589355,
                            0.35267841815948486,
                            -0.2430374026298523,
                            0.25284647941589355,
                            0.35267841815948486,
                            -0.2430374026298523,
                            0.25284647941589355,
                            0.35267841815948486,
                            0.09341267496347427,
                            0.25284647941589355,
                            0.35267841815948486,
                            0.09341267496347427,
                            0.25284647941589355,
                            0.35267841815948486,
                            0.09341267496347427,
                            0.25284647941589355,
                            0.35267841815948486,
                            -0.2430374026298523,
                            -0.25284647941589355,
                            0.35267841815948486,
                            -0.2430374026298523,
                            -0.25284647941589355,
                            0.35267841815948486,
                            -0.2430374026298523,
                            -0.25284647941589355,
                            0.35267841815948486,
                            0.09341267496347427,
                            -0.25284647941589355,
                            0.35267841815948486,
                            0.09341267496347427,
                            -0.25284647941589355,
                            0.35267841815948486,
                            0.09341267496347427,
                            -0.25284647941589355
                        ],
                        "normalized": false
                    },
                    "normal": {
                        "itemSize": 3,
                        "type": "Float32Array",
                        "array": [
                            0,
                            0.7265804409980774,
                            0.6870814561843872,
                            0,
                            0.7265804409980774,
                            -0.6870814561843872,
                            1,
                            0,
                            0,
                            0,
                            0.7265804409980774,
                            0.6870814561843872,
                            0,
                            0.7265804409980774,
                            -0.6870814561843872,
                            -1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            -1,
                            0,
                            -1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0.7265804409980774,
                            0.6870814561843872,
                            -1,
                            0,
                            0,
                            0,
                            0,
                            -1,
                            0,
                            -1,
                            0,
                            -1,
                            0,
                            0,
                            0,
                            0,
                            -1,
                            0,
                            0.7265804409980774,
                            -0.6870814561843872,
                            -1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            -1,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0.7265804409980774,
                            0.6870814561843872,
                            1,
                            0,
                            0,
                            0,
                            0,
                            -1,
                            0,
                            -1,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            -1,
                            0,
                            0.7265804409980774,
                            -0.6870814561843872,
                            1,
                            0,
                            0
                        ],
                        "normalized": false
                    },
                    "uv": {
                        "itemSize": 2,
                        "type": "Float32Array",
                        "array": [
                            0.625,
                            0.25,
                            0.625,
                            0.5,
                            0.625,
                            0.25,
                            0.625,
                            0,
                            0.625,
                            0.75,
                            0.625,
                            0.75,
                            0.375,
                            0,
                            0.125,
                            0.25,
                            0.375,
                            1,
                            0.625,
                            0,
                            0.625,
                            0,
                            0.625,
                            1,
                            0.375,
                            0.75,
                            0.125,
                            0.5,
                            0.375,
                            0.75,
                            0.625,
                            0.75,
                            0.625,
                            0.75,
                            0.625,
                            0.75,
                            0.375,
                            0.25,
                            0.375,
                            0.25,
                            0.375,
                            0.25,
                            0.625,
                            0.25,
                            0.625,
                            0.25,
                            0.625,
                            0.25,
                            0.375,
                            0.5,
                            0.375,
                            0.5,
                            0.375,
                            0.5,
                            0.625,
                            0.5,
                            0.625,
                            0.5,
                            0.625,
                            0.5
                        ],
                        "normalized": false
                    }
                },
                "index": {
                    "type": "Uint16Array",
                    "array": [
                        23,
                        29,
                        2,
                        28,
                        16,
                        4,
                        28,
                        4,
                        1,
                        10,
                        22,
                        0,
                        10,
                        0,
                        3,
                        8,
                        11,
                        17,
                        8,
                        17,
                        14,
                        12,
                        15,
                        27,
                        12,
                        27,
                        24,
                        26,
                        29,
                        23,
                        26,
                        23,
                        20,
                        18,
                        21,
                        9,
                        18,
                        9,
                        6,
                        13,
                        25,
                        19,
                        13,
                        19,
                        7,
                        17,
                        11,
                        5
                    ]
                },
                "boundingSphere": {
                    "center": [
                        0,
                        0.04473935067653656,
                        0
                    ],
                    "radius": 0.5207003634836973
                }
            }
        }
    ],
    "materials": [
        {
            "uuid": "b4e1ef46-46b3-4178-95a6-0535f44cad37",
            "type": "MeshStandardMaterial",
            "color": 1828868,
            "roughness": 1,
            "metalness": 0.69,
            "emissive": 0,
            "envMapIntensity": 1,
            "depthFunc": 3,
            "depthTest": true,
            "depthWrite": true,
            "colorWrite": true,
            "stencilWrite": false,
            "stencilWriteMask": 255,
            "stencilFunc": 519,
            "stencilRef": 0,
            "stencilFuncMask": 255,
            "stencilFail": 7680,
            "stencilZFail": 7680,
            "stencilZPass": 7680
        }
    ],
    "object": {
        "uuid": "b8449b0d-5b35-4611-b97f-9ac08ca70217",
        "type": "Mesh",
        "name": "house",
        "userData": {
            "name": "house"
        },
        "layers": 1,
        "matrix": [
            0.9412038547546828,
            0,
            -0.3378391992941303,
            0,
            0,
            1,
            0,
            0,
            0.3378391992941303,
            0,
            0.9412038547546828,
            0,
            0.5164482593536377,
            0.6328878998756409,
            -0.42388787865638733,
            1
        ],
        "geometry": "b6a6e1f6-2441-4edd-adda-091d1f2ba74f",
        "material": "b4e1ef46-46b3-4178-95a6-0535f44cad37"
    }
}