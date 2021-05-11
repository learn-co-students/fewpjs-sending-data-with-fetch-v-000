// Add your code here
function submitData(name, email) {

    const formData = {
        name,
        email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            document.body.innerHTML = object.id;
            console.log(object);
        })
        .catch(function(error) {
            document.body.innerHTML = error.message;
            console.log(error.message);
        });
}