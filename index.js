// Add your code here
// configurationObject = {
//   method: "POST",
// //   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }
// };

function submitData(name, email) {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    const config = {
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
    return fetch('http://localhost:3000/users', config)
        .then(res => res.json())
        .then(json => {
            div.innerHTML = json.id
            body.appendChild(div)
        }).catch(e => {
            div.innerHTML = e.message
            body.appendChild(div)
        })
}