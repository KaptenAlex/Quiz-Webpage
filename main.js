document.addEventListener("DOMContentLoaded", () => {
  /*
    Link to current json object: http://demo3824117.mockable.io/
  */
  const json = getJSON("http://demo3824117.mockable.io/");
  class Quiz {
    constructor() {
      this.userName = "";
      this.noOfQuestions = 0;
      this.noOfRightAnswers = 0;
      this.noOfWrongAnswers = 0;
    }
    createElementsForQuiz(selectedQuestions) {
      this.noOfQuestions = selectedQuestions;
      let quizFormElement = document.getElementById("quizForm");
      let questionClass = new Question();
      for (var eachDiv = 1; eachDiv <= selectedQuestions; eachDiv++) {
        let jsonProperty = questionClass.currentQuestion(eachDiv);

        let breakRow = document.createElement("br");

        let divForQuestion = document.createElement("div");
        divForQuestion.id = "question" + eachDiv;
        quizFormElement.appendChild(divForQuestion);

        let labelForCategory = document.createElement("label");
        labelForCategory.appendChild(document.createTextNode("Category: " + questionClass.questionCategory));
        divForQuestion.appendChild(labelForCategory);
        labelForCategory.insertAdjacentHTML("afterend", "<br>");

        let labelForQuestion = document.createElement("label");
        labelForQuestion.appendChild(document.createTextNode("Question: " + questionClass.question));
        divForQuestion.appendChild(labelForQuestion);
        labelForQuestion.insertAdjacentHTML("afterend", "<br>");

        let counterForInputValues = 0;
        for (let choice of questionClass.questionAnswers) {
          let checkboxForChoices = document.createElement("input");
          checkboxForChoices.type = "checkbox";
          checkboxForChoices.id = choice;
          checkboxForChoices.value = questionClass.isQuestionRightOrWrong[counterForInputValues];
          divForQuestion.appendChild(checkboxForChoices);

          let labelForChoices = document.createElement("label");
          labelForChoices.htmlFor = choice;
          labelForChoices.appendChild(document.createTextNode(choice));
          divForQuestion.appendChild(labelForChoices);
          labelForChoices.insertAdjacentHTML("afterend", "<br>");
          counterForInputValues++;
        }
      }
    }
    createQuizForm() {
      let createQuizDivElement = document.getElementById("createQuiz");
      createQuizDivElement.insertAdjacentHTML("afterend", "<div class='centerDiv'><div id='quizForm' class='shapeForm'></div></div>");
      let questionDiv = document.getElementById("questionsDiv");
      questionDiv.parentNode.removeChild(questionDiv);
      this.createElementsForQuiz();
    }
    createCorrectQuizButton() {
      let quizFormElement = document.getElementById("quizForm");
      let submitButton = document.createElement("button");
      submitButton.id = "correctQuiz";
      submitButton.type = "button";
      submitButton.className = "btn btn-success floatRight";
      submitButton.innerHTML = "Correct quiz!";
      quizFormElement.appendChild(submitButton);
    }
    correctQuizQuestions(selectedValue){
      for (var currentDiv = 1; currentDiv < selectedValue + 1; currentDiv++) {
        let noOfChoicesNotChecked = 0;
        let currentDivElement = document.getElementById("question" + currentDiv);
        let inputChildrenOfCurrentDivElement = currentDivElement.getElementsByTagName('input');
        for (let checkbox of inputChildrenOfCurrentDivElement) {
          if (checkbox.checked && checkbox.value == "true") {
            quiz.noOfRightAnswers++;
          } else if (checkbox.checked && checkbox.value == "false") {
            quiz.noOfWrongAnswers++;
          } else {
            noOfChoicesNotChecked++;
            if (noOfChoicesNotChecked >= 3) {
              quiz.noOfWrongAnswers++;
            }
          }
        }
      }
    }
    printOutResults() {
      let createNoOfQuestions = document.createElement("h2");
      createNoOfQuestions.innerHTML = "Number of questions: " + quiz.noOfQuestions;
      createNoOfQuestions.className = "total-questions";
      let createNoOfRightAnswers = document.createElement("h2");
      createNoOfRightAnswers.innerHTML = "Number of right answers: " + quiz.noOfRightAnswers;
      createNoOfRightAnswers.className = "right-answers";
      let createNoOfWrongAnswers = document.createElement("h2");
      createNoOfWrongAnswers.innerHTML = "Number of wrong answers: " + quiz.noOfWrongAnswers;
      createNoOfWrongAnswers.className = "wrong-answers";
      let container = document.getElementById("headers");
      document.getElementById("headTitle").innerHTML = quiz.userName;
      container.appendChild(createNoOfQuestions);
      container.appendChild(createNoOfRightAnswers);
      container.appendChild(createNoOfWrongAnswers);
    }
  }
  class Question {
    constructor() {
      this.questionCategory = "";
      this.question = "";
      this.questionAnswers = [];
      this.isQuestionRightOrWrong = [];
    }
    currentQuestion(value) {
      let currentObject = json["question" + value];
      this.questionCategory = currentObject.category;
      this.question = currentObject.question;
      this.questionAnswers = currentObject.choices;
      this.isQuestionRightOrWrong = currentObject.answers;
    }
  }
  let quiz = new Quiz();
  select_question = document.getElementById("select_question");
  for (var questionValue = 1; questionValue < Object.keys(json).length + 1; questionValue++) {
    select_question.insertAdjacentHTML("beforeend", "<option>" + questionValue + "</option>");
  }

  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    quiz.userName = document.getElementById("userNameInput").value;
    let selectValue = Number(document.getElementById("select_question").value);
    quiz.createQuizForm();
    quiz.createElementsForQuiz(selectValue);
    quiz.createCorrectQuizButton();

    document.getElementById("correctQuiz").addEventListener("click", () => {
      quiz.correctQuizQuestions(selectValue);
      let quizFormElement = document.getElementById("quizForm");
      quizFormElement.remove();
      quiz.printOutResults();
    });
  });
});
