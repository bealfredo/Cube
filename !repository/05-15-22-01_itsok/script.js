var allCubeParts = document.querySelectorAll('#cube > [id^="cube-part"]');

var cubePart01 = allCubeParts[0]
var cubePart02 = allCubeParts[1]
var cubePart03 = allCubeParts[2]
var cubePart04 = allCubeParts[3]
var cubePart05 = allCubeParts[4]
var cubePart06 = allCubeParts[5]
var cubePart07 = allCubeParts[6]
var cubePart08 = allCubeParts[7]
var cubePart09 = allCubeParts[8]
var cubePart10 = allCubeParts[9]
var cubePart11 = allCubeParts[10]
var cubePart12 = allCubeParts[11]
var cubePart13 = allCubeParts[12]
var cubePart14 = allCubeParts[13]
var cubePart15 = allCubeParts[14]
var cubePart16 = allCubeParts[15]
var cubePart17 = allCubeParts[16]
var cubePart18 = allCubeParts[17]
var cubePart19 = allCubeParts[18]
var cubePart20 = allCubeParts[19]
var cubePart21 = allCubeParts[20]
var cubePart22 = allCubeParts[21]
var cubePart23 = allCubeParts[22]
var cubePart24 = allCubeParts[23]
var cubePart25 = allCubeParts[24]
var cubePart26 = allCubeParts[25]
var cubePart27 = allCubeParts[26]

