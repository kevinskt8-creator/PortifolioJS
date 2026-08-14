console.log("Portfólio Carlos Kevin");

const botaohome = document.getElementById("botaohome");
const menu = document.getElementById("menu");

const icon = botaohome.querySelector("i");

console.log(botaohome);
console.log(menu);
console.log(icon);

botaohome.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  }
});
