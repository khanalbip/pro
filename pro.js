var t1 = gsap.timeline();

  t1.from(".line h1", {
    y: 150,

    delay: 0.2,

    stagger: 0.4,
  });
  gsap.from("#line1-count", {
    opacity: 0,
    delay: 0.3,
    onStart: function () {
      var h5timer = document.querySelector("#line1-count h5");
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h5timer.textContent = grow++;
          return;
        } else {
          h5timer.textContent = grow;
          return;
        }
      }, 50);
    },
  });
  t1.to(".line span", {
    animationName: "anime",
    opacity: 1,
  });
  t1.to("#loader", {
    y: -1600,
    opacity: 0,
    delay: 4,
    duration: 2,
    stagger: 5,
  });
  t1.from("#page1", {
    y: 1200,
    opacity: -3,
    delay: -0.5,
    stagger: 5,
    ease: Power4,
  });

  t1.to("#loader", {
    delay: 0,
    display: "none",
  });
  t1.from("#nav", {
    delay: -1,

    opacity: 0,
  });
  t1.from(".page1-text h1", {
    y: 150,

    delay: -0.6,

    stagger: 0.2,
  });



  // navbar
  const navLinks = document.querySelectorAll('.nav-link');

  gsap.to(navLinks, {
    duration: 1,
    stagger: 0.2, // Add a delay between each animation
    opacity: 1,
    y: 0, // Animate from bottom to top
    ease: "power3.inOut"
  });

  gsap.from(".h1",{
    x:-1200,
    delay:6.5,
    duration:2,

  })
  gsap.from(".h2",{
    x:1500,
    delay:6.5,
    duration:2,
  })

  // video

  Shery.imageMasker("video" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "PLAY",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    debug: true
    
  });

  var myvideo = document.getElementById("video");
  function playpause() {
  if(myvideo.paused){
  myvideo.play();
  }
  else {
  myvideo.pause();
  }
  }

  Shery.imageEffect(".a", {
    
  style: 6,
 
});

Shery.imageEffect(".back", {style: 5, 
  config:{"a":{"value":2,
  "range":[0,30]},
  "b":{"value":0.75,
  "range":[-1,1]},
  "zindex":{"value":-9996999,"range":[-9999999,9999999]},
  "aspect":{"value":2.2224052718286655},
  "ignoreShapeAspect":{"value":true},
  "shapePosition":{"value":{"x":0,"y":0}},
  "shapeScale":{"value":{"x":0.5,"y":0.5}},
  "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
  "shapeRadius":{"value":0,"range":[0,2]},
  "currentScroll":{"value":0},
  "scrollLerp":{"value":0.07},
  "gooey":{"value":true},
  "infiniteGooey":{"value":true},
  "growSize":{"value":4,"range":[1,15]},
  "durationOut":{"value":1,"range":[0.1,5]},
  "durationIn":{"value":1.04,"range":[0.1,5]},
  "displaceAmount":{"value":0.5},
  "masker":{"value":false},
  "maskVal":{"value":1.06,
  "range":[1,5]},
  "scrollType":{"value":0},
  "geoVertex":{"range":[1,64],
  "value":1},
  "noEffectGooey":{"value":false},
  "onMouse":{"value":1},
  "noise_speed":{"value":0.2,
  "range":[0,10]},
  "metaball":{"value":0.2,"range":[0,2],
  "_gsap":{"id":5}},
  "discard_threshold":{"value":0.77,
  "range":[0,1]},
  "antialias_threshold":{"value":0,"range":[0,0.1]},
  "noise_height":{"value":0.53,"range":[0,2]},
  "noise_scale":{"value":10,"range":[0,100]}} ,
   gooey:true})

   
   
function page4Animation() {
  var elemC = document.querySelector("#elem-container")
  var fixed = document.querySelector("#fixed-image")
  elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block"
  })
  elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none"
  })

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image")
          fixed.style.backgroundImage = `url(${image})`
      })
  })
}
page4Animation()

Shery.mouseFollower("body" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  
});