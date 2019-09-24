document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("startQuiz").addEventListener("click", function() {
    let amountOfQuestions = document.getElementById("selectQuestion").value;
    console.log(amountOfQuestions);
  });
});
