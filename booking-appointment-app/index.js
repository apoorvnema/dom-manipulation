function handleFormSubmit(event) {
    event.preventDefault();
    let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    }
    let myObj_serialised = JSON.stringify(myObj);
    localStorage.setItem(event.target.email.value, myObj_serialised);
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = event.target.username.value + "-" + event.target.email.value + "-" + event.target.phone.value + "<button type='button' class='delete-button' data-email='" + event.target.email.value + "'>Delete</button>";
    li.id = event.target.email.value;
    ul.appendChild(li);

    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        document.getElementById(event.target.email.value).remove();
        localStorage.removeItem(event.target.email.value);
    });
}

module.exports = handleFormSubmit;
