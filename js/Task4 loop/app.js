//  1-den 5 e qeder ededlerin faktorialini hesablayin


// let result = 1;
// for (let i = 1; i <=6; i++) {
//   result *= i;
// }
// console.log(result);  // çıxacaq: 120

//  for( let j=0; j<5; j++){

// for( let i=0; i<j; i++){
//  document.write("*")
// }
//   document.write('<br/>')
// }

//  for( let i=0; i<=10; i++){
//     console.log(i);
//  }

// let i=0
// while (i<=100) {
//     console.log(i);
//     i++
// }

//  let randomEd =  Math.floor(Math.random()*10+1);
//  let count=1;
//   let findNum = +prompt(" Enter num:")
//   while(randomEd !== findNum ){
// count++

// if (findNum > randomEd) {
//     findNum=+prompt("ashagi");
// }
// else
// {
//    findNum=+prompt(" yuxari");
// }

//   }


//   if (count<5) {
//     alert("aferin")  
//   }
//   else{
//       alert("idare edersin");  
//   }
//   console.log(`${count} defeye evrikaa ${findNum}`)
 

// 1 den verilen  edede qeder olan ededlerin cemi

// let eded=+prompt(" eded daxil et:")


// let eded =0;
// for( let i=1; i<=5; i++){
//   eded += i


// }
//   console.log(eded)

// let text = 0;
// for(let i=1; i<=5; i++){
//   if(i===3 ){
//     break
//   }
// }
// console.log(text);

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
  break;
  }
  text += i;
}

console.log(text);
