document.addEventListener("DOMContentLoaded", () => {
  /*
    Link to current json file: http://demo3824117.mockable.io/
  */
  const json = getJSON("http://demo3824117.mockable.io/");

  function onlyViewFirstQuestion(currentQuestion) {
    if (currentQuestion.id != "question1") {
      currentQuestion.style.display = "none";
    }
  }

  function showNextQuestion(currentQuestionDiv) {
    let currentDiv = document.getElementById(currentQuestionDiv);
    let nextDiv = currentDiv.nextElementSibling;
    currentDiv.style.display = "none";
    nextDiv.style.display = "block";
  }

  function showPreviousQuestion(currentQuestionDiv) {
    let currentDiv = document.getElementById(currentQuestionDiv);
    let previousDiv = currentDiv.previousElementSibling;
    currentDiv.style.display = "none";
    previousDiv.style.display = "block";
  }

  function createCorrectQuizButton(lastQuestionNumber) {
    let lastQuestionDiv = document.getElementById("question" + lastQuestionNumber);
    let submitButton = document.createElement("button");
    submitButton.id = "correctQuiz";
    submitButton.type = "button";
    submitButton.className = "btn btn-success floatRight";
    submitButton.innerHTML = "Correct quiz!";
    lastQuestionDiv.appendChild(submitButton);
  }

  function iterateThroughQuestionDivs(selectedValue) {
    for (var currentDiv = 1; currentDiv < selectedValue + 1; currentDiv++) {
      let currentDivElement = document.getElementById("question" + currentDiv);
      let inputChildrenOfCurrentDivElement = currentDivElement.getElementsByTagName('input');
      correctQuizQuestions(inputChildrenOfCurrentDivElement);
    }
  }

  function correctQuizQuestions(arrayOfCurrentQuestionDiv) {
    let noOfChoicesNotChecked = 0;
    let noOfWrongAnswers = 0;
    let noOfRightAnswers = 0;
    let inputValues = [];
    for (let checkbox of arrayOfCurrentQuestionDiv) {
      inputValues.push(checkbox.value);
      if (checkbox.checked && checkbox.value == "true") {
        noOfRightAnswers++;
      } else if (checkbox.checked && checkbox.value == "false") {
        noOfWrongAnswers++;
      } else {
        noOfChoicesNotChecked++;
        if (noOfChoicesNotChecked >= 3) {
          noOfWrongAnswers++;
        }
      }
    }
    let rightInputValues = inputValues.filter(truths => truths == "true");
    let rightAmountOfTrueValues = rightInputValues.length;
    if (noOfRightAnswers == rightAmountOfTrueValues && noOfWrongAnswers == 0) {
      quiz.noOfRightAnswers++;
    } else if (noOfRightAnswers > rightAmountOfTrueValues && noOfWrongAnswers > 0) {
      quiz.noOfWrongAnswers++;
    } else if (noOfWrongAnswers > 0) {
      quiz.noOfWrongAnswers++;
    }
  }

  function printOutResults() {
    let createNoOfQuestions = document.createElement("h1");
    createNoOfQuestions.innerHTML = "Number of selected questions: " + quiz.noOfQuestions;
    createNoOfQuestions.className = "total-questions display-5";
    let createNoOfRightAnswers = document.createElement("h1");
    createNoOfRightAnswers.innerHTML = "Number of right questions: " + quiz.noOfRightAnswers;
    createNoOfRightAnswers.className = "right-answers display-5";
    let createNoOfWrongAnswers = document.createElement("h1");
    createNoOfWrongAnswers.innerHTML = "Number of wrong questions: " + quiz.noOfWrongAnswers;
    createNoOfWrongAnswers.className = "wrong-answers display-5";
    let container = document.getElementById("headers");
    document.getElementById("headTitle").innerHTML = "The results are in " + quiz.userName + "!";
    container.appendChild(createNoOfQuestions);
    container.appendChild(createNoOfRightAnswers);
    container.appendChild(createNoOfWrongAnswers);
  }


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
        onlyViewFirstQuestion(divForQuestion);

        let labelForCategory = document.createElement("label");
        labelForCategory.appendChild(document.createTextNode("Category: " + questionClass.questionCategory));
        divForQuestion.appendChild(labelForCategory);
        labelForCategory.insertAdjacentHTML("afterend", "<br>");

        let labelForQuestion = document.createElement("label");
        labelForQuestion.appendChild(document.createTextNode("Question: " + eachDiv + " " + questionClass.question));
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
        let nextQuestion = document.createElement("button");
        nextQuestion.id = "nextQuestion";
        nextQuestion.className = "btn btn-success floatRight";
        nextQuestion.innerHTML = "Next question";
        divForQuestion.appendChild(nextQuestion);

        let previousQuestion = document.createElement("button");
        previousQuestion.id = "previousQuestion";
        previousQuestion.className = "btn btn-success floatLeft";
        previousQuestion.innerHTML = "Previous question";
        divForQuestion.appendChild(previousQuestion);

        if (divForQuestion.id == "question1") {
          previousQuestion.style.display = "none";
        }
        if (divForQuestion.id == "question" + selectedQuestions) {
          nextQuestion.style.display = "none";
          createCorrectQuizButton(selectedQuestions);
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
    
    document.querySelectorAll('#nextQuestion').forEach(nextButton => {
      nextButton.addEventListener('click', event => {
        let divId = event.target.parentElement.id;
        showNextQuestion(divId);
      });
    });
    document.querySelectorAll('#previousQuestion').forEach(previousButton => {
      previousButton.addEventListener('click', e => {
        let divId = e.target.parentElement.id;
        showPreviousQuestion(divId);
      });
    });
    document.getElementById("correctQuiz").addEventListener("click", () => {
      iterateThroughQuestionDivs(selectValue);
      let quizFormElement = document.getElementById("quizForm");
      quizFormElement.remove();
      printOutResults();
    });
  });
});
