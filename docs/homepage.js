
const issueButton = [];
const target = [];
for (let i = 1; i <=3; i++){
  issueButton[i] = document.getElementById(`issueButton${i}`);
  target[i] = document.getElementById(`target${i}`);

  issueButton[i].addEventListener("click", () => {
    target[i].scrollIntoView({ behavior: "smooth" });
  });
};