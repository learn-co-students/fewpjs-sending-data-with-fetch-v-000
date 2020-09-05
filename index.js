// Add your code here
// let formData = {
//     name: "Steve",
//     email: "steve@steve.com"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };


function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (results) {
        // console.log('results', results.id)
        // document.body.appendChild(id)
        // .appendChild(document.createElement('id'));
        // var newDiv = document.createElement('div').innerText = results.id;
        // document.body.appendChild(newDiv);
        document.body.innerHTML = results.id;
        })
        .catch(function (error) {
            alert("Warning!");
            document.body.innerHTML = error.message;
        })
};