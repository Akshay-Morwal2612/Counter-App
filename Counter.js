let incraseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display")
let counter = 0;

function updateDisplay(){
    display.value = counter;
}

incraseBtn.addEventListener("click", () => {
     counter++;
    updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
    counter--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    updateDisplay();
});
