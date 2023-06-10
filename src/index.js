
import ColorSchemeCollection from './colorSchemeCollection.js';

const colorSchemesCollection = new ColorSchemeCollection();
console.log('sd',colorSchemesCollection);


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
    var lightsContainer = document.getElementsByClassName("container--lightbulbs")[0];
    for (var i=0; i<100; i++) {
      createLightbulbs();
      lightsContainer.append(lightBulb);
    }
  }
  appendLightbulbs();



//==============================================CONTROL PANEL BTNS SECTION=============================================//
//=====================================================================================================================//

  //Adding event listeners for color buttons
  function changeLightColors([...colors]) {
    var lightBulbs = Array.from(document.getElementsByClassName("container__lightbulb"));
    for (var i = 0; i < lightBulbs.length; i++) {
      lightBulbs[i].style.borderTopColor = colors[i % colors.length];
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



  var colorSchemes = [["Halloween", "orange", "black"], ["Christmas", "red", "green"], ["Valentines", "pink", "red"], ["St. Patricks Day", "#099441", "#60A830"]];
  colorSchemes.forEach(scheme=> {
    var colorSection = document.getElementsByClassName("container--colors")[0];
    const button = createColorBtns(scheme, colorChangeEvent);
    colorSection.append(button);
  })




  var motionSection = document.getElementsByClassName("container--motions")[0];


