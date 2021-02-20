const bod = document.querySelector('body')

let submitData = (name, email) => {

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
        email: email
        })
    }

    return fetch("http://localhost:3000/users", configObj) 
    
    .then(resp => resp.json())

    .then(obj => {
        const idValue = document.createElement('p')
        idValue.innerHTML = obj[ "id" ]
        bod.append(idValue)
    })

    .catch(function(error) {
        const errorMsg = document.createElement('p')
        errorMsg.innerHTML = error.message
        bod.append(errorMsg)
    }) 
}


