// Add your code here
function submitData(userName, userEmail) {
    fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
             userName, 
             userEmail
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

