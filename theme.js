const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
let isDarkTheme = false;

themeBtn.onclick = function (e) {
  e.preventDefault();

  isDarkTheme = !isDarkTheme;

  if (!isDarkTheme) {
    root.style.setProperty("--body-bg", "#fffaf0");
    root.style.setProperty("--body-primary", "#0B0B0B");
    root.style.setProperty("--header-bg", "#e6eedf");
    root.style.setProperty("--header-boxshadow", "rgba(11, 11, 11, 0.2)");
    root.style.setProperty("--divider", "rgba(11, 11, 11, 0.2)");
    root.style.setProperty("--link-primary", "#0B0B0B");
    root.style.setProperty("--link-border", "rgba(11, 11, 11, 0.2)");

    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    currentLang === "se"
      ? (themeBtn.title = "Växla till mörkt tema")
      : (themeBtn.title = "Switch to dark theme");
  } else {
    root.style.setProperty("--body-bg", "#151515");
    root.style.setProperty("--body-primary", "#fffaf0");
    root.style.setProperty("--header-bg", "#0B0B0B");
    root.style.setProperty("--header-boxshadow", "rgba(0, 0, 0, 0.5)");
    root.style.setProperty("--divider", "rgba(255, 250, 240, 0.2)");
    root.style.setProperty("--link-primary", "#fffaf0");
    root.style.setProperty("--link-border", "rgba(255, 250, 240, 0.2)");

    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    currentLang === "se"
      ? (themeBtn.title = "Växla till ljust tema")
      : (themeBtn.title = "Switch to light theme");
  }
};
