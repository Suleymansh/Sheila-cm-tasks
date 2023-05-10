// 1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.
//  const arr = new Array(5)

//  for( let i=0; i<arr.length; i++){

// let number = prompt(' eded daxil et :')
// arr[i]=number

//  }
//  console.log(arr);

// 2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin.

//  const multiplication= ()=>{
//   let multi = 1
//   for( let i=0; i<arr.length; i++){
//  multi *= arr[i];

//   }
// return multi

//  }
//   let arr = [2,2];
//  console.log(multiplication(arr));
// 3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.

// const multiply =(...arr)=>{
//   if(arr.length===0){
//     return 0
//   }
//   return arr.reduce((a,b)=> a*b)
// }
//  console.log(multiply(5,8,10));
//   console.log(multiply(0));

// 4. convertElementsToItsLengths(arr) -> stringlerden ibaret array alir. geriye elementlerin uzunluqlarindan ibaret massiv qaytarir.

//  const convertElementsToItsLengths =(arr)=>{
//   let lengtharr= []

//   for( let i=1;i<arr.length; i++)
//   {
//     lengtharr.push(arr[i].length)

//   }

//   return lengtharr

//  }
//  console.log(convertElementsToItsLengths( 'klg'));
// 5. findMax(arr) -> arraydaki en boyuk ededi geri qaytarir.

//     let arr=[ 2,5,8,10]

//  console.log(Math.min(...arr))
//  6. findLongest(arr) -> arraydaki en uzun stringi geri qaytarir.
// let arr = [' Sheila', ' Samishko', 'Aga'];

//  const findLongest=(...arr)=>{
//   let long = '';
//    for(let i=0; i<arr.length; i++){
//     if( arr[i].length > long.length){
//      long = arr[i]
//     }

//    }
//    return long;
//  }
//  console.log(findLongest('apricotm','apple','ananasa'));
// 7. Mesaj obyektlərindən ibarət massiv yaradın. Obyektin {sender, receiver, hasRead} fieldları var. 5 element əlavə edin. Funksiya yaradın ki, ancaq oxunanları geri qaytarsın. (hasReadi true olanları)
// 8. Write a JavaScript function to clone an array.
//  let arr=[1,2,5,6]
//   let arr2 = [...arr]
//   arr.push(9)
//   console.log(arr2);
// 9. Write a function that converts an array of values from miles to kilometres.
// 10. Funksiya yaradın ki, verdiyimiz massivdəki cüt ədədlərdən ibarət yeni massiv haradib geri qaytarsın.
// const getEvenNumbers=(...arr)=>{

// return arr.filter((num)=>num%2===0)
// }

// console.log(getEvenNumbers(2,10,3,8,23,28,43,36));
//  Funksiya yaradın ki, əlifba sırasındakı yerini verim hərfi geri qaytarsın.  (Elifba massivi yaradın. 26 hərf olsun. ) 1-a, 26-z və s.

// const getLetterByPosition = (index) => {
//   const alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   return alphabet[index-1]
// };

// console.log(getLetterByPosition(25));
// verilmish  massivde ededlerin cemini hesabla
// function cem(...arr) {
//     let sum=0
//     for(let i=0; i<arr.length; i++){
//           sum+=arr[i]
//     }
//     return sum
// }
//    console.log(cem(2,5,3));
// ikinci yol
//    function cem(arr) {
//      let sum = 0;
//      for (let eded of arr) {
//        sum += eded;
//      }
//      return sum;
//    }
//    console.log(cem([2, 5, 3]));

// familysentences(momName, dadName, Children)
// output  Our family consist of 5 people. Mother name: Ruhiyya, Father name: Vugar, Children: Sheila

// function familyToSentences(momName, dadName, ...childrenName) {
//      let children = childrenName.join(",");
//      let sentence = ` Mother name: ${momName},Father name:${dadName}, child:${children}.`;
//      return sentence
// }
// console.log(familyToSentences("Ruhiyya", "Vugar", "Sheila", 'Qarib', 'Samish'));
// task: massiv yaz icindeki  adlarin hansini cagirsam, onin indexini versin

//  let arr=['Sheila', 'Samisho', 'Qarib' ,'Aga']
//  const findIndex=(name)=>{
//   let index= arr.indexOf(name)
//   if(index !== -1){
//     return index
//   }

// return 'not found'
//  }
// console.log(findIndex("Sheila"));

// / 1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.
//  const arr = new Array(5)

//  for( let i=0; i<arr.length; i++){

// let number = prompt(' eded daxil et :')
// arr[i]=number

//  }
//  console.log(arr);

/////////////////////////////////////////
// let arr = ["Sheila", "Samisho", "Qarib", "Aga", 'Qerenfil']
// // Outputda Q deyende  Qarib, Qerenfil gelsin

// function filterByStartWitdh(text){
//     const arr =[]
//     for(let elem of arr){
//         if(wlwm.startsWith(text)){
//             arr.push(elem)
//         }
//     }
// }

// console.log(filterByStartWitdh('a'));
