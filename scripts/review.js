const submitsDisplay = document.querySelector(".submits");

let numSubmits = Number(window.localStorage.getItem("numSubmits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numSubmits !== 0) {
    submitsDisplay.textContent = numSubmits;
} else {
    submitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numSubmits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numSubmits-ls", numSubmits);