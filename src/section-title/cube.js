// Rotation in each direction
var A = 0;
var B = 0;
var C = 0;

var asciiframe = function () {
  // The array that is displayed to the box
  var b = [];
  // Depth of each index of the array
  var zBuffer = [];

  const width = 100;
  const height = 50;
  for (var k = 0; k < width * height; k++) {
    b[k] = k % width === width - 1 ? "\n" : " ";
    zBuffer[k] = 0;
  }

  // Rotate the cube
  A += 0.04;
  B += 0.05;
  C += 0.01;
  const sideLength = 4 * 2;
  const step = 0.2;

  renderCube([A, B, C]);

  function renderCube(r) {
    var normals = [
      [0, 1, 0],
      [0, -1, 0],
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
    ];
    // Rotate the normals before passing them
    for (let i = 0; i < 6; i++) {
      normals[i] = rotate(normals[i], r);
    }

    for (var i = -sideLength ; i < sideLength; i += step) {
      for (var j = -sideLength; j < sideLength; j += step) {
        var points = [
          [i, sideLength, j],
          [i, -sideLength, j],
          [sideLength, i, j],
          [-sideLength, i, j],
          [i, j, sideLength],
          [i, j, -sideLength],
        ];
        for (const direction in points) {
          renderPoint(
            rotate(points[direction], r), // The rotated point
            normals[direction], // Its corresponding normal vector
          );
        }
      }
    }
  }

  function renderPoint(point, normal) {
    // Points on screen
    const screenx = 0 | 30 + (3 * ((point[0] * 49) / (50 - point[2])) + 19);
    const screeny = 0 | (45 - 3 * ((point[1] * 49) / (50 - point[2]))) / 2;

    if (screeny > height || screeny <= 0 || screenx <= 0 || screenx > width - 2) {
      return;
    }
    var intersect = screenx + width * screeny;

    const lightvec = normalize([-20 - point[0], 0 - point[1], 20 - point[2]]);
    const strength = 2.7 ** (-0.02 * lightvec[3]);
    var luminance = 0 | (strength * 11 * dot(lightvec, normal));

    var depth = 1 / (50 - point[2]);

    if (depth > zBuffer[intersect]) {
      zBuffer[intersect] = depth;
      b[intersect] = " .,-~:;!=*$#@"[luminance > 0 ? luminance : 0];
    }
  }

  function rotate(v, r) {
    const sinA = Math.sin(r[0]),
      cosA = Math.cos(r[0]),
      sinB = Math.sin(r[1]),
      cosB = Math.cos(r[1]),
      sinC = Math.sin(r[2]),
      cosC = Math.cos(r[2]);
    // relative vector based on pivot point

    var xprime =
      v[0] * (cosB * cosC) +
      v[1] * (sinA * sinB * cosC - cosA * sinC) +
      v[2] * (cosA * sinB * cosC + sinA * sinC);
    var yprime =
      v[0] * (cosB * sinC) +
      v[1] * (sinA * sinB * sinC + cosA * cosC) +
      v[2] * (cosA * sinB * sinC - sinA * cosC);
    var zprime = v[0] * -sinB + v[1] * (sinA * cosB) + v[2] * (cosA * cosB);
    return [xprime, yprime, zprime];
  }
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function normalize(v) {
    const mag = Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
    return [v[0] / mag, v[1] / mag, v[2] / mag, mag];
  }
  return b.join("");
};

export default asciiframe;


