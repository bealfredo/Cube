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

const spanTransforms = {//rotateY(-90deg)
  bottom: ' rotateX(-90deg) translateZ(var(--cube-part-translate-z))',
  left: 'rotate(180deg) rotateY(180deg) translateZ(var(--cube-part-translate-z))',
  back: 'rotateX(90deg) rotateY(90deg) translateZ(var(--cube-part-translate-z))',
  front: 'rotateX(90deg) rotateY(-90deg) translateZ(var(--cube-part-translate-z))',
  right: 'translateZ(var(--cube-part-translate-z))',
  top: 'rotateX(90deg) translateZ(var(--cube-part-translate-z))' 
}//rotateY(-90deg) 

function setTransform(element, transform) {
  element.style.transform = transform;
}

function setAllDefaultSpanTransforms(array) {
  array.forEach((element, i) => {
    const sides = element.querySelectorAll('[id^="cube-part"]')
    setTransform(sides[0], spanTransforms.bottom)
    setTransform(sides[1], spanTransforms.left)
    setTransform(sides[2], spanTransforms.back)
    setTransform(sides[3], spanTransforms.front)
    setTransform(sides[4], spanTransforms.right)
    setTransform(sides[5], spanTransforms.top)
  })
}
setAllDefaultSpanTransforms(allCubeParts)

/**
 *  OTHER DECLARATIONS 
 */

// document.body.style.setProperty('--animationSpeed', 300)
const animationSpeed = 300;

const buttonsThatMove = document.querySelectorAll('button[id^="move"]:not(#movesHistoric-undoButton), button[class^="move"]')


buttonsThatMove.forEach((button) => {
  button.addEventListener('click', button2Execute)
})


/**
 * 3D CUBE ROTATE =======================================================
 */
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

setAllDefaultColors(allCubeParts)


/**
 * MOVES - SETTINGS =========================
 */

function button2Execute() {
  const func = getMoveByName(convertInnerHTML2NameFunction(this.innerText))
  toExecuteArr.push({'func':func, 'add2Historic':true, 'remove1FromHistoric':false})
}


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


/**
 * parts - um array com os elementos para rotacionar
 * direction - dire????o do eixo para rotacionar
 * degree - quantos graus ser?? a rota????o
 */ 
