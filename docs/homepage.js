// ページの要素が読み込まれてからイベント登録
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 3; i++) {
    const button = document.getElementById(`issueButton${i}`);
    const targetId = `target${i}`;

    if (button) {
      button.addEventListener("click", () => {
        location.hash = `#${targetId}`;
      });
    }
  }
});
