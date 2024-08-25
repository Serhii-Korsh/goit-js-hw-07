const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const textInputValue = textInput.value.trim();
    if (textInputValue === "") {
      output.textContent = 'Anonymous';
    } else {
      output.textContent = event.currentTarget.value;
    }
  
});