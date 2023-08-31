let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBox(16);
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBox(size);
    });

    console.log("hi");
});

function createBox(size){
    let box = document.querySelector(".box");

    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for (let i=0; i<numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        box.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = Number(prompt("Enter the size of the box."));
    let message = document.querySelector('#message');
    if (input=="" || input<0 || input>100){
        message.innerHTML = "Please Enter valid size number between 0 and 100";
    }else{
        message.innerHTML = "Good Now you can carry on!";
        return input;
    }
}

function colorDiv(){
    if (color== 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;
}
function resetBox(){
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = "white");
}