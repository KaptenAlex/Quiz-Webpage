document.addEventListener("DOMContentLoaded", () => {
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  const quizArray = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6"];
  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    createQuizDivElement.insertAdjacentHTML("afterend", "<div class='centerDiv'><div id='quizForm' class='shapeForm'><p>this is the form</p></div></div>");
    let questionDiv = document.getElementById("questionsDiv");
    questionDiv.parentNode.removeChild(questionDiv);
    let quizFormElement = document.getElementById("quizForm");
    for (var quizQuestionIndex = 0; quizQuestionIndex < quizArray.length; quizQuestionIndex++) {
      quizFormElement.insertAdjacentHTML("beforeend", "<div class='centerDiv'><span>" + quizArray[quizQuestionIndex] + "</span></div>");
    }
  });
});
