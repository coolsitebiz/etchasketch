let color = "black";
let mouseDown = false;

window.addEventListener("mousedown", (e) => {
  mouseDown = true;
  console.log("mousedown");
});

window.addEventListener("mouseup", (e) => {
  mouseDown = false;
  console.log("mouseup");
});

function setColor(newColor, e) {
  color = newColor;
  e.blur();
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
  grid.style.gridTemplateColumns = `repeat(${dimension}, ${640 / dimension}px)`;
  main.appendChild(grid);

  for (let i = 0; i < dimension * dimension; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "white";
    cell.style.cursor = "";
    cell.addEventListener("mousedown", (e) => {
      changeColor(e, color);
    });
    cell.addEventListener("mouseover", (e) => {
      draw(mouseDown, e);
    });
    cell.addEventListener("dragstart", () => {
      mouseDown = true;
    });

    grid.appendChild(cell);
  }
}

function newGrid() {
  let dimension = prompt("Enter a number between 2 and 100:");
  if (isNaN(dimension) || !dimesion) {
    dimension = 16;
  }
  destroyGrid();
  makeGrid(dimension);
}

function draw(mouseDown, e) {
  if (mouseDown) {
    changeColor(e, color);
  }
}

function destroyGrid() {
  let grid = document.querySelector(".grid");
  grid.parentNode.removeChild(grid);
}

function changeColor(obj, color) {
  obj.target.style.backgroundColor = color;
}
