const userDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
let head = document.getElementsByTagName("head")[0];
let link = document.createElement('link');
link.rel = "stylesheet";
link.type = "text/css";
if(userDarkTheme.matches) {
    link.href = "./styles/dark.css"
    var img = document.getElementsByTagName("img")[0];
    img.src = "Assets/images/ndicarrot-dark.png"
} else {
    link.href = "./styles/light.css";
}
head.appendChild(link);