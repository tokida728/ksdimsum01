
const issueButton = [];
const link = [];
for (let i = 1; i <=3; i++){
  issueButton[i] = document.getElementById(`issueButton${i}`);
  link[i] = document.getElementById(`link${i}`);

  if (issueButton[i] && link[i]) {
    issueButton[i].addEventListener("click", () => {
      link[i].scrollIntoView();
    });
  }
};