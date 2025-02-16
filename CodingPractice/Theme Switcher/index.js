let bgContainer = document.getElementById("bgContainer");
let themeUserInput = document.getElementById("themeUserInput");
let heading = document.getElementById("heading");

let lightThemeImgUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
  if (event.key === "Enter") {
    let theme = themeUserInput.value;

    if (theme === "Light") {
      bgContainer.style.backgroundImage = lightThemeImgUrl;
      heading.style.color = "#014d40";
    } else if (theme === "Dark") {
      bgContainer.style.backgroundImage = darkThemeImgUrl;
      heading.style.color = "ffffff";
    } else {
      alert("Invalid theme");
    }
  }
}

themeUserInput.addEventListener("keydown", changeTheme);
