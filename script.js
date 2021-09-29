let selectedColor = "yellow";
document.addEventListener("DOMContentLoaded", start);
async function start() {
  let response = await fetch("theShoe-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  init();
}

function setColor(element, color) {
  element.style.fill = color;
}

function init() {
  document.querySelector("#front_point").addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });

  document.querySelector("#back").addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });

  document.querySelector("#top_lace").addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });

  document.querySelector("#middle").addEventListener("click", function () {
    setColor(document.querySelector("#middle"), selectedColor);
  });

  document.querySelector("#rainbow").addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });

  document.querySelector("#puma_top").addEventListener("click", function () {
    setColor(document.querySelector("#puma_top"), selectedColor);
  });

  document.querySelector("#colorWheel").addEventListener("input", (event) => {
    selectedColor = event.target.value;
    console.log(selectedColor);
  });
}
