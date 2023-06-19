



//===================================================LIGHTBULB SECTION================================================//
//====================================================================================================================//

//Creating lightbulbs
  var lightBulb;
  function createLightbulbs() {
    lightBulb = document.createElement('div');
    lightBulb.className = "container__lightbulb";
  }


  //Appends the lightbulbs dynamically
  function appendLightbulbs() {
    var lightsContainerTop = document.getElementsByClassName("container--lightbulbs")[0];
    var lightsContainerBottom = document.getElementsByClassName("container--lightbulbs")[1];
    var lightSidebarLeft = document.getElementsByClassName("container__sidebar")[0];
    var lightSidebarRight = document.getElementsByClassName("container__sidebar")[1];

    for (var i=0; i<6; i++) {
      createLightbulbs();
      lightsContainerTop.append(lightBulb);
    }

    for (var i=0; i<6; i++) {
      createLightbulbs();
      lightsContainerBottom.append(lightBulb);
    }

    for (var i=0; i<4; i++) {
      createLightbulbs();
      lightSidebarLeft.append(lightBulb);
    }

    for (var i=0; i<4; i++) {
      createLightbulbs();
      lightSidebarRight.append(lightBulb);
    }
  }
  appendLightbulbs();



//==============================================CONTROL PANEL BTNS SECTION=============================================//
//=====================================================================================================================//



function changeBackgroundColor(className, element, color) {
  var buttons = document.getElementsByClassName(className);
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button === element) {
      button.style.backgroundColor = color;
    } else {
      button.style.backgroundColor = "black"; // Reset to default
    }
  }
}

//====================================================COLOR SCHEME CHANGES=============================================//

  //Adding event listeners for color buttons
  function changeLightColors([...colors]) {
    var clickedButton = event.target;
    var isRed = clickedButton.style.backgroundColor === "red";
  
    // Check if the clicked button is already red
    if (isRed) {
      changeBackgroundColor("button-color", clickedButton, "black");
      resetLightBulbColors();
      return; // Exit the function
    }
  
    changeBackgroundColor("button-color", clickedButton, "red");
  
    var lightBulbs = Array.from(document.getElementsByClassName("container__lightbulb"));
    for (var i = 0; i < lightBulbs.length; i++) {
      lightBulbs[i].style.borderTopColor = colors[i % colors.length];
    }
  }
  
  function resetLightBulbColors() {
    var lightBulbs = document.getElementsByClassName("container__lightbulb");
    for (var i = 0; i < lightBulbs.length; i++) {
      lightBulbs[i].style.borderTopColor = "black"; // Reset to default
    }
  }
  

  //Creating buttons for control panel
  function createColorBtns(array, onClick) {
    const button = document.createElement('button');
    button.innerText = array[0];
    button.className = "button button-color";
    button.value = array;
    button.addEventListener('click', onClick);
    return button;
  }



  const colorChangeEvent = () => {
    var array = event.target.value;
    var newArray = array.split(",")
    //Use the spread operator to copy the array
    var itemInstance = [...newArray];
    itemInstance.shift();
    changeLightColors(itemInstance);
  };



  var colorSchemes = [
    ["Halloween", "orange", "black"],
    ["Christmas", "red", "green"],
    ["Valentines", "pink", "red"],
    ["St. Patricks Day", "#099441", "#60A830"]
  ];

  colorSchemes.forEach(scheme=> {
    var colorSection = document.getElementsByClassName("container--colors")[0];
    const button = createColorBtns(scheme, colorChangeEvent);
    colorSection.append(button);
  })




  //====================================================MOTION CHANGES=============================================//


  var alternateSteps = anime({
    targets:'.demo-wrapper',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'steps(5)',
    // autoplay: false,
  })
  // document.querySelector('.circle').onclick = alternateSteps.play;
  // document.querySelector('.circle').onclick = alternateSteps.pause;




  //Circular Motion

 var circularMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
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

  //Square Motion
  var squareMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
    keyframes: [
      {translateY: 0},
      {translateX: 10},
      {translateY: 10},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  })

  var spiralMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
    rotate: '1turn',
    duration: 3000,
    easing: 'linear',
    loop: true
  });

  var bounceMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
    translateY: [
      { value: -30, duration: 500, easing: 'easeOutCubic' },
      { value: 0, duration: 800, easing: 'easeInCubic' }
    ],
    loop: true
  });
  

  var rotateMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
    rotate: '1turn',
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true
  });

  var blinkMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
    opacity: [1, 0],
    duration: 500,
    easing: 'linear',
    direction: 'alternate',
    loop: true
  });

  var shakeMotion = anime({
    targets: '.container__lightbulb',
    autoplay: false,
    translateX: ['-5px', '5px', '-5px'],
    duration: 300,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });

  var currentMotion = null;

 //Adding event listeners for motion buttons
 function changeLightMotions(motion) {
  var clickedButton = event.target;
  var isRed = clickedButton.style.backgroundColor === "red";

  // Check if the clicked button is already red
  if (isRed) {
    changeBackgroundColor("button-motion", clickedButton, "black");
    stopMotion(currentMotion);
    currentMotion = null;
    return; // Exit the function
  }

  changeBackgroundColor("button-motion", clickedButton, "red");

  if (currentMotion) {
    stopMotion(currentMotion);
  }

  motion.play();
  currentMotion = motion;
}


function stopMotion(motion) {
  motion.pause();
  motion.seek(0);
}


  function createMotionBtns(scheme, onClick) {
    const button = document.createElement('button');
    button.innerText = scheme[0];
    button.className = "button button-motion";
    button.value = scheme;
    button.addEventListener('click', () => onClick(scheme[1]));
    return button;
  }




  
  var motions = [["Circular Motion", circularMotion], ["Square Motion", squareMotion], ["Spiral Motion", spiralMotion], ["Bounce Motion", bounceMotion], [
    "Rotate Motion", rotateMotion], ["Blink Motion", blinkMotion], ["Shake Motion", shakeMotion]]
  motions.forEach(scheme => {
    var motionSection = document.getElementsByClassName("container--motions")[0];
    const button = createMotionBtns(scheme, changeLightMotions);
    motionSection.append(button);
  })