const form = document.getElementById("form");
const submit = document.getElementById("submit");
const headerText = document.getElementById("headerText");

function editFormText() {
    form.innerHTML = "Submitted!"
    form.classList.add("submitText");
}

submit.addEventListener("click", editFormText);