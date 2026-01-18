Shery.imageEffect(".back", {style: 5, config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.82,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.200231513266537},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.03,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.150916,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.63,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":17.56,"range":[0,100]}}, gooey: true})

var elems = document.querySelectorAll(".elem");

var indices = Array.from(elems).map(_ => 0);
var animating = false;

document.querySelector(".main").addEventListener("click", function () {
  if (animating) return;
  animating = true;

  elems.forEach((elem, i) => {
    var h1s = elem.querySelectorAll("h1");
    var index = indices[i];

    // Animate current h1 out
    gsap.to(h1s[index], {
      top: "-=100%",
      ease: "expo.inOut",
      duration: 1,
      onComplete: function () {
        gsap.set(h1s[index], { top: "100%" });
        animating = false;
      },
    });

    // Update index
    indices[i] = index === h1s.length - 1 ? 0 : index + 1;

    // Animate next h1 in
    gsap.to(h1s[indices[i]], {
      top: "-=100%",
      ease: "expo.inOut",
      duration: 1,
    });
  });
});

var elems = document.querySelectorAll(".elem");

var indices = Array.from(elems).map(_ => 0);
var animating = false;

document.querySelector(".main").addEventListener("click", function () {
  if (animating) return;
  animating = true;

  elems.forEach((elem, i) => {
    var h1s = elem.querySelectorAll("h1");
    var index = indices[i];

    // Animate current h1 out
    gsap.to(h1s[index], {
      top: "-=100%",
      ease: "expo.inOut",
      duration: 1,
      onComplete: function () {
        gsap.set(h1s[index], { top: "100%" });
        animating = false;
      },
    });

    // Update index
    indices[i] = index === h1s.length - 1 ? 0 : index + 1;

    // Animate next h1 in
    gsap.to(h1s[indices[i]], {
      top: "-=100%",
      ease: "expo.inOut",
      duration: 1,
    });
  });
});