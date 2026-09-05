const countDisplay = document.getElementById("count");

const incrementBtn =
    document.getElementById("incrementBtn");

const decrementBtn =
    document.getElementById("decrementBtn");

const resetBtn =
    document.getElementById("resetBtn");

const status =
    document.getElementById("status");

const counterDisplay =
    document.querySelector(".counter-display");

let count = 0;

function updateCounter() {

    countDisplay.textContent = count;

    counterDisplay.classList.remove("active");

    void counterDisplay.offsetWidth;

    counterDisplay.classList.add("active");

    if (count === 0) {
        status.textContent = "Counter is at zero";
    } else {
        status.textContent =
            `Current count: ${count}`;
    }
}

incrementBtn.addEventListener("click", () => {

    count++;

    updateCounter();

});

decrementBtn.addEventListener("click", () => {

    if (count > 0) {
        count--;
    }

    updateCounter();

});

resetBtn.addEventListener("click", () => {

    count = 0;

    updateCounter();

    status.textContent =
        "Counter has been reset";

});