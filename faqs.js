document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");
  const answers = document.querySelectorAll(".faq-answer");

  answers.forEach(answer => {
    answer.style.display = "none";
  });

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".icon");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent = "-";
      }
    });
  });
});