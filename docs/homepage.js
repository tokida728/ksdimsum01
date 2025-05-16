
const issueButton = [];
const target = [];
for (let i = 1; i <=3; i++){
  issueButton[i] = document.getElementById(`issueButton${i}`);
  target[i] = document.getElementById(`target${i}`);

  if (issueButton[i] && target[i]) {
    issueButton[i].addEventListener("click", () => {
      target[i].scrollIntoView();
      target[i].style.transition = "background 0.3s";
      target[i].style.background = "yellow";
      setTimeout(() => {
        target[i].style.background = "lightgray";
      }, 600);
    });
  }
};