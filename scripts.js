let color = "black";
let mouseDown = false;
let gridLines = false;
let colorPicker = document.querySelector("#colorPicker");

window.addEventListener("mousedown", (e) => {
  mouseDown = true;
});

window.addEventListener("mouseup", (e) => {
  mouseDown = false;
});

function setColor(newColor) {
  let currentColorDiv = document.querySelector("#currentColor");
  currentColorDiv.style.backgroundColor = newColor;
  color = newColor;
}

function makeGrid(dimension) {
  if (dimension < 2) {
    dimension = 2;
  }

  if (dimension > 100) {
    dimension = 100;
  }

  let main = document.querySelector("#main");
  let grid = document.createElement("div");
  grid.className = "grid";
  grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  main.appendChild(grid);

  for (let i = 0; i < dimension * dimension; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.style.backgroundColor = "white";
    cell.style.userSelect = "none";

    if (gridLines) {
      cell.classList.add("gridLines");
    }

    cell.addEventListener("mousedown", (e) => {
      changeColor(e, color);
    });
    cell.addEventListener("mouseover", (e) => {
      if (mouseDown) {
        draw(e);
      }
    });
    cell.addEventListener("dragstart", () => {
      mouseDown = true;
    });

    grid.appendChild(cell);
  }
  setColor("black");
  resetCustomColors();
}

function newGrid() {
  let dimension = prompt("Enter a number between 2 and 100:");
  if (isNaN(dimension) || !dimension) {
    dimension = 16;
  }
  destroyGrid();
  makeGrid(dimension);
}

function draw(e) {
  changeColor(e, color);
}

function destroyGrid() {
  let gridframe = document.querySelector(".grid");
  gridframe.parentNode.removeChild(gridframe);
}

function changeColor(obj, color) {
  obj.target.style.backgroundColor = color;
}

function showGridLines() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.toggle("gridLines");
  });
  gridLines = !gridLines;
}

function setCustomColor(e) {
  if (e.textContent === "SET") {
    e.textContent = "";
    e.style.backgroundColor = color;
  } else {
    setColor(e.style.backgroundColor);
  }
}

function resetCustomColor(e) {
  e.style.backgroundColor = "white";
  e.style.userSelect = "none";
  e.style.display = "flex";
  e.style.justifyContent = "center";
  e.style.alignItems = "center";
  e.style.fontSize = ".5em";
  e.textContent = "SET";
}

function resetCustomColors() {
  let customColors = document.querySelectorAll(".customColor");
  customColors.forEach((e) => {
    resetCustomColor(e);
  });
}
