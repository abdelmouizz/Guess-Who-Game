// Getting information
let cards = document.querySelectorAll('.card');
let resetButton = document.querySelector('.resetButton');

// Button to do the reset function
resetButton.onclick = function (){
    reset();
};

// Adding Click Funcion to add Disabled Class to each card 
cards.forEach (card =>
    card.addEventListener("click", theChecker)
);

// Function to add Disabled Class to cards

function theChecker(){
    this.classList.toggle("disabled");
};

// Create Rest function 

function reset(){
    cards.forEach(card => card.classList.remove("disabled"))
};

