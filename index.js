// Add your code here
const submitData = function(name, email) {

    const requestBody = {
        name: name, 
        email: email
    };

    const userForm = document.querySelector("#userForm")

    const  configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(requestBody)
    }; 

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(json => 
            Object.keys(json) => 
                const h1 = document.createElement('h1');
                h1.textContent = id;
            
            );
}

// let ids = json.map(user => {
//     return `<h1>${user.id}</h1>`
// })
// userForm.innerHTML = ids;