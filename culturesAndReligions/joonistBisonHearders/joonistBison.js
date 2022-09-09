function ballBig() {
   var ball = document.getElementById("x");
   var btn = document.querySelector(".btn");

   ball.classList.toggle("animX");

   if (btn.innerHTML === "Animate") {
      btn.innerHTML = "Unanimate";
   } else {
      btn.innerHTML = "Animate";
   }
};