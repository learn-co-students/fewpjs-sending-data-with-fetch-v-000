const { config } = require("chai")

// Add your code here
function submitData(name, email) {
  const formData = {name: name, email: email}
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify(formData)
  }
  return fetch("http://localhost:3000/users", config).then(resp=>resp.json()).then(response=>{
    console.log(response)
    const p = document.createElement('p')
    p.innerHTML = `Hi user scum #${response.id}`
    document.body.appendChild(p)
  })
  .catch(error=>{
    alert("no")
    const p = document.createElement('p')
    p.innerHTML = "Unauthorized Access"
    document.body.appendChild(p)
  })
}