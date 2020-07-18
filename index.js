// Add your code here
function submitData(name,email){
 return fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     "Accept": "application/json"
   },
   body: JSON.stringify({
     name: name,
     email: email
   })
 })
 //after grabbing the data.then do this
 //response -- argument
 //arrowfunction, telling ti what to do with the response
 .then((response)=>{
   return response.json()
 })
 .then((data)=>{
   document.body.innerHTML= data.id
 })
 .catch(function(error) {
   document.body.innerHTML = error.message
 });
}
