function Shifting() {
    const text_load = document.getElementById("preload_list");
    text_load.style.opacity = "0"
    text_load.style.transition = "opacity 1.5s ease"
    setTimeout(function() {
        text_load.style.display = "none";
    }, 1500); 
}
function Shifting2() {
    const display = document.getElementById("main_list");
    display.style.display = "block";
    display.style.opacity = "0";
    setTimeout(() => {
      display.style.opacity = "1";
      display.style.transition = "opacity 3s ease";
    }, 10);
}
function musical() {
    const music = document.querySelector("video");
    music.play();
    music.removeAttribute("muted");
    music.volume = 1;
}
const display = document.getElementById("main_list");
display.style.display = "none";
display.style.opacity = "0";
const scare = document.querySelector("video");
scare.style.display = "block";
scare.style.position = "absolute";
scare.style.top = "8%";
