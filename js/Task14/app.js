// 1)ForEach metodundan istifadə edərək, rəqəmlər massivini giriş kimi qəbul edən və hər elementin kvadratı ilə yeni massiv qaytaran funksiya yazın.

// function squareArray(arr) {
//   const result = [];
//   arr.forEach((num) => {
//     result.push(num * num);
//   });
//   return result;
// }
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = squareArray(numbers);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// ashagida mapla yazmisham
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let result=numbers.map((elem)=>{
// return elem**2
// })
// console.log(result);

// 2) Promt vasitesi ile userden goturduyunuz reqemlerin azi bir-i duz olarsa geriye true qaytarsin (hamisi yox, 1-i)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let find = prompt("eded daxil et");
//  const verilen=numbers.some((elem)=>{
// return elem === find
// })
// console.log(verilen);

// 3) Array-de ededlerimiz var ve ve onlari kvadrata yukseldin, eger kvadrata yuklesdilmis ededler cutdurse, onlari yeni bir arraya yigib log-da gorsedin
//   (bu example-dir. buna baxaraq yazmayin neyi ifade etmek istemisem onu bildirirem)
// example: [8,7,9,10] => ...(proses bas verdi) [64,49,81,100] (hansilar cut ededdirse onlari *yeni* bir arrayda consolede gorsedin)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squaredEvens = numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);

// console.log(squaredEvens);
