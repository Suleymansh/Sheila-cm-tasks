

// const obj={
//     name: 'sheila',
//     surname: 'Suleyman',
//     age:23,
//     friends: undefined,
//     car:null,
//     doing:()=>{
//         console.log(' coding...')
//     }
// }




// // burda fronta gonderir
// const  dataFromFe=JSON.stringify(obj)
// console.log(dataFromFe);

// // burda ise backe bu shekilde gonderir, back bu shekilde alir 
// const dataFromBe=JSON.parse(dataFromFe)
// console.log(dataFromBe)

// const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).
// then((resp)=>resp.json())
// .then((users)=>{
//     users.forEach((user)=>{
//         document.write(`<p> ${user.name} </p>`) 
//     })
// })

// axios.get(url).then((resp)=>{
// document.write(resp.data);
// })


// const axios = require("axios");

// const url = "https://www.themealdb.com/api/json/v1/1/random.php"

// axios
//   .get(url)
//   .then((response) => {
//     // İstek duzgun oldugda bura ishleyir
//     const meal = response.data.meals[0];
//     console.log("Yemek Tarifi:");
//     console.log("İsim:", meal.strMeal);
//     console.log("Kategori:", meal.strCategory);
//     console.log("Tarif:", meal.strInstructions);
//     console.log("Resim URL:", meal.strMealThumb);
   
//   })
//   .catch((error) => {
// //   error oldugda burda gosterir
//     console.error("Yemek tarifi alınamadı:", error);
//   });
const url = "https://swapi.dev/api/people/";
    
axios.get(url)
.then((resp)=>{

console.log(resp.data.results);
})

