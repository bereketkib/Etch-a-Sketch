let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBox(16);

    document.querySelector('body').addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector('#draw');
            if (click){
                draw.innerHTML = "Drawing is enabled. click once on screen to disable.";
            }else {
                draw.innerHTML = "drawing is diabled. click once on screen to enable.";
            }
        }
    });


    let btn_popup = document.querySelector("#popup");
    let number = document.querySelector("#size");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBox(size);
        number.textContent = size;
    });

    console.log("hi");




    // Get references to the button and color input elements
    const chooseColorButton = document.querySelector("#chooseColorButton");
    const colorPicker = document.querySelector("#colorPicker");
    const colorDisplay = document.querySelector("#colorDisplay");

    // Add a click event listener to the button
    chooseColorButton.addEventListener('click', () => {
        // Show the color input element
        colorPicker.style.display = 'block';

        colorPicker.addEventListener('input', () => {
        const selectedColor = colorPicker.value;
        colorDisplay.textContent = `Selected Color: ${selectedColor}`;
        colorPicker.style.display = 'none';
        color = selectedColor;
        });
    });

    


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
    if (input=="" || input<1 || input>100){
        message.innerHTML = "Please Enter valid size number between 1 and 100";
        message.style.color="red";
    }else{
        message.innerHTML = "Good Now you can carry on!";
        message.style.color="green";
        return input;
    }
}

function colorDiv(){
    if (click){
        
        if (color== 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }else {
            this.style.backgroundColor = color;
        }
    }   
}

function setColor(colorChoice){
    color = colorChoice;
    colorDisplay.textContent = `Selected Color: random`;
}
function resetBox(){
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = "white");
    draw.innerHTML = "Click anywhere to enable drawing";
    click = false;
}

