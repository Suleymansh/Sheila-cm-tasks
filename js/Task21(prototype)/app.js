// String.prototype.toCapitalCase=function(){

//     return this.replace(this[0], this[0].toUpperCase())
// }

// let ad ='sheila'
// ad=ad.toCapitalCase()
// console.log(ad);
// Array.prototype.clear=function(){

// this.length = 0;
//     return  'clear'
// }
// const arr=[1,2,3,4]
// arr.clear()
// console.log(arr)

// String.prototype.hide = function () {
//   return this.slice(0, 3) + "*".repeat(this.length - 3);
// };
// let soz = "Sheila";
// result = soz.hide();
// console.log(result);

// Number.prototype.isEven=function(){
//   return this%2==0 ? true :false
// }

// const ed=13
//  result =ed.isEven()
// console.log(result);

//  Array constructoruna isEmpty() , removeDuplicates(), removeFalsies(), clear() methodlari elave edin. Diqqet edin ki, bu methodlar butun yaradilan massivlerde olmus olsun. (Array.prototype-a elave edilsin)

// clear() komple massivi temizleyir
Array.prototype.clear = function () {
  this.length = 0;
  return "clear";
};
const arr = [1, 5, 6, 8];
arr.clear();
console.log(arr);

// isEmpty()  massivin b osh olub olmadigini yoxlayir
Array.prototype.isEmpty = function () {
  return this.length === 0;
};
const arr1 = [];
result = arr1.isEmpty();
//  bos olanda true olacaq eks halda false olacaq
const arr2 = [5, 635, 54, 5];
result1 = arr2.isEmpty();
//  false olacaq
console.log(result);

// removeDuplicates()    dublikat olanlari silir

Array.prototype.removeDuplicates= function(){
    return this.filter((elem,index)=>
    this.indexOf(elem) === index)}
    const arr3=[1,5,63]
    console.log(arr3.removeDuplicates())

// removeFalsies();
// false, null, undefined, 0, "", NaN; olarsa onlari aradan qaldiracaq
Array.prototype.removeFalsies=function(){
    return this.filter(Boolean)
}
   const arr4 = [1, 5, 63,5,0];
   console.log(arr4);


// . Object constructoruna objLength(), firstProperty(), lastProperty() kimi methodlar elave edin. 

Object.prototype.objLength = function () {
  return Object.keys(this).length;
}

const obj5={
    name: "Sheila",
    age:25
}
console.log(obj5.objLength()) 




 Object.prototype.firstProperty = function () {
  for (let key in this) {
    return this[key];
 } 
  return undefined;

 };
 console.log(obj5.firstProperty()); 



 Object.prototype.lastProperty = function () {
  let lastKey;
  for (let key in this) {
    lastKey = key;}

  return this[lastKey];
 };


 // 3. Number constructoruna isPrime(), isEven(), isInfinity() kimi methodlar elave edin. 
  Number.prototype.isInfinity = function () {
  return this === Infinity || this === Infinity;
  };
  
  const number4 = -Infinity;
console.log(number4.isInfinity()); // true
// isEven()

// Number.prototype.isEven=function(){
//   return this%2==0 
// }

// const ed=13
//  result =ed.isEven()
// console.log(result);

class Vehicle {
  constructor(fuel, wheelCount, landOrAir) {4
this.fuel=fuel
this.wheelCount=wheelCount
this.landOrAir=landOrAir
}
}
const Vehicle1= new Vehicle('')


