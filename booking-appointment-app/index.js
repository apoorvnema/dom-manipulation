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
    li.innerHTML = `${event.target.username.value} - ${event.target.email.value} - ${event.target.phone.value} <button type='button' class='delete-button' data-email='${event.target.email.value}'>Delete</button> <button type='button' class='edit-button' data-email='${event.target.email.value}'>Edit</button>`;
    li.id = event.target.email.value;
    ul.appendChild(li);

    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        const email = deleteButton.getAttribute('data-email');
        document.getElementById(email).remove();
        localStorage.removeItem(email);
    });

    const editButton = li.querySelector(".edit-button");
    editButton.addEventListener("click", function () {
        const email = editButton.getAttribute('data-email');
        const getItem = JSON.parse(localStorage.getItem(email));
        document.getElementById("username").value = getItem.username;
        document.getElementById("email").value = getItem.email;
        document.getElementById("phone").value = getItem.phone;
        document.getElementById(email).remove();
        localStorage.removeItem(email);
    });
}

module.exports = handleFormSubmit;
