//Your MapboxGL API Key

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
  canvas = createCanvas(800, 700);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawMeteorites);

  fill(109, 255, 0);
  stroke(100);
}

// The draw loop is fully functional but we are not using it for now.
function draw() {}

function drawMeteorites() {
// {
}
//   // Clear the canvas
//   clear();

//   for (let i = 0; i < meteorites.getRowCount(); i += 1) {
//     // Get the lat/lng of each meteorite
//     const latitude = Number(meteorites.getString(i, 'reclat'));
//     const longitude = Number(meteorites.getString(i, 'reclong'));

//     // Transform lat/lng to pixel position
//     const pos = myMap.latLngToPixel(latitude, longitude);
//     // Get the size of the meteorite and map it. 60000000 is the mass of the largest
//     // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
//     let size = meteorites.getString(i, 'mass (g)');
//     size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
//     ellipse(pos.x, pos.y, size, size);
//   }
// }







// let x = 0;
// let y = 0;

// // Create a new Mappa instance using Mapboxgl.
// const mappa = new Mappa('MapboxGL', key);
// let myMap;
// let canvas;


// // Options for map
// const options = {
//   lat: 0,
//   lng: 0,
//   zoom: 4,
//   style: 'mapbox://styles/mapbox/traffic-night-v2',
//   pitch: 50,
// };

// function setup() {
//   canvas = createCanvas(640, 640);
//   // mappa = new Mappa('Mapboxgl', key);
//   background(220);
//   colorMode(HSB, 255, 255, 255);
//   myMap = mappa.tileMap(0, 0, 4); // lat 0, lng 0, zoom 4
//   myMap.overlay(canvas)
// }

// function draw() {
//   fill(y, 255, 255);
//   rect(320 - x / 2, 320 - x / 2, x, x)
//   x++;
//   x = x % 640;
//   y++;
//   y = y % 255;
// }


