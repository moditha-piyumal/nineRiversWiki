// This is the javascript for walladia's section where things move in.

var tween = gsap.to(".red", {
   duration: 4, 
   x: 750, 
   rotation: 360, 
   ease: "none", 
   paused: true
 });

//  gsap.to(".red", {rotation: 27, x: 100, duration: 1});

//  document.querySelector("#joonist").onclick = () => tween.play();
 document.querySelector(".joonist").onclick = () => tween.restart();


//  function funcJoonist() {

//    document.querySelector("#play").onclick = () => tween.play();

//    document.querySelector("#restart").onclick = () => tween.restart();
//  }


//  document.querySelector("#restart").onclick = () => tween.restart();