var allTransformers = [
  [
    ['0','calc(var(--cube-part-size) * 2)','calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', 'calc(var(--cube-part-size) * 2)', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', 'calc(var(--cube-part-size) * 2)', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['0', 'calc(var(--cube-part-size) * 2)', '0'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', 'calc(var(--cube-part-size) * 2)', 0],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', 'calc(var(--cube-part-size) * 2)', '0'],
    [0, 0, 0]
  ],
  [
    ['0', 'calc(var(--cube-part-size) * 2)', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', 'calc(var(--cube-part-size) * 2)', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', 'calc(var(--cube-part-size) * 2)', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['0', 'var(--cube-part-size)', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', 'var(--cube-part-size)', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', 'var(--cube-part-size)', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['0', 'var(--cube-part-size)', '0'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', 'var(--cube-part-size)', 0],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', 'var(--cube-part-size)', '0'],
    [0, 0, 0]
  ],
  [
    ['0', 'var(--cube-part-size)', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', 'var(--cube-part-size)', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', 'var(--cube-part-size)', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],

  [
    ['0', '0', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', '0', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', '0', 'calc(var(--cube-part-size) * -1)'],
    [0, 0, 0]
  ],
  [
    ['0', '0', '0'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', '0', '0'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', '0', '0'],
    [0, 0, 0]
  ],
  [
    ['0', '0', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['var(--cube-part-size)', '0', 'var(--cube-part-size)'],
    [0, 0, 0]
  ],
  [
    ['calc(var(--cube-part-size) * 2)', '0', 'var(--cube-part-size)'],
    [0, 0, 0]
  ]
]

const cubeColors = [    
  {//01
    bottom: 'color1',
    left: 'color2',
    back: 'inside',
    front: 'color4',
    right: 'inside',
    top: 'inside'
  },
  {//02
    bottom: 'color1',
    left: 'color2',
    back: 'inside',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//03
    bottom: 'color1',
    left: 'color2',
    back: 'color3',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//04
    bottom: 'color1',
    left: 'inside',
    back: 'inside',
    front: 'color4',
    right: 'inside',
    top: 'inside'
  },
  {//05
    bottom: 'color1',
    left: 'inside',
    back: 'inside',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//06
    bottom: 'color1',
    left: 'inside',
    back: 'color3',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//07
    bottom: 'color1',
    left: 'inside',
    back: 'inside',
    front: 'color4',
    right: 'color5',
    top: 'inside'
  },
  {//08
    bottom: 'color1',
    left: 'inside',
    back: 'inside',
    front: 'inside',
    right: 'color5',
    top: 'inside'
  },
  {//09
    bottom: 'color1',
    left: 'inside',
    back: 'color3',
    front: 'inside',
    right: 'color5',
    top: 'inside'
  },
  {//10
    bottom: 'inside',
    left: 'color2',
    back: 'inside',
    front: 'color4',
    right: 'inside',
    top: 'inside'
  },
  {//11
    bottom: 'inside',
    left: 'color2',
    back: 'inside',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//12
    bottom: 'inside',
    left: 'color2',
    back: 'color3',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//13
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'color4',
    right: 'inside',
    top: 'inside'
  },
  {//14
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//15
    bottom: 'inside',
    left: 'inside',
    back: 'color3',
    front: 'inside',
    right: 'inside',
    top: 'inside'
  },
  {//16
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'color4',
    right: 'color5',
    top: 'inside'
  },
  {//17
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'inside',
    right: 'color5',
    top: 'inside'
  },
  {//18
    bottom: 'inside',
    left: 'inside',
    back: 'color3',
    front: 'inside',
    right: 'color5',
    top: 'inside'
  },
  {//19
    bottom: 'inside',
    left: 'color2',
    back: 'inside',
    front: 'color4',
    right: 'inside',
    top: 'color6'
  },
  {//20
    bottom: 'inside',
    left: 'color2',
    back: 'inside',
    front: 'inside',
    right: 'inside',
    top: 'color6'
  },
  {//21
    bottom: 'inside',
    left: 'color2',
    back: 'color3',
    front: 'inside',
    right: 'inside',
    top: 'color6'
  },
  {//22
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'color4',
    right: 'inside',
    top: 'color6'
  },
  {//23
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'inside',
    right: 'inside',
    top: 'color6'
  },
  {//24
    bottom: 'inside',
    left: 'inside',
    back: 'color3',
    front: 'inside',
    right: 'inside',
    top: 'color6'
  },
  {//25
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'color4',
    right: 'color5',
    top: 'color6'
  },
  {//26
    bottom: 'inside',
    left: 'inside',
    back: 'inside',
    front: 'inside',
    right: 'color5',
    top: 'color6'
  },
  {//27
    bottom: 'inside',
    left: 'inside',
    back: 'color3',
    front: 'inside',
    right: 'color5',
    top: 'color6'
  }
]




/* #3D rotate =======================================================*/
var cube = document.getElementById('cube');
var transformCube = [-45, 30]

cube.addEventListener('mousedown', mouseDown)
cube.addEventListener('mouseup', mouseUp)

function mouseDown() {
  cube.addEventListener('mousemove', cubeRotate)
  baseX = posX;
  baseY = posY;
  
  const currentTransform = cube.style.transform.match(/-*[0-9]{1,}/g);
  currentX = parseInt(currentTransform[0])
  currentY = parseInt(currentTransform[1])

  cube.style.cursor = "grabbing"
}
function mouseUp() {
  cube.removeEventListener('mousemove', cubeRotate)
  cube.style.cursor = "grab"
}

var posX, posY, baseX, baseY, currentX, currentY;
cube.addEventListener('mousemove', function(event) {
    posX = event.clientX,
    posY = event.clientY; 
  });

cube.style.transform = 'rotateX(' + -45 + 'deg) rotateY(' + 30 + 'deg)'; //for js to be able to get it
function cubeRotate() {
  const x = ((baseY - posY) + currentX)
  const y = (((baseX - posX)*-1) + currentY)

  cube.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
}


var degX = '-45deg';
var degY = '30deg';
function xx(value) {
  degX = value + "deg"
  document.getElementById('cube').style.transform = `rotateX(${degX}) rotateY(${degY})`;
}
function yy(value) {
  degY = value + "deg"
  document.getElementById('cube').style.transform = `rotateX(${degX}) rotateY(${degY})`;
}






// control();
function control(){
  // setDefaultTransformers();
}

setTimeout(() => {
  setDefaultTransformers()
}, 300)


function setDefaultTransformers() {
  allCubeParts.forEach((value, i) => {
    changeTransform(value, allTransformers[i][0], allTransformers[i][1]);
    toVisible(allCubeParts)
  })
}


/* MOVES - SETTINGS =========================*/
function changeTransform(element, translate3D, rotate3D, toRotate=undefined) {

  if (toRotate !== undefined) {

    rotate3D[0] = toRotate[0];
    rotate3D[1] = toRotate[1];
    rotate3D[2] = toRotate[2];

  }

  element.style.transform = 
  `translate3d(${translate3D[0]}, ${translate3D[1]}, ${translate3D[2]}) 
  rotateX(${rotate3D[0]}deg) rotateY(${rotate3D[1]}deg) rotateZ(${rotate3D[2]}deg)`;
}



// parts - um array com os elementos para rotacionar
// direction - direção do eixo para rotacionar
// degree - quantos graus será a rotação
function moveClockwise(parts, direction, degree) {
  // console.log([parts, direction, degree].join("\n"))

  const part1 = document.querySelector('.cube-part-' + parts[0].padStart(2, "0"))
  const part2 = document.querySelector('.cube-part-' + parts[1].padStart(2, "0"))
  const part3 = document.querySelector('.cube-part-' + parts[2].padStart(2, "0"))
  const part4 = document.querySelector('.cube-part-' + parts[3].padStart(2, "0"))
  const part5 = document.querySelector('.cube-part-' + parts[4].padStart(2, "0"))
  const part6 = document.querySelector('.cube-part-' + parts[5].padStart(2, "0"))
  const part7 = document.querySelector('.cube-part-' + parts[6].padStart(2, "0"))
  const part8 = document.querySelector('.cube-part-' + parts[7].padStart(2, "0"))
  const part9 = document.querySelector('.cube-part-' + parts[8].padStart(2, "0"))

  controlParts([part1,part2,part3,part4,part5,part6,part7,part8,part9], direction, degree)

  let x=0, y=0, z=0;

  if (direction === 'x') { 
    x = degree;
  } else if (direction === 'y') {
    y = degree;
  } else {
    z = degree;
  }

  changeTransform(part1, allTransformers[parts[2]-1][0], allTransformers[parts[0]-1][1], [x, y, z]);
  changeTransform(part2, allTransformers[parts[5]-1][0], allTransformers[parts[1]-1][1], [x, y, z]);
  changeTransform(part3, allTransformers[parts[8]-1][0], allTransformers[parts[2]-1][1], [x, y, z]);

  changeTransform(part4, allTransformers[parts[1]-1][0], allTransformers[parts[3]-1][1], [x, y, z]);
  changeTransform(part5, allTransformers[parts[4]-1][0], allTransformers[parts[4]-1][1], [x, y, z]);
  changeTransform(part6, allTransformers[parts[7]-1][0], allTransformers[parts[5]-1][1], [x, y, z]);

  changeTransform(part7, allTransformers[parts[0]-1][0], allTransformers[parts[6]-1][1], [x, y, z]);
  changeTransform(part8, allTransformers[parts[3]-1][0], allTransformers[parts[7]-1][1], [x, y, z]);
  changeTransform(part9, allTransformers[parts[6]-1][0], allTransformers[parts[8]-1][1], [x, y, z]);

  part1.classList = "cube-part-" + parts[2].padStart(2, '0');
  part2.classList = "cube-part-" + parts[5].padStart(2, '0');
  part3.classList = "cube-part-" + parts[8].padStart(2, '0');
  part4.classList = "cube-part-" + parts[1].padStart(2, '0');
  part5.classList = "cube-part-" + parts[4].padStart(2, '0');
  part6.classList = "cube-part-" + parts[7].padStart(2, '0');
  part7.classList = "cube-part-" + parts[0].padStart(2, '0');
  part8.classList = "cube-part-" + parts[3].padStart(2, '0');
  part9.classList = "cube-part-" + parts[6].padStart(2, '0');
}

function moveAnticlowise(parts, direction, degree) {
  // console.log([parts, direction, degree].join("\n"))

  const part1 = document.querySelector('.cube-part-' + parts[0].padStart(2, "0"))
  const part2 = document.querySelector('.cube-part-' + parts[1].padStart(2, "0"))
  const part3 = document.querySelector('.cube-part-' + parts[2].padStart(2, "0"))
  const part4 = document.querySelector('.cube-part-' + parts[3].padStart(2, "0"))
  const part5 = document.querySelector('.cube-part-' + parts[4].padStart(2, "0"))
  const part6 = document.querySelector('.cube-part-' + parts[5].padStart(2, "0"))
  const part7 = document.querySelector('.cube-part-' + parts[6].padStart(2, "0"))
  const part8 = document.querySelector('.cube-part-' + parts[7].padStart(2, "0"))
  const part9 = document.querySelector('.cube-part-' + parts[8].padStart(2, "0"))

  controlParts([part1,part2,part3,part4,part5,part6,part7,part8,part9], direction, degree)

  let x=0, y=0, z=0;

  if (direction === 'x') { 
    x = degree;
  } else if (direction === 'y') {
    y = degree;
  } else {
    z = degree;
  }

  changeTransform(part1, allTransformers[parts[6]-1][0], allTransformers[parts[0]-1][1], [x, y, z]);
  changeTransform(part2, allTransformers[parts[3]-1][0], allTransformers[parts[1]-1][1], [x, y, z]);
  changeTransform(part3, allTransformers[parts[0]-1][0], allTransformers[parts[2]-1][1], [x, y, z]);

  changeTransform(part4, allTransformers[parts[7]-1][0], allTransformers[parts[3]-1][1], [x, y, z]);
  changeTransform(part5, allTransformers[parts[4]-1][0], allTransformers[parts[4]-1][1], [x, y, z]);
  changeTransform(part6, allTransformers[parts[1]-1][0], allTransformers[parts[5]-1][1], [x, y, z]);

  changeTransform(part7, allTransformers[parts[8]-1][0], allTransformers[parts[6]-1][1], [x, y, z]);
  changeTransform(part8, allTransformers[parts[5]-1][0], allTransformers[parts[7]-1][1], [x, y, z]);
  changeTransform(part9, allTransformers[parts[2]-1][0], allTransformers[parts[8]-1][1], [x, y, z]);

  part1.classList = "cube-part-" + parts[6].padStart(2, '0');
  part2.classList = "cube-part-" + parts[3].padStart(2, '0');
  part3.classList = "cube-part-" + parts[0].padStart(2, '0');
  part4.classList = "cube-part-" + parts[7].padStart(2, '0');
  part5.classList = "cube-part-" + parts[4].padStart(2, '0');
  part6.classList = "cube-part-" + parts[1].padStart(2, '0');
  part7.classList = "cube-part-" + parts[8].padStart(2, '0');
  part8.classList = "cube-part-" + parts[5].padStart(2, '0');
  part9.classList = "cube-part-" + parts[2].padStart(2, '0');
}

function controlParts(parts, direction, degree) {
  toVisible(parts)
  activateAnimation(parts)
  fixRotate(parts)

  changeSides(parts, direction, degree)
}

function toVisible(parts) {
  parts.forEach((element) => {
    element.style.visibility = 'visible';
  })
}

function activateAnimation(parts) {
  parts.forEach((element) => {
    element.style.transition = 'transform ' + animationSpeed + "ms"
  })
}

var agendadoFix = undefined;
var animationSpeed = 300
function fixRotate(parts) {
  if (agendadoFix) {clearTimeout(agendadoFix)}

  agendadoFix = setTimeout(() => {

    parts.forEach((element) => {/*para não ser visto*/
      const position = parseInt(element.classList.value.slice(-2)) - 1; /* in allTransforms */
      let transformArr = allTransformers[position]  /*of original part*/

      element.style.transition = 'none';
      changeTransform(element, transformArr[0], [0,0,0])
      // console.log(transformArr)
    })
    // console.log(parts)
  }, animationSpeed)
}



setAllDefaultColors(allCubeParts)

function setAllDefaultColors(array) {
  array.forEach((element, i) => {
    const sides = element.querySelectorAll('[id^="cube-part"]')
    setColor(sides[0], cubeColors[i].bottom)
    setColor(sides[1], cubeColors[i].left)
    setColor(sides[2], cubeColors[i].back)
    setColor(sides[3], cubeColors[i].front)
    setColor(sides[4], cubeColors[i].right)
    setColor(sides[5], cubeColors[i].top)
  })
}


function setColor(element, color) {
  element.style.backgroundColor = 'var(--' + color + ')';
}


var agendadoSides = undefined;
function changeSides(parts, direction, degree) {
  // if (agendadoSides) {clearTimeout(agendadoSides)}

  agendadoSides = setTimeout(() => {

    parts.forEach((element) => {
      const sides1 = element.querySelectorAll('[id^="cube-part"]')
      const bottom1 = sides1[0]
      const left1 = sides1[1]
      const back1 = sides1[2]
      const front1 = sides1[3]
      const right1 = sides1[4]
      const top1 = sides1[5]
    
      const colors = {
        bottom: bottom1.style.backgroundColor,
        left: left1.style.backgroundColor,
        back: back1.style.backgroundColor,
        front: front1.style.backgroundColor,
        right: right1.style.backgroundColor,
        top: top1.style.backgroundColor
      }
    
      if (direction === 'x') {
        if (degree < 0) {
          bottom1.style.backgroundColor = colors.right
          left1.style.backgroundColor = colors.bottom
          back1.style.backgroundColor = colors.back
          front1.style.backgroundColor = colors.front
          right1.style.backgroundColor = colors.top
          top1.style.backgroundColor = colors.left
        } else {
          bottom1.style.backgroundColor = colors.left
          left1.style.backgroundColor = colors.top
          back1.style.backgroundColor = colors.back
          front1.style.backgroundColor = colors.front
          right1.style.backgroundColor = colors.bottom
          top1.style.backgroundColor = colors.right
        }
      } else if (direction === 'y') {
        if (degree < 0) {
          bottom1.style.backgroundColor = colors.bottom
          left1.style.backgroundColor = colors.front
          back1.style.backgroundColor = colors.left
          front1.style.backgroundColor = colors.right
          right1.style.backgroundColor = colors.back
          top1.style.backgroundColor = colors.top
        } else {
          bottom1.style.backgroundColor = colors.bottom
          left1.style.backgroundColor = colors.back
          back1.style.backgroundColor = colors.right
          front1.style.backgroundColor = colors.left
          right1.style.backgroundColor = colors.front
          top1.style.backgroundColor = colors.top
        }
      } else {
        if (degree < 0) {
          bottom1.style.backgroundColor = colors.front
          left1.style.backgroundColor = colors.left
          back1.style.backgroundColor = colors.bottom
          front1.style.backgroundColor = colors.top
          right1.style.backgroundColor = colors.right
          top1.style.backgroundColor = colors.back
        } else {
          bottom1.style.backgroundColor = colors.back
          left1.style.backgroundColor = colors.left
          back1.style.backgroundColor = colors.top
          front1.style.backgroundColor = colors.bottom
          right1.style.backgroundColor = colors.right
          top1.style.backgroundColor = colors.front
        }
      }
    })
  }, animationSpeed)
}


/* MOVES ==============================================================================*/
function moveR() {
  moveClockwise(['25','26','27','16','17','18','7','8','9'], 'z', 90)
}
function moveRD() {
  moveAnticlowise(['25','26','27','16','17','18','7','8','9'], 'z', -90)
}

function moveL() {
  moveClockwise(['19','20','21','10','11','12','1','2','3'], 'z', 90)
}
function moveLD() {
  moveAnticlowise(['19','20','21','10','11','12','1','2','3'], 'z', -90)
}

function moveU() {
  moveClockwise(['25','22','19','26','23','20','27','24','21'], 'y', -90);
}
function moveUD() {
  moveAnticlowise(['25','22','19','26','23','20','27','24','21'], 'y', 90);
}

function moveD() {
  moveAnticlowise(['1','2','3','4','5','6','7','8','9'], 'y', 90)
}
function moveDD() {
  moveClockwise(['1','2','3','4','5','6','7','8','9'], 'y', -90)
}

function moveF() {
  moveClockwise(['19','22','25','10','13','16','1','4','7'], 'x', -90)
  //doing
}
function moveFD() {
  moveAnticlowise(['19','22','25','10','13','16','1','4','7'], 'x', 90)
}

function moveB() {
  moveClockwise(['27','24','21', '18', '15', '12','9','6','3'], 'x', 90)
}
function moveBD() {
  moveAnticlowise(['27','24','21', '18', '15', '12','9','6','3'], 'x', -90)
}
