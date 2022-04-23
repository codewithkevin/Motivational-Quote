//Selectors 
const text = document.getElementById('text');
const button = document.getElementById('button');

// Event Listeners
button.addEventListener('click', display);


// Functions
function display() {
    const url = "https://api.adviceslip.com/advice";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            text.innerText = data.slip.advice;
        })
}