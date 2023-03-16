
var scene = new THREE.Scene();
// scene.background = new THREE.Color(0x262626)
var camera =  new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight);
 


var renderer = new THREE.WebGL1Renderer({antialias:true});
renderer.setSize(window.innerWidth  , window.innerHeight );
document.getElementById("threejs-container").append(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:true });
var cube =   new THREE.Mesh(geometry,material);
scene.add(cube)

cube.position.z = -5
cube.rotation.x = 10;
cube.rotation.y = 5;

function animate(){
    cube.rotation.y += 0.01
    cube.rotation.x += 0.01

renderer.render(scene,camera);
requestAnimationFrame(animate)

}
animate()


renderer.render(scene,camera)
 

 