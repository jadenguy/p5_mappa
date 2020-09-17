//Your MapboxGL API Key
// moved to secret.js

// Options for map
const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'mapbox://styles/mapbox/traffic-night-v2',
  pitch: 50,
};

// Create an instance of MapboxGL
const mappa = new Mappa('MapboxGL', key);
let myMap;

let canvas;
let meteorites;

function setup() {
  canvas = createCanvas(800, 600);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawAgain);

  fill(109, 255, 0);
  stroke(100);
}

// The draw loop is fully functional but we are not using it for now.
function draw() {}


function drawAgain() {
  
}