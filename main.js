document.addEventListener("DOMContentLoaded", () => {
  class Quiz {
    constructor() {
      this.userName = userName; //Should be a string
      this.noOfQuestions = noOfQuestions; //Should be an array.
      this.noOfRightAnswers = noOfRightAnswers; //Should be a number/array
      this.noOfWrongAnswers = noOfWrongAnswers; //Should be a number/array
    }
  }
  class Question {
    constructor() {
      this.questionCategory = questionCategory; //Should be a string
      this.question = question; //Should be a string
      this.questionAnswers = questionAnswers; //Should be an array
      this.isQuestionRightOrWrong = isQuestionRightOrWrong; //Should be bool
    }
  }
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  const quizArray = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6"];
  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    selectValue = document.getElementById("select_question").value;
    createQuizDivElement.insertAdjacentHTML("afterend", "<div class='centerDiv'><div id='quizForm' class='shapeForm'><p>this is the form</p></div></div>");
    let questionDiv = document.getElementById("questionsDiv");
    questionDiv.parentNode.removeChild(questionDiv);
    let quizFormElement = document.getElementById("quizForm");
    for (var quizQuestionIndex = 0; quizQuestionIndex < selectValue; quizQuestionIndex++) {
      quizFormElement.insertAdjacentHTML("beforeend", "<div class='centerDiv'><span>" + quizArray[quizQuestionIndex] + "</span></div>");
    }
  });
});
