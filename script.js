const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    // console.log(item.id);
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString(); //convert a string object into a string.
      display.innerText = string.substr(0, string.length - 1); // supprimer dernier element
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText); //eval("2*3") calcule string
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    } 
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark"); // ajouter class 'dark'
  themeToggleBtn.classList.toggle("active"); // supprimer class 'active'
  isDark = !isDark; 
};
