var allCubeParts = document.querySelectorAll('#cube > #cube-wrap > [id^="cube-part"]');

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
  `translateY(calc(var(--cube-part-size) * 2))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(180deg)`,
  `translateX(var(--cube-part-size))
  translateY(calc(var(--cube-part-size) * 2))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(180deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateY(calc(var(--cube-part-size) * 2))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(180deg)
  rotateY(90deg)`,
  `translateY(calc(var(--cube-part-size) * 2))
  rotateX(180deg)
  rotateY(-90deg)`,
  `translateX(var(--cube-part-size))
  translateY(calc(var(--cube-part-size) * 2))
  rotateX(180deg)
  rotateY(-90deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateY(calc(var(--cube-part-size) * 2))
  rotateX(180deg)
  rotateY(90deg)`,
  `translateY(calc(var(--cube-part-size) * 2))
  translateZ(var(--cube-part-size))
  rotateX(180deg)
  rotateY(-90deg)`,
  `translateX(var(--cube-part-size))
  translateY(calc(var(--cube-part-size) * 2))
  translateZ(var(--cube-part-size))
  rotateZ(180deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateY(calc(var(--cube-part-size) * 2))
  translateZ(var(--cube-part-size))
  rotateZ(180deg)`,

  `translateY(var(--cube-part-size))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(90deg)
  rotateY(-90deg)`,
  `translateX(var(--cube-part-size))
  translateY(var(--cube-part-size))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(90deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateY(var(--cube-part-size))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(90deg)
  rotateY(90deg)`,
  `translateY(var(--cube-part-size))
  rotateZ(-90deg)`,
  `translateX(var(--cube-part-size))
  translateY(var(--cube-part-size))`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateY(var(--cube-part-size))
  rotateZ(90deg)`,
  `translateY(var(--cube-part-size))
  translateZ(var(--cube-part-size))
  rotateZ(-90deg)`,
  `translateX(var(--cube-part-size))
  translateY(var(--cube-part-size))
  translateZ(var(--cube-part-size))
  rotateX(-90deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateY(var(--cube-part-size))
  translateZ(var(--cube-part-size))
  rotateZ(90deg)`,

  `translateZ(calc(var(--cube-part-size) * -1))
  rotateX(90deg)`,
  `translateX(var(--cube-part-size))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(90deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateZ(calc(var(--cube-part-size) * -1))
  rotateX(90deg)
  rotateY(90deg)`,
  `rotateX(90deg)
  rotateZ(-90deg)`,
  `translateX(var(--cube-part-size))`,
  `translateX(calc(var(--cube-part-size) * 2))
  rotateX(90deg)
  rotateZ(90deg)`,
  `translateZ(var(--cube-part-size))
  rotateX(90deg)
  rotateZ(-90deg)`,
  `translateX(var(--cube-part-size))
  translateZ(var(--cube-part-size))
  rotateX(90deg)
  rotateZ(180deg)`,
  `translateX(calc(var(--cube-part-size) * 2))
  translateZ(var(--cube-part-size))
  rotateZ(90deg)`,
]


function control(){
  setDefaultTransformers();
}

// setDefaultTransformers()
function setDefaultTransformers() {
  for(let i = 0; i < 27; i++){
    allCubeParts[i].style.transform = allTransformers[i]
  }
}


/* MOVES =========================*/
function changeTransform(element, value) {
  element.style.transform = value;
}

function moveR() {
  changeTransform(cubePart07, allTransformers[24]);
  changeTransform(cubePart08, allTransformers[15]);
  changeTransform(cubePart09, allTransformers[6]);
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


