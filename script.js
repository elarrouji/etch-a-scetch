var squares = prompt("Chose the number of squares per side:");
var div = document.querySelector(".container");
div.style.cssText = `grid-template-rows: repeat(${squares}, 1fr);
                    grid-template-columns: repeat(${squares}, 1fr)`;

for (let i=0; i < Number(squares * squares); i++) {
  let child = document.createElement("div");
  div.appendChild(child);  
}

function draw(e) {
  let randomR = Math.round(Math.random() * 255);
  let randomG = Math.round(Math.random() * 255);
  let randomB = Math.round(Math.random() * 255);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function restart() {
  location.reload();
}

let children = Array.from(div.children);
children.forEach(c => c.style.border = "1px solid #f4f4f4");
children.forEach(c => c.addEventListener("mouseover", draw));

let button = document.querySelector("button");
button.addEventListener("click", restart);