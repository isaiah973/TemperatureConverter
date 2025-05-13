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
fahInput.addEventListener("input", () => {
  function converterToFah() {
    return (fahInput.value - 32) * 5/9;
  }
   return celInput.value = converterToFah();
  }
);



