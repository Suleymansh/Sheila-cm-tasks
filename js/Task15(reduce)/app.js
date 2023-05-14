// reduce metodu ile  tek ve ya cur ve yaxudda hem tek hem cut methodu tapin

// birinci yol
// const ededler = [11, 14, 23, 24, 26, 28, 87, 67, 66, 64, 69, 98, 8, 76, 45, 76, 34]
//  let cutsay=ededler.reduce((a,b)=>{
//   if(b%2===0){
//     return a+1
//   }
// return a
//  },0)
//  console.log(cutsay)

//  ikinci yol

// const ededler = [11, 14, 23, 24, 26, 28, 87, 67, 66, 64, 69, 98, 8, 76, 45, 76, 34]

// let evenNum=ededler.reduce((a,b)=b%2===0 ? a+1: a,0)

// console.log(evenNum);

// hem tek hem cutlerin sayini tap
// let umumiSay=ededler.reduce((a,b)=>{
//   if(b%2===0){
//     a[0]++
//   }
//   else{
//     a[1]++
//   }
//   return a
// },[0,0])
// console.log(umumiSay)

// ve ya hem cut hem tek ededleri tapsin.

// let umumiSay=ededler.reduce((a,b)=>{
//   if(b%2===0){
//     a.even++
//   }
//   else{
//     a.odd++
//   }
//   return a
// },{
//   even:0,
//   odd:0
// })
// console.log(umumiSay)
