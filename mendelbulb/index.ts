// const DIM = 256;
// const n = 8;
// const scaler = 540;

// const points: p5.Vector[] = [];

// function setup() {
//   windowResized();
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   background(0);
//   stroke(255);
//   strokeWeight(2);
//   frameRate(5);
//   colorMode(HSB);

//   for (let i = 0; i < DIM; i++) {
//     for (let j = 0; j < DIM; j++) {
//       let edge = false;

//       for (let k = 0; k < DIM; k++) {
//         const x = map(i, 0, DIM, -1, 1);
//         const y = map(j, 0, DIM, -1, 1);
//         const z = map(k, 0, DIM, -1, 1);

//         const zeta = createVector(0, 0, 0);
//         const maxIteration = 10;
//         let iteration = 0;
//         while (true) {
//           const sphericalZeta = spherical(zeta.x, zeta.y, zeta.z);
//           const powRN = pow(sphericalZeta.r, n);
//           const sinTN = sin(sphericalZeta.t * n);
//           const newX = powRN * sinTN * cos(sphericalZeta.p * n);
//           const newY = powRN * sinTN * sin(sphericalZeta.p * n);
//           const newZ = powRN * cos(sphericalZeta.t * n);

//           zeta.x = newX + x;
//           zeta.y = newY + y;
//           zeta.z = newZ + z;

//           if (sphericalZeta.r > 16) {
//             if (edge) {
//               edge = false;
//             }
//             break;
//           }

//           iteration++;
//           if (iteration > maxIteration) {
//             if (!edge) {
//               edge = true;
//               points.push(createVector(x * scaler, y * scaler, z * scaler));
//             }
//             break;
//           }
//         }
//       }
//     }
//   }
//   // points.sort((a, b) => Math.random() - 0.5).splice(0, 6000);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function spherical(x: number, y: number, z: number) {
//   const x2 = x * x;
//   const y2 = y * y;
//   const r = Math.sqrt(x2 + y2 + z * z);
//   const t = Math.atan2(Math.sqrt(x2 + y2), z);
//   const p = Math.atan2(y, x);
//   return { r, t, p };
// }

// function draw() {
//   background(0);
//   if (!capture) return;
//   angleMode(DEGREES);
//   rotateY((capturedFrames * 360) / 60);
//   for (let i = 0; i < points.length; i++) {
//     point(points[i].x, points[i].y, points[i].z);
//   }

//   if (capturedFrames < 60) {
//     let num = nf(capturedFrames, 3, 0);
//     let filename = num + '.jpg';

//     save(filename);
//     console.log(filename);
//     capturedFrames++;
//   } else {
//     noLoop();
//   }
// }
// let capturedFrames = 0;
// let capture = false;
// function mousePressed() {
//   capture = true;
// }
