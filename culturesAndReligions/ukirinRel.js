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