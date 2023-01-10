// *** CHANGE LANGUAGES ***
var buttonLanguageEs = document.getElementById("button-language-es");
var buttonLanguageEn = document.getElementById("button-language-en");
var contentLanguageEs = document.getElementById("content-language-es");
var contentLanguageEn = document.getElementById("content-language-en");

// Show content ES
buttonLanguageEs.addEventListener("click", function() {
  contentLanguageEs.style.display = "block";
  contentLanguageEn.style.display = "none";
})

// Show content EN
buttonLanguageEn.addEventListener("click", function() {
  contentLanguageEn.style.display = "block";
  contentLanguageEs.style.display = "none";
})

// *** CHANGE MODES ***
var buttonDarkMode = document.getElementById("button-dark-mode");
var styleDarkMode = document.getElementById("style-dark-model");

// Turn on dark mode
function activateDarkMode() {
  styleDarkMode.disabled = false;
  buttonDarkMode.innerHTML = "Light Mode";
}

// Turn off dark mode
function deactivateDarkMode() {
  styleDarkMode.disabled = true;
  buttonDarkMode.innerHTML = "Dark Mode";
}

// Switch between modes on click
buttonDarkMode.addEventListener("click", function() {
  if (styleDarkMode.disabled) {
    activateDarkMode();
  } else {
    deactivateDarkMode();
  }
})