//Selectors 
const text = document.getElementById('text');
const button = document.getElementById('button');

// Event Listeners
button.addEventListener('click', display);


// Functions
function display() {
    text.innerHTML = 'Hello World';
}