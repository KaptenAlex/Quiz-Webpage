document.addEventListener("DOMContentLoaded", () => {
  /*
    https://demo1976140.mockable.io/
  */
  class Quiz {
    constructor() {
      this.userName = "";
      this.noOfQuestions = Object.keys(json).length;
      this.noOfRightAnswers = 0;
      this.noOfWrongAnswers = 0;
    }
  }
  class Question {
    constructor() {
      this.questionCategory = ""; //Should be a string
      this.question = ""; //Should be a string
      this.questionAnswers = []; //Should be an array
      this.isQuestionRightOrWrong = []; //Should be array with bool values
    }
  }
  const json = getJSON("http://demo3824117.mockable.io/");
  console.log(json);
  let quiz = new Quiz();
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  //const questionArray = ["Vem är djungelns konung?", "Vem är Zlatan", "Vad heter Elon Musks huvudföretag", "Vad är javascript?", "vad är ett objekt?"];

  select_question = document.getElementById("select_question");
  for (var questionValue = 1; questionValue < quiz.noOfQuestions + 1; questionValue++) {
    select_question.insertAdjacentHTML("beforeend", "<option>" + questionValue + "</option>");
  }

  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    quiz.userName = document.getElementById("userNameInput").value;
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
