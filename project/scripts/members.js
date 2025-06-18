//Modified info in footer//
const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span id="year">${today.getFullYear()}</span>`;

let olastModified = document.querySelector("#lastModified");
olastModified.innerHTML = `<span id="lastModified">${document.lastModified}</span>`;

//Local Storage recording individual page visits for members//
window.onload = function () {
    const visitsDisplay = document.querySelector(".page-visits");
    let pageIdentifier = window.location.pathname.split('/').pop().replace('.html', '');

    const localStorageKey = `${pageIdentifier}-visits-ls`;

    let numVisits = Number(window.localStorage.getItem(localStorageKey)) || 0;

    if (visitsDisplay) {
        if (numVisits != 0) {
            visitsDisplay.textContent = numVisits;
        }
        else {
            visitsDisplay.textContent = `You are the first visitor to ${pageIdentifier.charAt(0).toUpperCase() + pageIdentifier.slice(1)}'s page!`;
        }

        numVisits++;
        localStorage.setItem(localStorageKey, numVisits);
    }
}