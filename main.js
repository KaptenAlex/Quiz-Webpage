document.addEventListener("DOMContentLoaded", () => {
  createQuizDivElement = document.getElementById("createQuiz");
  createQuizButtonElement = document.getElementById("btn_CreateQuiz");
  document.getElementById('btn_CreateQuiz').addEventListener("click", () => {
    console.log("hej");
    createQuizDivElement.insertAdjacentHTML("afterend", "<div id='quizForm' class='d-flex justify-content-center'></div>");
    createQuizButtonElement.disabled = "disabled";

  });
});
