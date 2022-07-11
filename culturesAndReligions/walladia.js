// This is the javascript for walladia's section where things move in.

var tween = gsap.to(".joonistpara", {
   duration: 4, 
   x: 1750, 
   rotation: 0, 
   ease: "bounce", 
   paused: true
 });
//  Test


// Test
var tween2 = gsap.to(".ukirinpara", {
   duration: 4, 
   x: 1750, 
   rotation: 0, 
   ease: "bounce", 
   paused: true
 });


var tween3 = gsap.to(".lostpara", {
   duration: 4, 
   x: 1750, 
   rotation: 0, 
   ease: "bounce", 
   paused: true
 });


var tween4 = gsap.to(".reservoirpara", {
   duration: 4, 
   x: 1750, 
   rotation: 0, 
   ease: "bounce", 
   paused: true
 });

//  gsap.to(".red", {rotation: 27, x: 100, duration: 1});

//  document.querySelector("#joonist").onclick = () => tween.play();

// Here are the functions

function restartJ() {
  j = document.getElementsByClassName("joonistpara");
  u = document.getElementsByClassName("ukirinpara");
  l = document.getElementsByClassName("lostpara");
  r = document.getElementsByClassName("reservoirpara");

  j.className ="z10";
  u.className ="z5";
  l.className ="z4";
  r.className ="z3";
  document.querySelector(".joonist").onclick = () => tween.restart();
}


// Above are the functions
//  document.querySelector(".joonist").onclick = () => tween.restart();


 document.querySelector(".ukirin").onclick = () => tween2.restart();


 document.querySelector(".lost").onclick = () => tween3.restart();


 document.querySelector(".reservoir").onclick = () => tween4.restart();


//  function funcJoonist() {

//    document.querySelector("#play").onclick = () => tween.play();

//    document.querySelector("#restart").onclick = () => tween.restart();
//  }


//  document.querySelector("#restart").onclick = () => tween.restart();