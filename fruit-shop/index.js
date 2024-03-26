const desc = document.createElement("input");
const form = document.querySelector("form");
const btn = document.querySelector("button");
desc.id = "description";
desc.type = "text";
form.insertBefore(desc, btn);
// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const li = document.createElement("li");
    const fruitToAdd = document.querySelector("#fruit-to-add");
    li.className = "fruit";
    li.innerHTML = fruitToAdd.value + `<p style='font-style:italic;'>${desc.value}</p><button class='delete-btn'>x</button>`;
    fruits.appendChild(li);
});
// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.querySelector("#filter");
filter.addEventListener('keyup', function (event) {
    const fruit = document.querySelectorAll(".fruit");
    const filterText = event.target.value.toLowerCase();
    for (let i = 0; i < fruit.length; i++) {
        const fruitText = fruit[i].firstChild.textContent.toLowerCase();
        const fruitDescription = fruit[i].querySelector("p") ? fruit[i].querySelector("p").textContent.toLowerCase() : "";
        if (fruitText.indexOf(filterText) == -1 && fruitDescription.indexOf(filterText) == -1) {
            fruit[i].style.display = "none";
        }
        else {
            fruit[i].style.display = "flex";
        }
    }
});