document.addEventListener("DOMContentLoaded", () => {
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  const quizArray = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6"];

  class Quiz {
    constructor() {
      this.userName = createQuizUserNameValue; //Should be a string
      this.noOfQuestions = quizArray.length; //Should be an array length.
      this.noOfRightAnswers = 0; //Should be a number/array
      this.noOfWrongAnswers = 0; //Should be a number/array
    }
  }
  class Question {
    constructor() {
      this.questionCategory = ""; //Should be a string
      this.question = ""; //Should be a string
      this.questionAnswers = []; //Should be an array
      this.isQuestionRightOrWrong = true; //Should be bool
    }
  }
  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    createQuizUserNameValue = document.getElementById("userNameInput").value;
    let quiz = new Quiz();
    console.log(quiz.userName + quiz.noOfQuestions);
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
