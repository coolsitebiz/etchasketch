console.log("JS is working");

function makeGrid(dimension) {

    if (dimension < 2) {
        dimension = 2;
    }

    if (dimension > 100) {
        dimension = 100;
    }

    let main = document.querySelector('#main');
    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.gridTemplateColumns = `repeat(${dimension}, ${640/dimension}px)`;
    main.appendChild(grid);


    for (let i = 0; i < dimension * dimension; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('mousedown', (e) => {
            changeColor(e)
        })
        cell.addEventListener('mouseover', (e) => {
            e.target.classList.toggle("highlighted");
        })
        // cell.addEventListener('mouseout', (e) => {
        //     e.target.classList.toggle("highlighted");
        // })
        grid.appendChild(cell);
    }


}

function newGrid(dimension) {
    destroyGrid();
    makeGrid(dimension);
}

function destroyGrid() {
    let grid = document.querySelector(".grid");
    grid.parentNode.removeChild(grid);
}

function changeColor(obj) {
    obj.target.style.backgroundColor = "black";
}
