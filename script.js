const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    if (result === Infinity || isNaN(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch {
    display.value = 'Error';
  }
}

// Theme Toggle Logic
const themeSwitch = document.getElementById("themeSwitch");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(dark) {
  if (dark) {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
    themeLabel.textContent = "🌙 Dark Mode";
  
  }
   else {
   
    document.body.classList.remove("dark");
    themeSwitch.checked = false;
    themeLabel.textContent = "☀️ Light Mode";
    
  }
}

const savedTheme = localStorage.getItem("theme") === "dark";
applyTheme(savedTheme);

themeSwitch.addEventListener("change", () => {
  const isDark = themeSwitch.checked;
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
