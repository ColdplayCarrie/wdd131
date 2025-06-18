const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span id="year">${today.getFullYear()}</span>`;

let olastModified = document.querySelector("#lastModified");
olastModified.innerHTML = `<span id="lastModified">${document.lastModified}</span>`;

//Email/submit button interactions//
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

function validEmailUpdateButton() {
    if (emailInput.checkValidity()) {
        submitButton.classList.add('valid-email');
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.classList.remove('valid-email');
        submitButton.setAttribute('disabled', 'true');
    }
}

emailInput.addEventListener('input', validEmailUpdateButton);
validEmailUpdateButton();


//Local Storage//
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `You are our first visitor! Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);