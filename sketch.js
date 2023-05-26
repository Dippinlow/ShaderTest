let theShader;
let grain;
let shaderGraphics;

function preload(){
  theShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  pixelDensity(1);
  noStroke();
  noFill();
  createCanvas(windowWidth, windowHeight);
  shaderGraphics = createGraphics(width, height, WEBGL);
  grain = new grainFilter(width, height);

}

function draw() {
  background(0, 200, 20);
  theShader.setUniform("u_resolution", [width, height]);
  let time = (frameCount % 1000) / 1000;
  let theta = map(time, 0, 1, 0, TWO_PI);
  let smoothTime = map(sin(theta), -1, 1, 0, 1);

  theShader.setUniform("u_time", smoothTime);

  shaderGraphics.shader(theShader);

  shaderGraphics.rect(0, 0, width, height);
  

  //resetShader();

  image(shaderGraphics, 0, 0);
  image(grain.img, 0, 0);
}