function moveClockwise(parts, direction, degree, nameFunction) {
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

  controlParts([part1,part2,part3,part4,part5,part6,part7,part8,part9], direction, degree, nameFunction)

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

function moveAnticlowise(parts, direction, degree, nameFunction) {
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

  controlParts([part1,part2,part3,part4,part5,part6,part7,part8,part9], direction, degree, nameFunction)

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

function controlParts(parts, direction, degree, nameFunction) {
  toVisible(parts)
  activateAnimation(parts)
  fixRotate(parts)
  // fixSpanRotate(parts)
  // setAllDefaultSpanTransforms(parts)

  changeSides(parts, direction, degree, nameFunction)
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
function fixRotate(parts) {
  if (agendadoFix) {clearTimeout(agendadoFix)}

  agendadoFix = setTimeout(() => {

    parts.forEach((element) => {/*para n??o ser visto*/
      const position = parseInt(element.classList.value.slice(-2)) - 1; /* in allTransforms */
      let transformArr = allTransformers[position]  /*of original part*/

      element.style.transition = 'none';
      changeTransform(element, transformArr[0], [0,0,0])
      // console.log(transformArr)
    })
    // console.log(parts)
  }, animationSpeed)
}


function setAllDefaultColors(array) {
  array.forEach((element, i) => {
    const sides = element.querySelectorAll('[id^="cube-part"] span')
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
function changeSides(parts, direction, degree, nameFunction) {
  console.log(direction, degree, nameFunction)
  // if (agendadoSides) {clearTimeout(agendadoSides)}

  agendadoSides = setTimeout(() => {

    parts.forEach((element) => {
      const sides1 = element.querySelectorAll('[id^="cube-part"]');
      const bottom1 = sides1[0]
      const left1 = sides1[1]
      const back1 = sides1[2]
      const front1 = sides1[3]
      const right1 = sides1[4]
      const top1 = sides1[5]

      const colors = {
        bottom: bottom1.innerHTML,
        left: left1.innerHTML,
        back: back1.innerHTML,
        front: front1.innerHTML,
        right: right1.innerHTML,
        top: top1.innerHTML
      }
    
      if (direction === 'x') {
        if (degree < 0) {
          bottom1.innerHTML = colors.right;
          left1.innerHTML = colors.bottom;
          back1.innerHTML = colors.back; rotateSpan(back1, -90)
          front1.innerHTML = colors.front; rotateSpan(front1, 90)
          right1.innerHTML = colors.top;
          top1.innerHTML = colors.left;
        } else {
          bottom1.innerHTML = colors.left
          left1.innerHTML = colors.top
          back1.innerHTML = colors.back; rotateSpan(back1, 90)
          front1.innerHTML = colors.front; rotateSpan(front1, -90)
          right1.innerHTML = colors.bottom
          top1.innerHTML = colors.right;
        }
      } else if (direction === 'y') {
        if (degree < 0) {
          bottom1.innerHTML = colors.bottom; rotateSpan(bottom1, -90)
          left1.innerHTML = colors.front
          back1.innerHTML = colors.left
          front1.innerHTML = colors.right
          right1.innerHTML = colors.back
          top1.innerHTML = colors.top; rotateSpan(top1, 90)
          if (nameFunction == 'moveU') {
            rotateSpan(front1, 90)
            rotateSpan(left1, 90)
            rotateSpan(back1, 90)
            rotateSpan(right1, 90)
          }
          if (nameFunction == 'moveDI') {
            rotateSpan(front1, 90)
            rotateSpan(left1, 90)
            rotateSpan(back1, 90)
            rotateSpan(right1, 90)
          }
          
        } else {
          bottom1.innerHTML = colors.bottom; rotateSpan(bottom1, 90)
          left1.innerHTML = colors.back
          back1.innerHTML = colors.right
          front1.innerHTML = colors.left
          right1.innerHTML = colors.front
          top1.innerHTML = colors.top; rotateSpan(top1, -90)
          if (nameFunction == 'moveUI') {
            rotateSpan(front1, -90)
            rotateSpan(left1, -90)
            rotateSpan(back1, -90)
            rotateSpan(right1, -90)
          }
          if (nameFunction == 'moveD') {
            rotateSpan(front1, -90)
            rotateSpan(left1, -90)
            rotateSpan(back1, -90)
            rotateSpan(right1, -90)
          }
        }
      } else {
        if (degree < 0) {
          bottom1.innerHTML = colors.front
          left1.innerHTML = colors.left; rotateSpan(left1, 90)
          back1.innerHTML = colors.bottom
          front1.innerHTML = colors.top
          right1.innerHTML = colors.right; rotateSpan(right1, -90);
          top1.innerHTML = colors.back
        } else {
          bottom1.innerHTML = colors.back
          left1.innerHTML = colors.left; rotateSpan(left1, -90)
          back1.innerHTML = colors.top
          front1.innerHTML = colors.bottom
          right1.innerHTML = colors.right; rotateSpan(right1, 90);
          top1.innerHTML = colors.front
        }
      }

    })
  }, animationSpeed)
}

const allSpans =document.querySelectorAll('[id^="cube-part"] span')
allSpans.forEach((element) => {element.style.setProperty('--rotate', 'rotate(0deg)')})

function rotateSpan(element, value) {
  const span = element.querySelector('span')

  const currentRotate = parseInt(span.style.getPropertyValue('--rotate').slice(7))

  span.style.setProperty('--rotate', 'rotate(' + (currentRotate + value) + 'deg)')
}

/**
 * MOVES FUNCTIONS ============================================================================== 
 */
function moveR() {
  moveClockwise(['25','26','27','16','17','18','7','8','9'], 'z', 90, 'moveR')
}
function moveRI() {
  moveAnticlowise(['25','26','27','16','17','18','7','8','9'], 'z', -90, 'moveRI')
}

function moveL() {
  moveClockwise(['19','20','21','10','11','12','1','2','3'], 'z', 90, 'moveL')
}
function moveLI() {
  moveAnticlowise(['19','20','21','10','11','12','1','2','3'], 'z', -90, 'moveLI')
}

function moveU() {
  moveClockwise(['25','22','19','26','23','20','27','24','21'], 'y', -90, 'moveU');
}
function moveUI() {
  moveAnticlowise(['25','22','19','26','23','20','27','24','21'], 'y', 90, 'moveUI');
}

function moveD() {
  moveAnticlowise(['1','2','3','4','5','6','7','8','9'], 'y', 90, 'moveD')
}
function moveDI() {
  moveClockwise(['1','2','3','4','5','6','7','8','9'], 'y', -90, 'moveDI')
}

function moveF() {
  moveClockwise(['19','22','25','10','13','16','1','4','7'], 'x', -90, 'moveF')
}
function moveFI() {
  moveAnticlowise(['19','22','25','10','13','16','1','4','7'], 'x', 90, 'moveFI')
}

function moveB() {
  moveClockwise(['27','24','21', '18', '15', '12','9','6','3'], 'x', 90, 'moveB')
}
function moveBI() {
  moveAnticlowise(['27','24','21', '18', '15', '12','9','6','3'], 'x', -90, 'moveBI')
}






const allMoves = [
  {
    nameString: 'moveR',
    functionCode: moveR
  },
  {
    nameString: 'moveRI',
    functionCode: moveRI
  },
  {
    nameString: 'moveL',
    functionCode: moveL
  },
  {
    nameString: 'moveLI',
    functionCode: moveLI
  },
  {
    nameString: 'moveU',
    functionCode: moveU
  },
  {
    nameString: 'moveUI',
    functionCode: moveUI
  },
  {
    nameString: 'moveD',
    functionCode: moveD
  },
  {
    nameString: 'moveDI',
    functionCode: moveDI
  },
  {
    nameString: 'moveF',
    functionCode: moveF
  },
  {
    nameString: 'moveFI',
    functionCode: moveFI
  },
  {
    nameString: 'moveB',
    functionCode: moveB
  },
  {
    nameString: 'moveBI',
    functionCode: moveBI
  }
]


/**
 * RANDOM MOVES =============================================================================================
 */
const remainingOutput = document.getElementById('remaining-output')
const remainingStopButton = document.getElementById('remaining-stopButton')

const randomQt = document.getElementById('randomQt')
const randomQtButton = document.getElementById('randomQt-button')
const randomMoves1xButton = document.getElementById('randomMoves1x-button')

function getButtonsRandomMoves() {
  return [randomQtButton, randomMoves1xButton]
}

remainingStopButton.addEventListener('click', stopToExecuteArr)
randomQtButton.addEventListener('click', randomMovesOfInput)
randomMoves1xButton.addEventListener('click', randomMoves)

function randomMovesOfInput() {
  randomMoves(randomQt.value)
}

function randomMoves(qt=1) {
  setRandomOfAArray(qt);
}

function executeFunctions(array) {
  array.forEach((func, i) => {
    setTimeout(func,0)
  })
}

function setRandomOfAArray(qt) {
  while (qt--) {
    const newMove = allMoves[Math.floor(Math.random() * allMoves.length)]
    toExecuteArr.push({'func':newMove.functionCode, 'add2Historic':true, 'remove1FromHistoric':false})
    // addToHistoric(newMove.nameString)
  }
}

var toExecuteArr = [] // an item is: {'func':func, 'add2Historic':true|false}
var moveButtons = document.querySelectorAll('#moves button[id^="move"')

function getButtonsGroupExecute() {
  return document.querySelectorAll('#groupExecute button')
}


/**
 * execute functions of array toExecute 
 */
setInterval(() => {
  if (toExecuteArr.length) {
    const func2Execute = toExecuteArr.shift()
    executeFunctions([func2Execute.func])

    if (func2Execute.add2Historic == true) {
      addToHistoric(func2Execute.func.name)
    }

    if (func2Execute.remove1FromHistoric == true) {
      const deleted = movesHistoricArr.shift()
      const deletedButton = deleted.button
      deletedButton.style.display ='none'
    }
  } 
  remainingOutput.innerText = toExecuteArr.length


  // if (toExecuteArr.length > 0) {
  //   // moveButtons.forEach(button2Disabled)
  //   // getButtonsGroupExecute().forEach(button2Disabled)
  // } else {
  //   // moveButtons.forEach(button2NotDisabled)
  //   // getButtonsGroupExecute().forEach(button2NotDisabled)
  // }
}, animationSpeed*2);


function stopToExecuteArr() {
  while(toExecuteArr.shift()){}
}


function button2Disabled(button) {
  button.setAttribute('disabled', '')
}
function button2NotDisabled(button) {
  setTimeout(() => {
    button.removeAttribute('disabled')
  }, animationSpeed);
}


/**
 * GROUP EXECUTE ====================================================================== 
 */

const go2GroupExecuteButton = document.getElementById('groupExecute-go2GroupExecuteButton')
const movesOptionsCloseButton = document.getElementById('closeButton-movesOptions')
const movesOptionsButtons = document.querySelectorAll('#movesOptions .buttonOption')
const movesOptions = document.getElementById('movesOptions')

const groupElementsFunctions = []
const groupExecuteContent = document.getElementById('groupExecute-content')
const buttonPairModel = document.getElementById('groupExecute-buttonPair')

go2GroupExecuteButton.addEventListener('click', openMovesOptions)
movesOptionsCloseButton.addEventListener('click', closeMovesOptions)
movesOptionsButtons.forEach((button) => {
  button.addEventListener('click', addToGroupExecute)
})



function addToGroupExecute() {

  groupElementsFunctions.push({
    name: convertInnerHTML2NameFunction(this.innerHTML),
    func: getMoveByName(convertInnerHTML2NameFunction(this.innerHTML))
  })

  const buttonPairClone = buttonPairModel.cloneNode(true);

  buttonPairClone.removeAttribute('id')
  buttonPairClone.classList.add('groupExecute-buttonPair')

  const elementClone = this.cloneNode(true);
  elementClone.classList.add('moveButtonClone')
  elementClone.removeAttribute('id')
  elementClone.addEventListener('click', button2Execute)

  buttonPairClone.appendChild(elementClone)
  
  const nameString = convertInnerHTML2NameFunction(this.innerHTML);
  const func = getMoveByName(nameString)

  const inverseFunctionName = getInverseFunctionName(nameString)
  const inverseButtonClone = document.getElementById(inverseFunctionName).cloneNode()

  inverseButtonClone.innerHTML = convertNameFunction2InnerHTML(inverseFunctionName)
  inverseButtonClone.classList.add('inverseButton')
  inverseButtonClone.classList.add('buttonClone')
  inverseButtonClone.removeAttribute('id')
  inverseButtonClone.addEventListener('click', button2Execute)
  

  buttonPairClone.appendChild(inverseButtonClone)

  groupExecuteContent.appendChild(buttonPairClone) 
}
 
/**
 * 
 * @param {*} string
 * @returns nameString
 */
function getInverseFunctionName(string) {
  if (string.slice(-1) === 'I') {
    string = string.replace(/I/g, '');
  } else {
    string += 'I';
  }

  return string
}


function convertInnerHTML2NameFunction(string) {
  string = 'move' + string;

  if (string.slice(-1) === "'") {
    string = string.replace(/\'/, 'I')
  }

  return string
}

function convertNameFunction2InnerHTML (string) {
  if (string.slice(-1) === 'I') {
    return string.slice(-2).replace('I', "'");
  }

  return string.slice(-1);
}

/**
 * OPEN / CLOSE MOVES OPTIONS 
 */
function openMovesOptions() {
  movesOptions.classList.add('Open')
}

function closeMovesOptions() {
  movesOptions.classList.remove('Open')
}


/**
 * START BUTTON 
 */
const groupExecuteStartButton = document.getElementById('groupExecute-startButton')

groupExecuteStartButton.addEventListener('click', groupExecuteStart)

function groupExecuteStart() {
  groupElementsFunctions.forEach((value) => {
    toExecuteArr.push({'func':value.func, 'add2Historic':true, 'remove1FromHistoric':false})
    // addToHistoric(value.name)
  })
}

/**
 * return an array with strings
 * and an array with functions
 */
function getOnclicks(string) {
  let funcStrings;
  try {
    funcStrings = string.match(/onclick\=\"[a-z]{1,}/ig)
  } catch (error) {
    funcStrings = [string]
  }

  const funcs = funcStrings.map((value, i) => {
    return getMoveByName(value.slice(9))
  })
  return [funcStrings, funcs]
}


function getMoveByName(string) {
  for (let i = 0; i < allMoves.length; i++) {
    if (allMoves[i].nameString === string) {
      return allMoves[i].functionCode
    }
  }
  return 0
}

/**
 * CLEAR BUTTON
 */
const groupExecuteClearButtons = document.getElementById('groupExecute-clearButton')

groupExecuteClearButtons.addEventListener('click', clearGroupExecute)

function clearGroupExecute() {
  while (groupElementsFunctions.pop())
  groupExecuteContent.innerHTML = '<div class="groupExecute-buttonPair"></div>'
}









/* MOVE HISTORIC ====================================================================== */

const movesHistoricArr = []
const movesHistoricElement = document.getElementById('movesHistoric')
const movesHistoricContent = document.getElementById('movesHistoric-content')
const movesHistoricUndoButton = document.getElementById('undoButton')
const movesHistoricUndoAllButton = document.getElementById('undoAllButton')

movesHistoricUndoButton.addEventListener('click', undoMove)
movesHistoricUndoAllButton.addEventListener('click', undoAllMoves)

function addToHistoric(nameFunction) {
  const func = getMoveByName(nameFunction)
  const inverseFunc = getMoveByName(getInverseFunctionName(nameFunction))
  const newButton = document.createElement('button')

  
  newButton.classList.add('movesHistoric-button')
  newButton.innerHTML = convertNameFunction2InnerHTML(nameFunction)
  
  try {
    movesHistoricContent.insertBefore(newButton, movesHistoricContent.querySelector('.movesHistoric-button'))
  } catch (error) {
    movesHistoricContent.appendChild(newButton)
  }
  
  
  movesHistoricArr.unshift({'func':func, 'inverse':inverseFunc, 'button':newButton})
  organizeMovesHistoric()
}

function organizeMovesHistoric() {
  movesHistoricArr.forEach((value, i) => {
    value.button.setAttribute('value', i+1)
  })
}

function undoMove(qt) {
  if (movesHistoricArr.length == 0) {return}
  
  if (typeof qt != "number") qt = 1

  for (let i = 0; i < qt; i++) {
    const toDelete = movesHistoricArr[i]

    toExecuteArr.push({'func':toDelete.inverse, 'add2Historic':false, 'remove1FromHistoric':true})

  }
  
}

function undoAllMoves() {
  undoMove(movesHistoricArr.length)
}





/**
 *  FUNCTIONS CEMETERY ================================
 */

// function addToHistoricManage(str=0) {
//   if (typeof str == "string") {
//     addToHistoric(convertInnerHTML2NameFunction(str))
//   } else {
//     //for buttons
//     addToHistoric(convertInnerHTML2NameFunction(this.innerHTML))
//   }
// }



// var selectState = 0;
// function groupExecuteSelect() {
//   if (!selectState) {
//     selectState = 1;
//     this.innerText = 'Selecting...';
//     this.classList.add('Selecting')
    
//     // groupExecuteStartButton.setAttribute('Disabled', '')
//     // groupExecuteClearButton.setAttribute('Disabled', '')
//     // getButtonsRandomMoves().forEach(button2Disabled)
//   } else {
//     selectState = 0;
//     this.innerText = 'Select';
//     this.classList.remove('Selecting')

//     // groupExecuteStartButton.removeAttribute('Disabled')
//     // groupExecuteClearButton.removeAttribute('Disabled')
//     // getButtonsRandomMoves().forEach(button2NotDisabled)

//   }
// }



// var agendadoSides = undefined;
// function changeSides(parts, direction, degree) {
//   // if (agendadoSides) {clearTimeout(agendadoSides)}

//   agendadoSides = setTimeout(() => {

//     parts.forEach((element) => {
//       const sides1 = element.querySelectorAll('[id^="cube-part"] span')
//       const bottom1 = sides1[0]
//       const left1 = sides1[1]
//       const back1 = sides1[2]
//       const front1 = sides1[3]
//       const right1 = sides1[4]
//       const top1 = sides1[5]
    
//       const colors = {
//         bottom: bottom1.style.backgroundColor,
//         left: left1.style.backgroundColor,
//         back: back1.style.backgroundColor,
//         front: front1.style.backgroundColor,
//         right: right1.style.backgroundColor,
//         top: top1.style.backgroundColor
//       }
    
//       if (direction === 'x') {
//         if (degree < 0) {
//           bottom1.style.backgroundColor = colors.right
//           left1.style.backgroundColor = colors.bottom
//           back1.style.backgroundColor = colors.back
//           front1.style.backgroundColor = colors.front
//           right1.style.backgroundColor = colors.top
//           top1.style.backgroundColor = colors.left
//         } else {
//           bottom1.style.backgroundColor = colors.left
//           left1.style.backgroundColor = colors.top
//           back1.style.backgroundColor = colors.back
//           front1.style.backgroundColor = colors.front
//           right1.style.backgroundColor = colors.bottom
//           top1.style.backgroundColor = colors.right
//         }
//       } else if (direction === 'y') {
//         if (degree < 0) {
//           bottom1.style.backgroundColor = colors.bottom
//           left1.style.backgroundColor = colors.front
//           back1.style.backgroundColor = colors.left
//           front1.style.backgroundColor = colors.right
//           right1.style.backgroundColor = colors.back
//           top1.style.backgroundColor = colors.top
//         } else {
//           bottom1.style.backgroundColor = colors.bottom
//           left1.style.backgroundColor = colors.back
//           back1.style.backgroundColor = colors.right
//           front1.style.backgroundColor = colors.left
//           right1.style.backgroundColor = colors.front
//           top1.style.backgroundColor = colors.top
//         }
//       } else {
//         if (degree < 0) {
//           bottom1.style.backgroundColor = colors.front
//           left1.style.backgroundColor = colors.left
//           back1.style.backgroundColor = colors.bottom
//           front1.style.backgroundColor = colors.top
//           right1.style.backgroundColor = colors.right
//           top1.style.backgroundColor = colors.back
//         } else {
//           bottom1.style.backgroundColor = colors.back
//           left1.style.backgroundColor = colors.left
//           back1.style.backgroundColor = colors.top
//           front1.style.backgroundColor = colors.bottom
//           right1.style.backgroundColor = colors.right
//           top1.style.backgroundColor = colors.front
//         }
//       }
//     })
//   }, animationSpeed)
// }



// const totry = document.getElementById('cube-part-25-right')
// const value2Add = 90;

// totry.style.setProperty('--rotate', 'rotate(90deg)')

// const currentRotate = parseInt(totry.style.getPropertyValue('--rotate').slice(7))

// totry.style.setProperty('--rotate', 'rotate(' + (currentRotate + value2Add) + 'deg)')

// console.log(currentRotate)

// function fixSpanRotate(parts) {
//   console.log(parts)
// }