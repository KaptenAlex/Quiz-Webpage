document.addEventListener("DOMContentLoaded", () => {
  /*
    https://demo1976140.mockable.io/
  */
  class Quiz {
    constructor() {
      this.userName = "";
      this.noOfQuestions = 0;
      this.noOfRightAnswers = 0;
      this.noOfWrongAnswers = 0;
    }
    loadQuiz(selectedQuestions) {
      let createQuizDivElement = document.getElementById("createQuiz");
      createQuizDivElement.insertAdjacentHTML("afterend", "<div class='centerDiv'><div id='quizForm' class='shapeForm'></div></div>");
      let quizFormElement = document.getElementById("quizForm");
      //let question = new Question();
      for (var i = 1; i <= selectedQuestions; i++) {
        quizFormElement.insertAdjacentHTML("beforeend", "<div class='centerDiv'><span id='questionSpan'>" + "hej" + i + "</span><br></div>");
        //let questionSpan = document.getElementById("questionSpan");
        //for (var i = 0; i < Object.keys(json.); i++) {
        //  questionSpan.insertAdjacentHTML("afterend", "<input type='radio' id='choice" + i + "'><label for='choice" + i + "'>" + );
        //}
      }
      //insert radio/checkboxes after or at the same time as question span
    }
  }
  class Question {
    constructor() {
      this.questionCategory = ""; //Should be a string
      this.question = "asdasd"; //Should be a string
      this.questionAnswers = []; //Should be an array
      this.isQuestionRightOrWrong = []; //Should be array with bool values
    }
  }
  const json = getJSON("http://demo3824117.mockable.io/");
  let quiz = new Quiz();
  console.log(json);
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  //const questionArray = ["Vem är djungelns konung?", "Vem är Zlatan", "Vad heter Elon Musks huvudföretag", "Vad är javascript?", "vad är ett objekt?"];

  select_question = document.getElementById("select_question");
  for (var questionValue = 1; questionValue < Object.keys(json).length + 1; questionValue++) {
    select_question.insertAdjacentHTML("beforeend", "<option>" + questionValue + "</option>");
  }

  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    quiz.userName = document.getElementById("userNameInput").value;
    selectValue = Number(document.getElementById("select_question").value);
    quiz.loadQuiz(selectValue);
    let questionDiv = document.getElementById("questionsDiv");
    questionDiv.parentNode.removeChild(questionDiv);
  });
});
