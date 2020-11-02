let darkGreyButton;
let darkGreyBox;
let orangeButton;
let orangeBox;
let redButton;
let redBox;
let blueButton;
let blueBox;
let yellowButton;
let yellowBox;
let lightGreyButton;
let lightGreyBox;
let darkGreyText;
let orangeText;
let redText;
let blueText;
let yellowText;
let lightGreyText;
let previousText;

function displayBox(boxColor) {
  if (!boxColor) return; // !boxColor => si pas de boxColor = renvoie true et on ne fait rien
    if(boxColor.className.includes("hide-box")) {

        boxColor.classList.remove("hide-box");
       
    } else {

        boxColor.classList.add("hide-box");
    }
};

function setCharacterText(characterBubbleText) {
  if (!characterBubbleText) return; // !characterBubbleText => si pas de characterBubbleText = renvoie rien et met fin à la fonction et on ne fait rien
 /*  hidePreviousText(); */
  if(characterBubbleText.className.includes("character-text-hide")) {
      characterBubbleText.classList.remove("character-text-hide");  
  } else {
      characterBubbleText.classList.add("character-text-hide");
  }
  previousText = characterBubbleText;
}

function hidePreviousText() {
  if (!previousText) return; // je vérifie si c'est différent de undefined
  if(!previousText.className.includes("character-text-hide")) {
      previousText.classList.add("character-hide-text");
  }
}

window.onload = function() { 
    darkGreyBox = document.getElementById("dark-grey-box");
    darkGreyButton = document.getElementById("dark-grey-button");
    orangeButton = document.getElementById("orange-button");
    orangeBox = document.getElementById("orange-box");
    redButton = document.getElementById("red-button");
    redBox = document.getElementById("red-box");
    blueButton = document.getElementById("blue-button");
    blueBox = document.getElementById("blue-box");
    yellowButton = document.getElementById("yellow-button");
    yellowBox = document.getElementById("yellow-box");
    lightGreyButton = document.getElementById("light-grey-button");
    lightGreyBox = document.getElementById("light-grey-box");
    darkGreyText = document.getElementById("dark-grey-text");
    orangeText = document.getElementById("orange-text");
    redText = document.getElementById("red-text")
    blueText = document.getElementById("blue-text");
    yellowText = document.getElementById("yellow-text");
    lightGreyText = document.getElementById("light-grey-text");

    darkGreyButton.addEventListener("click", function () {
        displayBox(darkGreyBox);
        hidePreviousText();
        setCharacterText(darkGreyText);
    });
    
    orangeButton.addEventListener("click", function () {
        displayBox(orangeBox);
        hidePreviousText();
        setCharacterText(orangeText);
    });

    redButton.addEventListener("click", function () {
        displayBox(redBox);
        hidePreviousText();
        setCharacterText(redText);
    });

    blueButton.addEventListener("click", function () {
        displayBox(blueBox);
        hidePreviousText();
        setCharacterText(blueText);
    });

    yellowButton.addEventListener("click", function () {
        displayBox(yellowBox);
        setCharacterText(yellowText);
    });

    lightGreyButton.addEventListener("click", function () {
        displayBox(lightGreyBox);
        hidePreviousText();
        setCharacterText(lightGreyText);
    });
};


