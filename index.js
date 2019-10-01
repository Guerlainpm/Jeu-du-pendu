document.getElementById("chooseWord").addEventListener("click", function(event) {
  var inputValue = document.getElementById("inputValue").value.toUpperCase();
  event.preventDefault();
  console.log(inputValue);
  document.getElementById("title").innerHTML = "A toi de trouver !";
  document.getElementsByTagName("form")[0].style.display = "none";
  document.getElementById("searchWord").style.display = "flex";
  document.getElementById("error").style.display = "block";
  document.getElementById("buttons").style.display = "flex";
  buttonGenerator();
});

function buttonGenerator() {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  alphabet.forEach(letter => {
    var createButton = document.createElement("button");
    createButton.appendChild(document.createTextNode(letter));
    document.getElementById("buttons").appendChild(createButton);
    createButton.addEventListener("click", event => {
      console.log(event.target.innerText);
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
