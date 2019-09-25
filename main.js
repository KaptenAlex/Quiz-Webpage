document.addEventListener("DOMContentLoaded", () => {
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  const questionArray = ["Vem är djungelns konung?", "Vem är Zlatan", "Vad heter Elon Musks huvudföretag", "Vad är javascript?", "vad är ett objekt?"];
  select_question = document.getElementById("select_question");
  for (var questionValue = 1; questionValue < questionArray.length + 1; questionValue++) {
    select_question.insertAdjacentHTML("beforeend", "<option>" + questionValue + "</option>");
  }

  class Quiz {
    constructor() {
      this.userName = userNameValue; //Should be a string
      this.noOfQuestions = questionArray.length; //Should be an array length.
      this.noOfRightAnswers = 0; //Should be a number/array
      this.noOfWrongAnswers = 0; //Should be a number/array
    }
  }
  class Question {
    constructor() {
      this.questionCategory = ""; //Should be a string
      this.question = questionArray; //Should be a string
      this.questionAnswers = []; //Should be an array
      this.isQuestionRightOrWrong = true; //Should be bool
    }
  }
  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    userNameValue = document.getElementById("userNameInput").value;
    let quiz = new Quiz();
    let question = new Question();
    selectValue = document.getElementById("select_question").value;
    createQuizDivElement.insertAdjacentHTML("afterend", "<div class='centerDiv'><div id='quizForm' class='shapeForm'></div></div>");
    let questionDiv = document.getElementById("questionsDiv");
    questionDiv.parentNode.removeChild(questionDiv);
    let quizFormElement = document.getElementById("quizForm");
    for (var quizQuestionIndex = 0; quizQuestionIndex < selectValue; quizQuestionIndex++) {
      quizFormElement.insertAdjacentHTML("beforeend", "<div class='centerDiv'><span>" + question.question[quizQuestionIndex] + "</span></div>");
    }
  });
});
