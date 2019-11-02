function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(json => displayId(json))
    .catch(error => displayError(error));
}

function displayId(json) {
    const id = json.id

    const p = document.createElement('p');
    p.textContent = id;
    document.body.appendChild(p);
}

function displayError(error) {
    const p = document.createElement('p');
    p.textContent = error;
    document.body.appendChild(p);
}