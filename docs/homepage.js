const issueButton01 = document.getElementById("issueButton01");
const target01 = document.getElementById("target01");

issueButton01.addEventListener("click", () => {
  target01.scrollIntoView({ behavior: "smooth" });
});
