// Add your code here

function submitData(userName, userEmail) {

    const formData = {name: userName, email: userEmail};

    function appendToDom(json) {
        const id = json["id"];
        document.body.append(id);
    };

    function appendMessage(error) {
        document.body.append(error.message)
    }

    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)})
    .then(resp => resp.json())
    .then(json => appendToDom(json))
    .catch(error => appendMessage(error));
}

submitData("Donnovan", "dl29@me.com")