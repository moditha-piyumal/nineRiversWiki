// This is the javascript for walladia's section where things move in.

var tween = gsap.to(".red", {
   duration: 4, 
   x: 750, 
   rotation: 360, 
   ease: "none", 
   paused: true
 });


var tween2 = gsap.to(".green", {
   duration: 4, 
   x: 750, 
   rotation: 360, 
   ease: "none", 
   paused: true
 });


var tween3 = gsap.to(".blue", {
   duration: 4, 
   x: 750, 
   rotation: 360, 
   ease: "none", 
   paused: true
 });


var tween4 = gsap.to(".purple", {
   duration: 4, 
   x: 750, 
   rotation: 360, 
   ease: "none", 
   paused: true
 });

//  gsap.to(".red", {rotation: 27, x: 100, duration: 1});

//  document.querySelector("#joonist").onclick = () => tween.play();
 document.querySelector(".joonist").onclick = () => tween.restart();


 document.querySelector(".ukirin").onclick = () => tween2.restart();


 document.querySelector(".lost").onclick = () => tween3.restart();


 document.querySelector(".reservoir").onclick = () => tween4.restart();


//  function funcJoonist() {

//    document.querySelector("#play").onclick = () => tween.play();

//    document.querySelector("#restart").onclick = () => tween.restart();
//  }


//  document.querySelector("#restart").onclick = () => tween.restart();