document.addEventListener("DOMContentLoaded", (event) => {
  const lightmode = document.querySelector(".homepage__navigation__lightmode");
  const nightmode = document.querySelector(".homepage__navigation-night");
  const currentTheme = localStorage.getItem("theme") || null;

  const applyDarkMode = () => {
    console.log("Applying dark mode");
    document.body.classList.add("dark");
    document.querySelector(".homepage").classList.add("dark");
    document
      .querySelectorAll(
        ".card-project, .user-information__role h1, .user-information__description p, .user-information__header, .application-container, .application-wrapper, .footer, .wrapper--project"
      )
      .forEach((el) => el.classList.add("dark"));
    lightmode.src = "images/light.png";
    nightmode.src = "images/light.png";
  };

  const removeDarkMode = () => {
    console.log("Removing dark mode");
    document.body.classList.remove("dark");
    document.querySelector(".homepage").classList.remove("dark");
    document
      .querySelectorAll(
        ".card-project, .user-information__role h1, .user-information__description p, .user-information__header, .application-container, .application-wrapper, .footer, .wrapper--project"
      )
      .forEach((el) => el.classList.remove("dark"));
    lightmode.src = "images/night.png";
    nightmode.src = "images/night.png";
  };

  if (currentTheme === "dark") {
    applyDarkMode();
  } else {
    removeDarkMode();
  }

  lightmode.addEventListener("click", () => {
    console.log("Light mode button clicked");
    if (document.body.classList.contains("dark")) {
      removeDarkMode();
      localStorage.setItem("theme", "light");
    } else {
      applyDarkMode();
      localStorage.setItem("theme", "dark");
    }
  });

  nightmode.addEventListener("click", () => {
    console.log("Night mode button clicked");
    if (document.body.classList.contains("dark")) {
      removeDarkMode();
      localStorage.setItem("theme", "light");
    } else {
      applyDarkMode();
      localStorage.setItem("theme", "dark");
    }
  });
});
