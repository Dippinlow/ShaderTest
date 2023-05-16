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

  shaderGraphics.shader(theShader);

  shaderGraphics.rect(0, 0, width, height);
  

  resetShader();

  image(shaderGraphics, 0, 0);
  image(grain.img, 0, 0);
}
