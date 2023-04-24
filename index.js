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
var buttonLightMode = document.getElementById("button-light-mode");
var styleLightMode = document.getElementById("style-light-mode");

// Turn on dark mode
function activateLightMode() {
  styleLightMode.disabled = false;
  buttonLightMode.innerHTML = "Dark Mode";
}

// Turn off dark mode
function deactivateLightMode() {
  styleLightMode.disabled = true;
  buttonLightMode.innerHTML = "Light Mode";
}

// Switch between modes on click
buttonLightMode.addEventListener("click", function() {
  if (styleLightMode.disabled) {
    activateLightMode();
  } else {
    deactivateLightMode();
  }
})