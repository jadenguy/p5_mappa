//Your MapboxGL API Key

// Options for map
const options = {
  lat: 28,
  lng: -82,
  zoom: 0,
  style: 'mapbox://styles/mapbox/traffic-night-v2',
  pitch: 50,
};

// Create an instance of MapboxGL
const mappa = new Mappa('MapboxGL', key);
let myMap;

let canvas;
let meteorites;
let data;

const canvasWidth = 800;
const canvasHeight = 600;
function setup() {

  canvas = createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB, 1, 1, 1, 1);

  data = getData(50);
  console.log(data);


  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawAgain);
}

function drawAgain() {
  push()
  clear();
  noFill();
  stroke(0);
  rect(0, 0, canvasWidth, canvasHeight);
  //     size = map(size, 558, 60000000, 1, 25) + myMap.zoom();  
  data.forEach(point => {
    try {
      const latitude = point.latitude;
      const longitude = point.longitude;
      const size = point.size * Math.pow(2, myMap.zoom());
      const cColor = point.cColor;
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(cColor);
      ellipse(pos.x, pos.y, size, size * .75);
    } catch (error) {
      console.error(error);
      console.log(point)
    }


  });
  pop();
}

// The draw loop is fully functional but we are not using it for now.
function draw() { }

function getData(points) {
  let ret = [];
  console.log(ret);
  // for (let x = 0; x < 18; x++) {
  //   for (let y = 0; y < 36; y++) {
  //     const latitude = x * 10 - 90;
  //     const longitude = y * 20 - 180;
  //     const size = map(Math.random(), 0, 1, 1, 25);
  //     const cColor = color(Math.random(), 1, 1, 1);
  //     ret.push({ latitude, longitude, size, cColor });
  //   }
  // }
  for (let i = 0; i < points; i++) {
    const latitude = map(Math.random(), 0, 1, -90, 90);
    const longitude = map(Math.random(), 0, 1, -180, 180);
    const size = map(Math.random(), 0, 1, 1, 25);
    const cColor = color(Math.random(), 1, 1, 1);
    console.log(cColor);
    ret.push({ latitude, longitude, size, cColor });
  }
  return ret;
}