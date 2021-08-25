// console.log(THREE)  // -- What to be written to access the Three js library and it should be all CAPS in order to acees it.

// Using this THREE we can access all the threejs library functions which are related to this threejs library

const scene = new THREE.Scene();  // This is a first class of the name Scene which is going to contain further Objects

const geometry = new THREE.BoxGeometry(1, 1, 1); //Syntax:
// Geometry:-
// Instantiate BoxGeometry

// This is a second object of the name BoxGeometry which corresponds to the a box and the parameters to it add as the corresponding Box size.

// The 1 in this is corresponding to size so it could be anything any unit be it 1m, 1km or 1cm

// Once the Geometry is done what are we going to do is to put on some material to it in order to make the box good.

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) //Syntax:

// Material:-
// Instantiate a MeshBasicMaterial

// You could use this to toss in a multiple kind of things to the box you have created. And the First thing to the list would be color
// You can choose by the H
// *Hexa code = '#ff0000'
// *Color name  = 'red'

const mesh = new THREE.Mesh(geometry, material)

// MESH:-
// Instantiate the Mesh with the geometry and the material

// The creation of mesh is like getting along all the properties together for a three d object.
// Note:- You can name the mesh anything which you want to

scene.add(mesh) // Syntax:-

// It is about adding the mesh in the scene and the mesh would be added but there is something missing isn't it?

//Determining the size of the scene
// ** THE ASPECT RATIO **
//   -> The width of the render divided by the height of the render. 
//   -> We don't have a render yet, but we camn decide the size now. 
//   -> Create a "sizes" Object containing temporary values

const sizes = {
    width: 800,
    height: 600
}

//Camera is here gaiizzzzz... this is going to give you a view about what you have created so far...

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 0.7
camera.position.x = 0.75


// Putting the camera in postion which is out of the center of the cube and is going to give us the view of the cube
scene.add(camera)
// In this camera you need to provide certain parameters. Remember each parameter tells a diffrent story.
// 1. ** The Field of view **
// -> "Vertical" vision angle (video-1.mp4)
// -> Also called as fov
// -> In degrees


// For this exercise, we are going to use the angles to be 75 degrees

//2. ** Determining the size of the scene **
// By the aspect ratio as the second parameter to the scene


// 3. ** RENDERER **
//     Once we are set with the camera and the size of the scene the next thing that we are supposed to keep in mind is going to the renderer of the screen.

// Now what is a renderer.In simple words it about making a complete scene from one cameras point of view.

//      1. Render the Scene from the Camera point of view
//      2. Results are drawn on the canvas.
//      3. A canvas is a HTML element in which you can draw stuff.
//      4. Three.js will use WebGL to draw the render inside this canvas.
//      5. You can create it or you can let Three.js to do the job for you.

// This canvas will be created in the HTML so please look in it.

// Fetching the canvas from the HTML document via DOM and making the request to use and do things on it.
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // This is the first object accesed by the renderer.

})
// There are various renderer but we are going to choose webGl renderer because we want pixel wise indexing.

// After the creation of the class what you need to do is to create the renderer for your canvas

// There is a case that the renderer is not in the appropriate size which it should be.

// In order to adjust with that we need to use the "setSize(...)" method to udate the size of the renderer canvas.
renderer.setSize(sizes.width, sizes.height)


// Now since everything is in the correct size and shape so we are going to make our first render.

// ******FIRST_RENDER******

// Call the "render(...)" method on the "renderer" with "scene" and the "camera" as parameters

renderer.render(scene, camera)

// Still Nothing ahhhhhh...... Man what an issue the problem is thta the camera is actually inside the cunbe itself so what we need to do is to get it out.

// Now to move the camera or to transform an object, we can use the following properties
    // 1. position : This property is also an object with x, y and z properties. Three.js forward and backward axis to be the z axis
    // 2. rotation  
    // 3. scale
