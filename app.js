// Create the scene
const scene = new THREE.Scene();

// Set up a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Move the camera away from the origin

// Initialize the WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define vertices for the polygon
const vertices = new Float32Array([
    0.0,  1.0, 0.0,  // Vertex 1 (top)
   -0.95, 0.31, 0.0, // Vertex 2 (top-left)
   -0.59, -0.81, 0.0, // Vertex 3 (bottom-left)
    0.59, -0.81, 0.0, // Vertex 4 (bottom-right)
    0.95,  0.31, 0.0  // Vertex 5 (top-right)
]);

// Create the geometry and set its vertices
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setIndex([0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1]); // Define triangular faces
geometry.computeVertexNormals();

// Create a red material for the polygon
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });

// Create a mesh and add it to the scene
const polygon = new THREE.Mesh(geometry, material);
scene.add(polygon);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the polygon on X and Y axes
    polygon.rotation.x += 0.01;
    polygon.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}
animate();
