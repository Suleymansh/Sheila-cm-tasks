function reverseNum(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
return reversed;
}


function tersCevir(sayi) {
  let tersi = 0;
  while (sayi > 0) {
    tersi = tersi * 10 + (sayi % 10);
    sayi = Math.floor(sayi / 10);
  }
  return tersi;
}

function ededlerinCemi(sayi) {
  let cem = 0;
  while (sayi > 0) {
    cem += sayi % 10;
    sayi = Math.floor(sayi / 10);
  }
  return cem;
}






// looplara aid task 
//  1)
//  for( let i=1; i<=10; i++){
//   console.log(i);
//  }
// 2)
//  setInterval(() => {
//    console.log(5);
//  }, 5000);
//  3)
//  function numPow( num1, num2) {
//     return num1**num2
//  }
//   let netice = numPow(2,5)
//   console.log( netice);
//  3)
// console.log(Math.pow(2,5))
// 4)
//  for( i=0; i<=8; i++){
//   for (j = 1; j <= i; j++) {
//     document.write(  j + "")
//   }
//     document.write('<br/>');
//  }

// 1. Daxil etdiyiniz ededi tersine cevirib log-da bildirsin
//   Meselen: console.log(reverseNum(123)) // 321;

// function  reverseNum(num) {
//    const reserved =parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
//    return reserved; 
// }
// console.log(reverseNum(123456789)); // 321
// izah: toString  daxil etdiyimiz ededi stringe cevririr, split onlari  bir bir ayirir, reverse verilen ededi tersine cevirir, join metodu ise en sonda onlari birleshdirir, Math.sign  ise ededi Math.sign(3); // 1
// Math.sign(-3); // -1
// Math.sign("-3"); // -1
// Math.sign(0); // 0
// Math.sign(-0); // -0
// Math.sign(NaN); // NaN
// Math.sign("foo"); // NaN
// Math.sign(); // NaN



// 2.Verdiyim araliqlarda random eded create eden function yazin:
//   Meselen: console.log(genNum(1,100)) // random int between 1 to 100
  
function genNum( min, max){
   const random =  Math.floor(Math.random(max-min) +1) +min
   return random;
}
 console.log(genNum(4, 400));

// 3.Verilen reqem, ededlerin cemini hesablasin(Unlimited eded daxil etmek olur);
//   Meselen: console.log(addNumber(2,10,10,20,13,15))// 70

// function addNumber(){
//   let sum=0;
//  for(  let i=0; i<=3; i++){
//  sum += i;
//  }
// return sum;
// }

// console.log(addNumber());
// 4.Verile array-lari birlesidren function yazin (array methodlarini search ede bilersiz);
//   Mesele: console.log(addArrays([2,3,4],[6,4,9],[34,6,4])) // [2, 3, 4, 6, 4, 9, 34, 6, 4]

// function addArrays(...arrays) {
//   return arrays.flat();
// }
// console.log(addArrays([2,3,4],[6,4,9],[34,6,4])); // [2, 3, 4, 6, 4, 9, 34, 6, 4]


//  ...arrays yazmagla istenilen qeder massiv  yeni sonsuz sayda massiv yaradilir
