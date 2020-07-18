// Add your code here
const ids = document.querySelector("#ids")

function submitData(name = "Steve", email = "steve@steve.com"){
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    }

    return fetch('http://localhost:3000/users', config)
        .then(r => r.json())
        .then(addToUI)
        .catch(err => ids.innerHTML += err)
}

document.addEventListener("DOMContentLoaded", setup)

function setup (){
    form = document.querySelector("#form")
    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(e){
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    submitData(name, email)
}

function addToUI(data){
    ids.innerHTML += data.id
}