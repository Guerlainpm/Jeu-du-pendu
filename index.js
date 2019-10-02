var wordToFind;
var hiddenWord;
var erreursRestante = 10;

document.getElementById("chooseWord").addEventListener("click", function(event) {
  wordToFind = document.getElementById("inputValue").value.toUpperCase();
  hiddenWord = "_".repeat(wordToFind.length);
  event.preventDefault();
  document.getElementById("title").innerHTML = "A toi de trouver !";
  document.getElementsByTagName("form")[0].style.display = "none";
  document.getElementById("searchWord").style.display = "flex";
  document.getElementById("error").style.display = "block";
  document.getElementById("buttons").style.display = "flex";
  document.getElementById("searchWord").innerHTML = hiddenWord;
  document.getElementById("numberErrorLeft").innerHTML = 10;
  document.getElementById("reload").style.display = "block";
  buttonGenerator();
});

function buttonGenerator() {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  alphabet.forEach(letter => {
    var createButton = document.createElement("button");
    createButton.appendChild(document.createTextNode(letter));
    document.getElementById("buttons").appendChild(createButton);
    createButton.addEventListener("click", event => {
      checkAndReplace(event.target.innerText);
      // createButton.setAttribute(".rightLetter");
    })
  })
  // for (letter of alphabet) {
  //   var createButton = document.createElement("button");
  //   var t = document.createTextNode(letter);
  //   createButton.appendChild(t);
  //   document.getElementById("buttons").appendChild(createButton);
  // }

  // for (var i = 0; i < alphabet.length; i++) {
  //   var createButton = document.createElement("button");
  //   var t = document.createTextNode(alphabet[i]);
  //   createButton.appendChild(t);
  //   document.getElementById("buttons").appendChild(createButton);
  // }
}

function checkAndReplace(letter) {

  var splitHidden = hiddenWord.split("");

  if (wordToFind.includes(letter)) {
    for (var i = 0; i <= wordToFind.length; i++) {
      if (wordToFind[i] == letter) {
        splitHidden[i] = letter;
      }
    }
  }

  if (!splitHidden.includes("_")) {
    document.getElementById("searchWord").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("title").innerHTML = "Tu a trouver le mot " + '"' + wordToFind + '"' + " ." + "Bien jouer";
  }
  if (erreursRestante == 0) {
    document.getElementById("searchWord").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("title").innerHTML = "Tu n'as plus d'erreur autoriser. Tu as perdu !";
    document.getElementById("reload").style.display = "block";
    document.getElementById("result").innerHTML = "Le mot a trouver était : " + wordToFind;
  } else if (!wordToFind.includes(letter)) {
    erreursRestante--;
  }
  hiddenWord = splitHidden.join("");
  document.getElementById("searchWord").innerHTML = hiddenWord;
  document.getElementById("numberErrorLeft").innerHTML = erreursRestante;
}


function blockSpecialChar(e) {
  var k = e.keyCode;
  return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57) || k == 97);
}

//
