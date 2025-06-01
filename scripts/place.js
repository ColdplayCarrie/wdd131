const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span id="year">${today.getFullYear()}</span>`;

let olastModified = document.querySelector("#lastModified");
olastModified.innerHTML = `<span id="lastModified">${document.lastModified}</span>`;


const temp = 8;
const wind = 10;
const windChill = calculateWindChill(8, 10);

function calculateWindChill(temperature, windSpeed) {
    if (windSpeed < 5 || temperature > 10) {
        return "N/A";
    }
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
}

document.getElementById("windChill").innerHTML = (calculateWindChill(temp, wind) - calculateWindChill(temp, wind) % 0.1) + " °C";