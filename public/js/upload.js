var host = "http://localhost:3000/"

function displayFileName() {
const input = document.getElementById("file-upload");
const name = document.getElementById("file-name");
name.innerText = input.files[0].name;
}

function handleSubmit(event) {
event.preventDefault();

const form = event.target;
const button = document.getElementById("upload-button");
const loading = document.getElementById("loading");
const message = document.getElementById("message");

const formData = new FormData(form);
button.style.display = "none";
button.disabled = true;
loading.style.display = "inline-block";
fetch(`${host}upload`, {
    method: "POST",
    body: formData,
})
    .then((response) => response.json())
    .then((data) => {
    if (data.success) {
        message.innerText = data.message;
        message.classList.add("success");
    } else {
        message.innerText = data.message;
        message.classList.add("error");
    }
    })
    .catch((error) => {
    message.innerText = error.message;
    message.classList.add("error");
    })
    .finally(() => {
    button.style.display = "block";
    button.disabled = false;
    loading.style.display = "none";
    });
}