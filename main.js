document.addEventListener("DOMContentLoaded", () => {
  //let json = getJSON("https://www.mocky.io/v2/5d91fb83310000e08410cc5d");
  //for (let question of json) {
  //  console.log(question);
  //}
  //  loadJSON("https://www.mocky.io/v2/5d91fb83310000e08410cc5d", function(response){
  //    var actual_JSON = JSON.parse(response);
  //    console.log(response);
  //    console.log(actual_JSON);
  //  });
  //MUST USE A CORS EXTENSION, OTHERWISE IT WILL BLOCK REQUEST.
  //loadJSON("https://www.mocky.io/v2/5d91fb83310000e08410cc5d", function(response){
  //
  //});
  //
  //https://www.mocky.io/v2/5d91fb83310000e08410cc5d
  /*
  loadJSON("https://demo1976140.mockable.io/", function(response){
    let acutal_JSON = JSON.parse(response);
    console.log(actual_JSON);
  });
  */
  let x = getJSON("https://demo1976140.mockable.io/");
  console.log(x);

  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  const questionArray = ["Vem är djungelns konung?", "Vem är Zlatan", "Vad heter Elon Musks huvudföretag", "Vad är javascript?", "vad är ett objekt?"];
  select_question = document.getElementById("select_question");
  for (var questionValue = 1; questionValue < questionArray.length + 1; questionValue++) {
    select_question.insertAdjacentHTML("beforeend", "<option>" + questionValue + "</option>");
  }

  class Quiz {
    constructor() {
      this.userName = userNameValue;
      this.noOfQuestions = questionArray.length; //Should be an array length.
      this.noOfRightAnswers = 0; //Should be a number
      this.noOfWrongAnswers = 0; //Should be a number
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
