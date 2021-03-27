// Used in DOM.html
console.log("Hi, this JS file is used in DOM.html");

let myDiv = document.getElementById("myDiv");
console.log("The content of myDiv", myDiv);

// Adding new elements to the main div
let elements = [];
for (let i = 0; i < 3; i++) {
    // Creating different elements
    let circle = document.createElement("div");
    elements.push(circle);
    // Appending created elements to the main div
    myDiv.appendChild(circle);
    // Assign styles
    circle.className = "circle";
    circle.id = `circle${i+1}`;
}

// Adding a trigger using DOM
const simplePrinter = () => {
    console.log('Change Sensed (key pressed)');
}

document.body.addEventListener("keyup", simplePrinter);

// Adding another trigger to change color of circles by click
document.body.addEventListener("click", () => {
    console.log('Change Sensed (clicked)');

    let circle1 = document.getElementById("circle1");
    let circle2 = document.getElementById("circle2");
    let circle3 = document.getElementById("circle3");

    if (circle1.style.backgroundColor) {
        circle1.style.backgroundColor = "";
        circle2.style.backgroundColor = "";
        circle3.style.backgroundColor = "";
    } else {
        circle1.style.backgroundColor = "red";
        circle2.style.backgroundColor = "orange";
        circle3.style.backgroundColor = "green";
    }
    
    if (document.getElementById("circle1").style.backgroundColor === "#FFF") {
        document.getElementById("circle1").style.backgroundColor = "red";
    }
});
