const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("scriptureList");

const li = document.createElement("li");
const deleteButton = document.createElement("button");;

li.textContent = input.value;
deleteButton.textContent = "X";
li.append(deleteButton);
list.append(li);

//add Add Chapter button and event listener for adding the chapter
const addChapterButton = document.createElement("button")
buttonElement.addEventListener("click", () => {

})