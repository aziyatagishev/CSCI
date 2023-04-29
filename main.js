function getResponse() {
    var researcherInput = document.querySelector('input[name="researcher"]:checked');
    var answerContainer = document.getElementById("answer");
  
    if (researcherInput) {
      var answer = researcherInput.value;
      var answerText = "";
  
      if (answer === "yes") {
        answerText = "Then I am what you need exactly!";
      } else if (answer === "no") {
        answerText = "Then I am, unfortunately, not what you are searching for :((";
      }
  
      answerContainer.textContent = answerText;
    } else {
      answerContainer.textContent = "Please, tell me if you need me or not";
    }
  }