// 3D Kinetic Mechanical Disc Background
// Inspired by: https://www.youtube.com/shorts/UfnAs9Ap_lM

let scene, camera, renderer, coin, clock;
let scrollY = 0;
let targetScrollY = 0;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('bg-canvas'),
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse Follow Light
    const mouseLight = new THREE.PointLight(0xffffff, 2, 10);
    scene.add(mouseLight);

    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        mouseLight.position.set(x * 10, y * 10, 5);
    });

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        metalness: 1,
        roughness: 0.1, // Softer shine
        emissive: 0x110800
    });

    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.8
    });

    // Floor Grid
    const gridHelper = new THREE.GridHelper(100, 50, 0x444444, 0x222222);
    scene.add(gridHelper);

    // The Coin (Mechanical Disc)
    const geometry = new THREE.CylinderGeometry(1.5, 1.5, 0.4, 32);
    coin = new THREE.Mesh(geometry, goldMaterial);
    coin.rotation.z = Math.PI / 2;
    coin.position.y = 1.5;
    scene.add(coin);

    // Environment Structures
    createEnvironment(floorMaterial);

    clock = new THREE.Clock();

    window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
    });

    animate();
}

function createEnvironment(material) {
    // Add some platforms and ramps to roll on
    const boxGeo = new THREE.BoxGeometry(10, 1, 100);
    const platform = new THREE.Mesh(boxGeo, material);
    platform.position.y = -0.6;
    scene.add(platform);

    // Ramps
    const rampGeo = new THREE.BoxGeometry(5, 0.2, 20);
    const ramp = new THREE.Mesh(rampGeo, material);
    ramp.rotation.x = -0.2;
    ramp.position.set(0, 0, -30);
    scene.add(ramp);
}

function animate() {
    requestAnimationFrame(animate);

    // Smooth scroll interpolation
    scrollY += (targetScrollY - scrollY) * 0.05;

    // Move coin based on scroll
    coin.position.z = -scrollY * 0.05;

    // Rotate coin based on scroll distance (rolling effect)
    coin.rotation.x = scrollY * 0.05;

    // Dynamic Camera Follow
    camera.position.z = coin.position.z + 10;
    camera.position.y = 5 + Math.sin(scrollY * 0.01) * 0.5;
    camera.lookAt(coin.position.x, coin.position.y, coin.position.z);

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
