const nameInput = document.getElementById("name-input");
const greetingH2 = document.getElementById("greeting-text");
const nameBtn = document.getElementById("name-btn");

nameBtn.addEventListener("click", showGreeting);

function showGreeting() {
    const name = nameInput.value;
    fetch(`/api/greeting?name=${name}`)
        .then((response) => response.json())
        .then((result) => {
            greetingH2.textContent = result.data;
        });
}
