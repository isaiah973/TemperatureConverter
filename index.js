const fahInput = document.querySelector(".fahrenheit-input");
const celInput = document.querySelector(".celsius-input");
const pvalue = document.querySelector(".p-value");



celInput.addEventListener("input", () => {
  function converter() {
    return (celInput.value * 9/5) +32;
  }
   return fahInput.value = converter();
  }
);



