const subHeading = document.createElement("h3");
const subHeadingText = document.createTextNode("Buy high quality organic fruits online");
subHeading.append(subHeadingText);

const div = document.getElementsByTagName("div");
div[0].appendChild(subHeading);

subHeading.style.fontStyle = "italic";

const para = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
const ul = document.getElementsByClassName("fruits");
div[1].insertBefore(para, ul[0]);

para.id = "fruits-total";