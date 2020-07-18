// Add your code here

//example from lesson:
fetch('http://localhost:3000/dogs', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
});

//challenges to complete lab:
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(function(data) {
        let addition = document.createElement('p')
        addition.innerHTML = `User ID: ${data.id}`
        document.querySelector('body').appendChild(addition)
    })
    .catch(function(error) {
        let message = document.createElement('p')
        message.innerHTML = error.message
        document.querySelector('body').appendChild(message)
    });
};