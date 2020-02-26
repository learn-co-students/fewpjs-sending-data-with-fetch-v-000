// Add your code here

function submitData(name, email) {

	return fetch("http://localhost:3000/users", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify({
		name,
		email
	})
})
	.then(response => response.json())
	.then(result => {
		let id = result.id
		let p = document.createElement('p')
		let body = document.querySelector('body')
		p.innerHTML = id
		body.appendChild(p)
	})
	.catch( (error) => {
		alert("problem");
		displayErrorMessageInDom(error)
	})

}

function displayErrorMessageInDom(error) {
	let body = document.querySelector('body')
	let errorMessageDiv = document.createElement('div')
	errorMessageDiv.innerHTML = error.message
	// console.log(error.message)
	body.appendChild(errorMessageDiv)
}
