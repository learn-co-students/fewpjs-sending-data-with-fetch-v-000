// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
           name: name,
           email: email 
        })
    })
        .then(response => response.json())
        .then(function(object){
            let userId = object["id"];
            let body = document.querySelector("body");
            body.append(userId);
        })
        .catch(function(errorResponse) {
            let errorMessage = errorResponse['message'];
            let body = document.querySelector("body");
            body.append(errorMessage);
        })
}