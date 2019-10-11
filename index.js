// Add your code here
const usersUrl = "http://localhost:3000/users"
const script = document.querySelector("script");

function submitData(userName, userEmail) {
  return fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
    .then(response => response.json())
    .then(json => appendId(json))
    .catch(error => renderError());
}

function appendId(json) {
  const userId = document.createElement("p");
  userId.innerHTML = json.id;
  script.appendChild(userId);
}

function renderError() {
  const errorMsg = document.createElement("p");
  errorMsg.innerHTML = "Unauthorized Access";
  script.appendChild(errorMsg);
}
