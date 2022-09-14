let color = "black";
let mouseDown = false;

window.addEventListener("mousedown", (e) => {
  mouseDown = true;
});

window.addEventListener("mouseup", (e) => {
  mouseDown = false;
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
  grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  main.appendChild(grid);

  for (let i = 0; i < dimension * dimension; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "white";
    cell.style.userSelect = "none";
    cell.addEventListener("mousedown", (e) => {
      changeColor(e, color);
    });
    cell.addEventListener("mouseover", (e) => {
        if(mouseDown) {
            draw(mouseDown, e);
        }
      
    });
    cell.addEventListener("dragstart", () => {
      mouseDown = true;
    });

    grid.appendChild(cell);
  }
}

function newGrid() {
  let dimension = prompt("Enter a number between 2 and 100:");
  if (isNaN(dimension) || !dimension) {
    dimension = 16;
  }
  destroyGrid();
  makeGrid(dimension);
}

function draw(mouseDown, e) {
    changeColor(e, color);
}

function destroyGrid() {
  let gridframe = document.querySelector(".grid");
  gridframe.parentNode.removeChild(gridframe);
}

function changeColor(obj, color) {
  obj.target.style.backgroundColor = color;
}
