const testButton = document.getElementById("test_button");

if (testButton) {
  testButton.addEventListener(
    "click",
    e => (e.target.style.backgroundColor = "red")
  );
}
