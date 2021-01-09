const container = document.querySelector(".container");
const button = document.querySelector(".button");
const hex = document.querySelector(".hex");

let colors = [
  "#FC440F",
  "#1EFFBC",
  "#7C9299",
  "#1F01B9",
  "#B4E33D",
  "#D0B8AC",
  "#9DCDC0",
  "#D9F4C7",
  "#1E3231",
  "#485665",
  "#8A716A",
  "#204B57",
  "#197BBD",
  "#E63462",
  "#FE5F55",
  "#2A2B2E",
  "#DEE8D5",
  "#FEEA00",
  "#F3B391",
  "#747572",
  "#F5D7E3",
];

button.addEventListener("click", () => {
  let color = Math.floor(Math.random() * colors.length) + 1;
  console.log(color);
  hex.textContent = colors[color];
  hex.style.color = colors[color];
  document.body.style.backgroundColor = colors[color];
});
