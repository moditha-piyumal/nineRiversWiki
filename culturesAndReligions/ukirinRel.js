var box = document.querySelector("#box");
var box1 = document.querySelector('#box1');


const fulltime = 6000;
const halftime = 3000;

anim()

function anim() {

   box.className = 'grow'

   box1.className = 'grow'

   setTimeout(() => {
      box.className = 'shrink'
   }, halftime)

   setTimeout(() => {
      box1.className = 'shrink'
   }, halftime)
}

setInterval(anim, 7000);

// The following boxes are anim ated in a different rhythem.

var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');

anim2()

function anim2() {

   box2.className = 'grow2'

   setTimeout(() => {
      box2.className = 'shrink2'
   }, 2000)
}

setInterval(anim2, 4500);

anim3()

function anim3() {

   box3.className = 'grow3'

   setTimeout(() => {
      box3.className = 'shrink3'
   }, 5000)
}

setInterval(anim3, 9500);