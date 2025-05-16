
const issueButton = [];
for (let i = 1; i <=3; i++){
  issueButton[i] = document.getElementById("issueButton[i]");
};

const target = [];
for (let i = 1; i <=3; i++){
  issueButton[i] = document.getElementById("target[i]]");
};


issueButton.addEventListener("click", () => {
  target.scrollIntoView({ behavior: "smooth" });
});
