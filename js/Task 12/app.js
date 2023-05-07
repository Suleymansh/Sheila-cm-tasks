
// verilmish massivde tek ededlerde tek, cut ededlerde cut qaytarsin

let arr = [12, 25, 26, 13, 27];

let newArr = arr.map((num) => (num % 2 === 0 ? "cut" : "tek"));
console.log(newArr); 
// 1 ci yol


//  arr.filter((num) => num % 2 === 0 ).sort((a,b)=> a-b).forEach((eded)=>console.log(eded))
//   ikinci yol
