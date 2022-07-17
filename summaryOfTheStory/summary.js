gsap.from("#a", {rotation: 1800, x: 2100, duration: 5, ease: "bounce"});
gsap.from("#b", {rotation: 3600, x: 2000, duration: 6, ease: "bounce"});
gsap.from("#c", {rotation: 3600, x: 2000, duration: 8, ease: "bounce"});
gsap.from("#d", {rotation: 3600, x: 2000, duration: 7, ease: "bounce"});
gsap.from("#e", {rotation: 1800, x: 2200, duration: 9, ease: "bounce"});


gsap.from("#f", {rotation: 3600, x: -2100, duration: 5, ease: "bounce"});
gsap.from("#g", {rotation: 3600, x: -2300, duration: 9, ease: "bounce"});
gsap.from("#h", {rotation: 1800, x: -2000, duration: 8, ease: "bounce"});
gsap.from("#i", {rotation: 3600, x: -2000, duration: 7, ease: "bounce"});
gsap.from("#j", {rotation: 1800, x: -2200, duration: 6, ease: "bounce"});

gsap.from("#k", {x: 1000, duration: 10});
gsap.to("#k", {x: -2000, duration: 6, delay: 10});

gsap.from("#l", {x: 1000, duration: 5});
gsap.to("#l", {x: -2000, duration: 8, delay: 5});

gsap.from("#m", {x: 1000, duration: 9});
gsap.to("#m", {x: -2000, duration: 3, delay: 9});


gsap.from("#n", {x: -1000, duration: 7});
gsap.to("#n", {x: 2000, duration: 6, delay: 7});

gsap.from("#o", {x: -1000, duration: 8});
gsap.to("#o", {x: 2000, duration: 4, delay: 8});


gsap.from("#p", {x: -1000, duration: 9});
gsap.to("#p", {x: 2000, duration: 3, delay: 9});

gsap.fromTo("#q", {x: 500}, {x: -1800, duration: 10});

gsap.fromTo("#r", {x: 700}, {x: -2000, duration: 10});

gsap.fromTo("#s", {x: 500}, {x: -2100, duration: 8});

gsap.fromTo("#t", {x: -400}, {x: 2000, duration: 7});

gsap.fromTo("#u", {x: -600}, {x: 1800, duration: 10});

gsap.fromTo("#v", {x: -700}, {x: 2000, duration: 10});


gsap.fromTo("#title", {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 10, ease: "elastic"});




