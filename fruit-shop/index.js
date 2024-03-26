const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";
const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.liststyleType = "none";
const basketHeading = document.querySelector("h2");
basketHeading.style.marginteft = "30px";
const fruitItems = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = "white";
    fruitItems[i].style.padding = "10px";
    fruitItems[i].style.margin = "10px";
    fruitItems[i].style.borderRadius = "5px";
}

const OddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");

for (let i = 0; i < OddFruitItems.length; i++) {
    OddFruitItems[i].style.backgroundColor = "lightgray";
}
// Write answer to the questions asked below:
basketHeading.style.color = "brown";
const EvenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < EvenFruitItems.length; i++) {
    EvenFruitItems[i].style.backgroundColor = "brown";
    EvenFruitItems[i].style.color = "white";
}
