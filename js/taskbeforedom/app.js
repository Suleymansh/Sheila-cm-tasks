// ###task1. promptla name, age alsin, sonra obyekte cevirsin
// let name=prompt('enter name:')
// let age=prompt('enter age:')
// const obj={
//     name:name,
//     age:age
// }

// console.log(obj);

// ####task2. bir funk.yaz obyekt ve string , objnin icinde olan stringde varsa true eks halda true qaytarsin
// const obj={age:23, name:undefined}
// const checkHasProperty=(obj,str)=>{

//     if(str in obj){
//         return true
//     }else{
//         return false
//     }}

// console.log(checkHasProperty(obj,'age'))  true
// console.log(checkHasProperty(obj, "name"));  true
// console.log(checkHasProperty(obj, "friend")); false

// ####task3.bir func yarat , alacaq 1 ci propertysi, ikinci  value
// const objFromArrays=(arr1, arr2)=>{
// const obj={}
// for(i=0; i<arr1.length; i++){
//     const property =arr1[i]
//     const value= arr2[i]
//     obj[property] = value;
// }
// return obj
// }

// const arr1 = ["ad", "soyad", "yaş"];
// const arr2 = ["John", "Doe", 30];

// const obj = objFromArrays(arr1, arr2);
// console.log(obj);
// ve yaxudda daha qisa yazsaq---------
// const objFromArrays=(arr1, arr2)=>{
//     const obj={}
//     for(i=0; i<arr1.length; i++){
//         obj[arr1[i]]=arr2[i]
//      }
//     return obj
// }
// console.log(objFromArrays(['ad', 'soyad'], ['sheila', 'suleyman']));
// ####task4
// checkIsInside(str1, str2) adinda funksiya yaradin. Eger str2 str1-de varsa, sonuna birlesdirsin, yoxdursa evvelin birlesdirsin.
// console.log(checkIsInside('ali', 'li')) // alili
// console.log(checkIsInside('ali', 'ko')) // koali
// console.log(checkIsInside('javascript', 'as')) // javascriptas
// console.log(checkIsInside('javascript', 'type')) // typejavascript

// const checkIsInside=(str1, str2)=>
// str1.includes(str2) ?str1+str2: str2+str1

// console.log(checkIsInside('ali', 'li')) // alili
// console.log(checkIsInside('ali', 'ko')) // koali
// console.log(checkIsInside('javascript', 'as')) // javascriptas
// console.log(checkIsInside('javascript', 'type')) // typejavascript

// ####task5
// charakterCounter(str1,str2) adli funks yarat  verilmish sozde herfin nece defe tekrarlandigini  tap
// const charakterCounter=(str1,str2)=>{
// let say = 0;
// for(let i=0; i < str1.length; i++){
//  if(str1[i]===str2){
//     say++
//  }

//  }
//  return say;
// }
// console.log(charakterCounter('sheilalijktll','l'));

// // ikinci usul
// const charakterCounterV2=(str1,str2)=> str1.length-str1.replaceAll(str2, ' ').length
// console.log(charakterCounterV2('sheilaa', 'a'));
// console.log(charakterCounterV2("sheilalijktll", "h"));

// ###task6 PascalCase-i camelCase cevir
// const pascalToCamel = (str) => str.replace(str[0],str[0].toLowerCase() )
// console.log(pascalToCamel('SheilaSalam'));
// ####task7  snake-i kebab-a cevir
// const snakeToKebab=(str)=> {

// return str.toLowerCase().replaceAll('_', '-')
// }
// console.log(snakeToKebab('SALAM_NECESEN'));
// ###task8 reportLetters
const reportLetters = (str) => {
let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
console.log(reportLetters('hello'));

