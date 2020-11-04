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
let bubbleText;


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
  /* if(characterBubbleText.className.includes("character-text-hide")) {
      characterBubbleText.classList.remove("character-text-hide");  
  } else {
      characterBubbleText.classList.add("character-text-hide");
  }
  previousText = characterBubbleText; */
}

function hidePreviousText(previousText) {
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
    bubbleText = document.getElementById("character-text");

    darkGreyButton.addEventListener("click", function () {
        displayBox(darkGreyBox);
        /* hidePreviousText();
        setCharacterText(darkGreyText); */
        bubbleText.className = "bubble-text dark-grey-text";
        bubbleText.innerHTML = "Tout a commencé par la guerre.Savais-tu que le concept de drone est né pendant  la Première Guerre mondiale avec des prototypes d’avions sans pilote radio-commandés. Sans  succès sur le terrain."
    });
    
    orangeButton.addEventListener("click", function () {
        displayBox(orangeBox);
        /* hidePreviousText();
        setCharacterText(orangeText); */
        bubbleText.className = "bubble-text orange-text";
        bubbleText.innerHTML = "Et c’est ainsi que mon premier ancêtre français a été conçu,réalisé et expérimenté en 1923 par l’ingénieur Maurice Percheron et le capitaine Max Boucher. Malheureusement, l’armée française ne fut pas convaincue par le potentiel de mon ancêtre."
    });

    redButton.addEventListener("click", function () {
        displayBox(redBox);
        /* hidePreviousText();
        setCharacterText(redText); */
        bubbleText.className = "bubble-text red-text";
        bubbleText.innerHTML = "EL’avènement de la guerre mécanisée en 1938 sema un chaos jusque-là parfaitement inconnu. L’armée allemande exploita la puissance cachée de mes ancêtres pour expérimenter des bombes planantes"
    });

    blueButton.addEventListener("click", function () {
        displayBox(blueBox);
        /* hidePreviousText();
        setCharacterText(blueText); */
        bubbleText.className = "bubble-text blue-text";
        bubbleText.innerHTML = "La guerre froide accéléra grandement les recherches sur les drones. Désormais, ils pouvaient servir comme outil stratégique de surveillance militaire chez l’ennemi. Comme pendant les guerres de Corée et du Viêt Nam."
    });

    yellowButton.addEventListener("click", function () {
        displayBox(yellowBox);
        /* setCharacterText(yellowText); */
        bubbleText.className = "bubble-text yellow-text";
        bubbleText.innerHTML = "En juin 2014, nous quittons enfin notre rôle d’armes et montrons nos compétences dans d’autres domaines. C’est ainsi que les États-Unis autorisent le premier vol d'un drone à usage commercial."
    });

    lightGreyButton.addEventListener("click", function () {
        displayBox(lightGreyBox);
      /*   hidePreviousText();
        setCharacterText(lightGreyText); */
        bubbleText.className = "bubble-text light-grey-text";
        bubbleText.innerHTML = "Depuis 2012, le marché du drone est actuellement en pleine expansion. Par ailleurs, l'université d'Eindhoven a annoncé avoir développé un drone domestique capable d'apporter des boissons aux terrasses de cafés. Pratique non ?"
    });
};


