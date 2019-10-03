document.addEventListener("DOMContentLoaded", () => {
  /*
    https://demo1976140.mockable.io/
  */
  const json = getJSON("http://demo3824117.mockable.io/");
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
      let questionClass = new Question();
      //console.log(Object.keys(json));
      for (var eachDiv = 1; eachDiv <= selectedQuestions; eachDiv++) {
        let jsonProperty = questionClass.currentQuestion(eachDiv);
        //let newPropPerLoop = json["question" + eachDiv];
        //console.log(newPropPerLoop);

        let breakRow = document.createElement("br");

        let divForQuestion = document.createElement("div");
        divForQuestion.id = "question" + eachDiv;
        quizFormElement.appendChild(divForQuestion);

        let labelForCategory = document.createElement("label");
        labelForCategory.appendChild(document.createTextNode("Category: " + jsonProperty.category));
        divForQuestion.appendChild(labelForCategory);
        labelForCategory.insertAdjacentHTML("afterend", "<br>");

        let labelForQuestion = document.createElement("label");
        labelForQuestion.appendChild(document.createTextNode("Question: " + jsonProperty.question)); // + json.question1.question));
        divForQuestion.appendChild(labelForQuestion);
        labelForQuestion.insertAdjacentHTML("afterend", "<br>");

        for (let choice of jsonProperty.choices) {
          let checkboxForChoices = document.createElement("input");
          checkboxForChoices.type = "checkbox";
          checkboxForChoices.id = choice;
          divForQuestion.appendChild(checkboxForChoices);

          let labelForChoices = document.createElement("label");
          labelForChoices.htmlFor = choice;
          labelForChoices.appendChild(document.createTextNode(choice));
          divForQuestion.appendChild(labelForChoices);
          labelForChoices.insertAdjacentHTML("afterend", "<br>");
        }
      }
    }
  }
  class Question {
    constructor() {
      this.questionCategory = ""; //Should be a string
      this.question = "test"; //Should be a string
      this.questionAnswers = []; //Should be an array
      this.isQuestionRightOrWrong = []; //Should be array with bool values
    }
    currentQuestion(value) {
      let newPropPerLoop = json["question" + value];
      return newPropPerLoop;
    }

  }
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
