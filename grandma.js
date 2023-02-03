let randomYear = Math.floor(Math.random() * (1969 - 1922) + 1922); //generates a random year

const grandmaChat = function () {
  let userText = document.getElementById("userText").value; //get users entered text
  if (userText === userText.toUpperCase()) {
    document.getElementById("grandmaText").value = `NOT SINCE ${randomYear}!`;
  } else {
    document.getElementById("grandmaText").value = "WHATS THAT DEARY!?";
  }
};
