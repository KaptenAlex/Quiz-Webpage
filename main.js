document.addEventListener("DOMContentLoaded", () => {
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    console.log("hej");
    createQuizDivElement.insertAdjacentHTML("afterend", "<div class='centerDiv'><div id='quizForm' class='shapeForm'><p>hello im a teapot</p></div></div>");
    createQuizButtonElement.disabled = "disabled";
  });
});
