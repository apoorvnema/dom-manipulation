function handleFormSubmit(event) {
    event.preventDefault();
    let myObj = {
        email: event.target.email.value,
        phone: event.target.phone.value,
        username: event.target.username.value,
    }
    let myObj_serialised = JSON.stringify(myObj);
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = event.target.username.value + "-" + event.target.email.value + "-" + event.target.phone.value;
    ul.appendChild(li);
    localStorage.setItem(event.target.email.value, myObj_serialised);
}

module.exports = handleFormSubmit;