// Add your code here
function submitData(name, email) {
  let dataObject = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(dataObject)
  };

  fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(results => {
      const body = document.querySelector("body");
      const h2 = document.createElement("h2");
      h2.innerHTML = results.id;
      body.appendChild(h2);
    })
}
