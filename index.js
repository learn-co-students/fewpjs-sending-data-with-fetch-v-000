// Add your code here


 function submitData(name, email) {
    
    let formData = {
        name : name,
        email : email
    }

    let configObj = { 
    method: "POST",
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
    },
        body: JSON.stringify(formData)
 }
    return fetch("http://localhost:3000/users", configObj)
    .then((response)=>{return response.json()})
        .then( (obj) => {document.body.innerHTML = obj.id} )
        .catch((error) => { document.body.innerHTML = error.message })
}
