// Add your code here

// configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// };

fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
});