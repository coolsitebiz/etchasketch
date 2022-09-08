console.log("JS is working");

function makeGrid(dimension) {

    if (dimension < 2) {
        dimension = 2;
    }

    if (dimension > 100) {
        dimension = 100;
    }

    let container = document.querySelector('#grid');
    // let style = window.getComputedStyle(container);  testing dynamic container width
    // let wh = style.getPropertyValue('width');
    // console.log(parseInt(wh));

    for (let i = 0; i < dimension * dimension; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('mouseover', (e) => {
            changeColor(e)
        })
        container.appendChild(cell);
    }


}

function changeColor(obj) {
    obj.target.style.backgroundColor = "black";
}
