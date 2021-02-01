
const questions = document.querySelectorAll(".faq__question__box");

questions.forEach((question) => {
      question.addEventListener("click", function() {

                  questions.forEach(function(item) {
                        if (item !== question) {
                              item.classList.remove("show-text");
                        }
                  });

            question.classList.toggle("show-text");
      });
});