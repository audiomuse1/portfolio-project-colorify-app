


function paint(color) {
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
  }


  var alternateSteps = anime({
    targets:'.demo-wrapper',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'steps(5)',
    autoplay: false,
  })
  document.querySelector('.circle').onclick = alternateSteps.play;
  document.querySelector('.circle').onclick = alternateSteps.pause;



 anime({
    targets: '.animation-keyframes-demo',
    // autoplay: false,
    keyframes: [
      {translateY: -40},
      {translateX: 50},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  })


  var lightBulb;
  function createLights() {
    lightBulb = document.createElement('div');
    lightBulb.className = "lightBulb";
  }

  function appendLights() {
    var lightsContainer = document.getElementsByClassName("lightsContainer")[0];
    console.log(lightsContainer)

    for (var i=0; i<100; i++) {
      createLights();
      lightsContainer.append(lightBulb);
    }
    

  }

  appendLights();