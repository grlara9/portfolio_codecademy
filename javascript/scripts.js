const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btns = question.querySelector(".question-btn");
  // console.log(btn);

  btns.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

let navi = document.querySelector("nav");
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navi.classList.add("sticky");
  } else {
    navi.classList.remove("sticky");
  }
};
