



  var alternateSteps = anime({
    targets:'.demo-wrapper',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'steps(5)',
    autoplay: false,
  })
  // document.querySelector('.circle').onclick = alternateSteps.play;
  // document.querySelector('.circle').onclick = alternateSteps.pause;



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


  //Creating Lights
  var lightBulb;
  function createLights() {
    lightBulb = document.createElement('div');
    lightBulb.className = "container__lightbulb";
  }

  var lightsContainer = document.getElementsByClassName("container--lightbulbs")[0];
  function appendLights() {
    for (var i=0; i<100; i++) {
      createLights();
      lightsContainer.append(lightBulb);
    }
  }
  appendLights();


  //Creating buttons
  var colorSection = document.getElementsByClassName("container--colors")[0];
  var motionSection = document.getElementsByClassName(" container--motions")[0];

  function changeLightColors([...colors]) {
    var lightBulbs = Array.from(document.getElementsByClassName("lightBulb"));
    console.log("colors",colors)

    for (var i = 0; i < lightBulbs.length; i++) {
      lightBulbs[i].style.borderTopColor = colors[i % colors.length];
    }

   
  }


  function createColorBtns() {
    colorSchemes = [["Halloween", "orange", "black"], ["Christmas", "red", "green"], ["Valentines", "pink", "red"], ["St. Patricks Day", "#099441", "#60A830"]];
    console.log(colorSection);
    colorSchemes.forEach(item=> {
      console.log(item[0]);

      var colorSchemeBtn = document.createElement('button');
      colorSchemeBtn.innerText = item[0];
      colorSchemeBtn.className = "button button-color";

      colorSchemeBtn.addEventListener('click', function() {
        var itemInstance;
        //Use the spread operator to copy the array
        itemInstance =  [...item];

        //Removes the theme name and only passes the colors
        itemInstance.shift();
        

        changeLightColors(itemInstance);
      });

      colorSection.append(colorSchemeBtn);
    })
  }
  createColorBtns();



  function createMotionBtns() {
    colorSchemes = [["Halloween", "orange", "black"], ["Christmas", "red", "green"], ["Valentines", "pink", "red"], ["St. Patricks Day", "#099441", "#60A830"]];
    console.log(colorSection);
    colorSchemes.forEach(item=> {
      console.log(item[0]);

      var colorSchemeBtn = document.createElement('button');
      colorSchemeBtn.innerText = item[0];
      colorSchemeBtn.className = "button button-motion";

      colorSchemeBtn.addEventListener('click', function() {
        var itemInstance;
        //Use the spread operator to copy the array
        itemInstance =  [...item];

        //Removes the theme name and only passes the colors
        itemInstance.shift();
        

        changeLightColors(itemInstance);
      });

      motionSection.append(colorSchemeBtn);
    })
  }
  createMotionBtns();