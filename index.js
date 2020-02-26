// Add your code here

let formData = {
	name: "Miriam",
	email: "mir@email.com"
}

let configObject = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify({
		name: "Miriam",
		email: "mir@email.com"
	})
}

const submitData = () =>  {

	fetch("http://localhost:3000/users", configObject)
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

const displayErrorMessageInDom = (error) => {
	let body = document.querySelector('body')
	let errorMessageDiv = document.createElement('div')
	section.innerHTML = error.message
	console.log(error.message)
	body.appendChild(errorMessageDiv)
}
