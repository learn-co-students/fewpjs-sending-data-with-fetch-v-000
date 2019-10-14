// Add your code here
function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
             name, 
             email
        })
    })
    .then(response => response.json())
    .then(json => appendId(json))
    .catch(error => {
        document.body.innerHTML = error.message
    })
}

function appendId(id) {
    document.body.innerHTML = id["id"]
    
}

