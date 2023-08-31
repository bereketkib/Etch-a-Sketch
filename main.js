document.addEventListener("DOMContentLoaded", function(){
    createBox(16);

    console.log("hi");
});

function createBox(size){
    let box = document.querySelector(".box");

    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for (let i=0; i<numDivs; i++){
        let div = document.createElement("div");
        div.style.background = 'yellow';
        box.insertAdjacentElement("beforeend", div);
    }
}