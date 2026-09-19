const button = document.querySelector("#countButton");
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  button.textContent = `クリック: ${count}回`;
});
