
const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `<span id="year">${today.getFullYear()}</span>`;

let olastModified = document.querySelector("#lastModified");
olastModified.innerHTML = `<span id="lastModified">${document.lastModified}</span>`;


const mainnav = document.querySelector(".navigation");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August 7",
        area: "11,500 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        imageAlt: "Exterior of the Aba Nigeria Temple"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May 21",
        area: "74,792 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        imageAlt: "Exterior of the Manti Utah Temple"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June 7",
        area: "96,630 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        imageAlt: "Exterior of the Payson Utah Temple"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May 2",
        area: "6,861 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        imageAlt: "Exterior of the Yigo Guam Temple"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November 19",
        area: "156,558 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        imageAlt: "Exterior of the Washington D.C. Temple"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January 10",
        area: "9,600 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        imageAlt: "Exterior of the Lima Perú Temple"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December 2",
        area: "116,642 sq ft",
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        imageAlt: "Exterior of the Mexico City Mexico Temple"
    },
    {
        templeName: "Portland Oregon",
        location: "Lake Oswego, Oregon",
        dedicated: "1989, August 19",
        area: "80,500 sq ft",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-1629.jpg",
        imageAlt: "Exterior of the Portland Oregon Temple"
    },
    {
        templeName: "Auckland New Zealand",
        location: "Auckland, New Zealand",
        dedicated: "2025, April 13",
        area: "45,456 sq ft",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57800.jpg",
        imageAlt: "Exterior of the Auckland New Zealand Temple"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April 6",
        area: "382,207 sq ft",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1092.jpg",
        imageAlt: "Exterior of the Salt Lake Temple"
    },
];


function makeTempleCard(temple) {
    return `
        <div class="temple-card">
            <h2 class="temple-name">${temple.templeName}</h2>
            <div>
                <span class="temple-key">Location: </span>
                <span class="temple-value">${temple.location}</span>
            </div>

            <div>
                <span class="temple-key">Dedicated: </span>
                <span class="temple-value">${temple.dedicated}</span>
            </div>

            <div>
                <span class="temple-key">Size: </span>
                <span class="temple-value">${temple.area}</span>
            </div>

            <img class="temple-image" src="${temple.imageUrl}" alt="${temple.imageAlt}">
        </div>
    `;
}

function renderTempleCards() {
    const container = document.querySelector(".temple-card-container");
    const newTempleArray = temples.map(temple => makeTempleCard(temple));
    container.innerHTML = newTempleArray.join("");
}

window.onload = function () {
    renderTempleCards();
}