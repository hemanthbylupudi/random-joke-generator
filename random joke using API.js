let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function display(data) {
    spinner.classList.toggle("d-none");
    jokeText.textContent = "";
    jokeText.textContent = data.value;
}


function getJoke() {
    spinner.classList.toggle("d-none");
    jokeText.textContent = ""
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/jokes/random"
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            display(data);
        });
}

jokeBtn.addEventListener("click", getJoke);