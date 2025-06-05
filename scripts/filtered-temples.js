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
        year: 2005,
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        imageAlt: "Exterior of the Aba Nigeria Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May 21",
        year: 1888,
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        imageAlt: "Exterior of the Manti Utah Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June 7",
        year: 2015,
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        imageAlt: "Exterior of the Payson Utah Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May 2",
        year: 2020,
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        imageAlt: "Exterior of the Yigo Guam Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November 19",
        year: 1974,
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        imageAlt: "Exterior of the Washington D.C. Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January 10",
        year: 1986,
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        imageAlt: "Exterior of the Lima Perú Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December 2",
        year: 1983,
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        imageAlt: "Exterior of the Mexico City Mexico Temple",
        imageCopyright: "image from churchofjesuschrist.org"
    },
    {
        templeName: "Auckland New Zealand",
        location: "Auckland, New Zealand",
        dedicated: "2025, April 13",
        year: 2025,
        area: 45456,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57800.jpg",
        imageAlt: "Exterior of the Auckland New Zealand Temple",
        imageCopyright: "image from churchofjesuschristtemples.org"
    },
    {
        templeName: "Portland Oregon",
        location: "Lake Oswego, Oregon",
        dedicated: "1989, August 19",
        year: 1989,
        area: 80500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/portland-oregon-temple/portland-oregon-temple-30178.jpg",
        imageAlt: "Exterior of the Portland Oregon Temple",
        imageCopyright: "image from churchofjesuschristtemples.org"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April 6",
        year: 1893,
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1092.jpg",
        imageAlt: "Exterior of the Salt Lake Temple",
        imageCopyright: "image from churchofjesuschristtemples.org"
    },
];

function createTempleCard(temple) {
    return `
    <div class="temple-card">

        <h3>${temple.templeName}</h3>

        <div class="temple-card-row">
            <span class="temple-key">Location: </span>
            <span class="temple-value">${temple.location}</span>
        </div>
        <div class="temple-card-row">
            <span class="temple-key">Dedicated: </span>
            <span class="temple-value">${temple.dedicated}</span>
        </div>
        <div class="temple-card-last-row">
            <span class="temple-key">Size: </span>
            <span class="temple-value">${temple.area} sq ft</span>
        </div>

        <img loading="lazy" class="temple-image" src="${temple.imageUrl}" alt="${temple.imageAlt}">

        <div class="copyright">
            <span>${temple.imageCopyright}</span>
        </div>

    </div>
`;
}

function renderTempleCards(templesToRender) {
    const container = document.querySelector(".temple-card-container");
    container.innerHTML = "";
    const newTempleArray = templesToRender.map(temple => createTempleCard(temple));
    container.innerHTML = newTempleArray.join("");
}

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    const oldTemples = (temples.filter(temple => temple.year < 1900));
    renderTempleCards(oldTemples);
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () => {
    const newTemples = (temples.filter(temple => temple.year > 2000));
    renderTempleCards(newTemples);
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
    const newTemples = (temples.filter(temple => temple.area > 90000));
    renderTempleCards(newTemples);
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
    const newTemples = (temples.filter(temple => temple.area < 10000));
    renderTempleCards(newTemples);
});

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    renderTempleCards(temples);
});

window.onload = function () {
    renderTempleCards(temples);
}