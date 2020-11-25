let body = document.querySelector('body')

function submitData(name, email){
    let url = "http://localhost:3000/users";
    return fetch(url, {
        method:'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then(data => {
        document.body.innerHTML = data['id']
    })
    .catch(err => {
         document.body.innerHTML = err.message

    })
}























// console.log('Hello World')
//
// let url = "http://localhost:3000/dogs"
//
// // i can prewrite data and configs
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// // I can also write on the fly
//
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type":'application/json',
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// })
// .then( res => res.json())
// .then( data => console.log(data))
// .catch(err => console.log(err))
