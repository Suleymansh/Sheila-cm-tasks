// #task1
// function ilkHerfiDeyis( soz, ilkHerf ) {

//      return ilkHerf + soz.slice(1);

// }

// console.log(ilkHerfiDeyis( 'shehla', 'S'));

// #task2
// 1. Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).
// function splitSentences(senten) {
//   let word = senten.split(" ");
//    return  word
// }
// console.log(splitSentences("Salam men Shehlayam"));

// #task3
// 2. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.)

// removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.

// function   removeCharacterFromString( sentence) {

//    return sentence.slice(1);
// }
//  console.log(removeCharacterFromString('Alion'));
//

// #task4
//  Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox.

// const today = new Date();
// const day = today.getDay();

// function weekDay( day) {
//   if( day === 6 || day === 7){
//     alert(" cocugum ders yoxdu")
//   }
//   else{
//     alert("derse getmeliyk")
//   }

// }
// console.log(weekDay( ));

// task5
// 2. Bu gunki tarixi document.write ile html-e yazin.

// yol1
//  const today = new Date();
//  const  currentyear = today.getFullYear()
//  const currentday =  String(today.getDay()).padStart(2,'0');
//  const currentmonth = String(today.getMonth()+1).padStart(2,'0');
//  const  fulldate = (`${currentyear}- ${currentday} - ${currentmonth}`)

//  document.write(fulldate);

// yol2
// const today = new Date();
// let  date = today.toUTCString().slice(5,16)
//  console.log(date)

// yol3
// const today = new Date();
// let  date = today.toUTCString()
//  console.log(date)

// #task6

// 3. *ADVANCED* Bu gun heftenin hansi gunudur, onun adini avtomatik document-e yazin. (obyektlerden istifade ede bilersiniz)

// const days=[
//   'bazar',
//   'bazaretresi',
//   'cesenbe axshami',
//   'cersenbe',
//   'cume axshami',
//   'cume',
//   'senbe',]

// const today = new Date();
//  const weekday =  days[today.getDay()]
//  document.write(weekday)

// #task7
// 4. *ADVANCED* Bu ay hansi aydir adini document-e yazin. (obyektden istifade ede bilersiniz)
// const today = new Date();
// const weekday = today.getMonth()
//  document.write(weekday)

//  const months = [
//    "January",
//    "February",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "October",
//    "November",
//    "December", ];

//    const today = new Date()
//     const currentday = months[today.getMonth()]
//      document.write(currentday);
// #task8
// 5. Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin. Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)

//  let age =+prompt(' yashini yaz')

// let age = +prompt('yashini yaz:')
//  let omur = 77;

//   function Ezrail() {
//     if(age===77){
//       return  'seni kaybettigim ucun uzgunumm(((('
//     }
//     else{

//      return  omur -= age

//     }

//   }
//   console.log(Ezrail());
// №task9
// 6. Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun, saat, deqiqe, saniye kecib. (heresini ayrica) meselen,
// kecen il sayi: 23,
// kecen ay sayi: 234
// kecen gun sayi: 6974
// ve s.

// const lastdate = new Date("2000-05-23");
// const now =   new Date();
// const diff = now.getTime()-lastdate.getTime()

// const seconds = Math.floor(diff / 12);

// console.log(seconds);

// const birthDate = new Date("1990-01-01"); // replace with user's birth date
// const now = new Date();

// const diff = now.getTime() - birthDate.getTime();

// const seconds = Math.floor(diff / 1000);
// const minutes = Math.floor( seconds/60)
// const hours = Math.floor(minutes / 60);
// const days = Math.floor(hours / 24);
// const months = Math.floor(days / 30);
// const years = Math.floor(months / 12)

// console.log( );

// console.log(
//   `Years: ${years}, Months: ${months % 12}, Days: ${days % 30}, Hours: ${
//     hours % 24
//   }, Minutes: ${minutes % 60}, Seconds: ${seconds % 60}`
// );

// 2. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.)
//  let str = "Alion GreenHeart";
//  let point  = '.'
// //  let result = str.slice(0,7)
// //   console.log(result);   bu shekilde de yaza bilerik
//  const newstr = (str)=> str.slice(0,7).concat(point);
//   let result = newstr(str);
//  console.log(result);

//  let newGmail= prompt(' gmail daxil et: ')
//  const gmail = (validation)=>{
//   if( validation.length >=5){
//     return newGmail.concat("@gmail.com")
//   }
//   else{
//     return false
//   }
//  }
//  let result = gmail(newGmail);
//  console.log(result);

// let numbers = [5, 2, 9, 1, 5, 6];
// let numbers = 12345
// numbers.sort(function (a, b) {
//   return  b - a
// });

// function trueOrFalse(val) {
//   if (val === false || !val) {
//     return "false"
//   } else {
//     return "true"
//   }
// }

// console.log(trueOrFalse(7))

// let num = [5, 6, 56, 45, 25];
// let sum = 0;
// for(let eded in num){
//   sum += eded
// }
// console.log(sum);

// let sentence = prompt( ' daxil et:')
// function iscompany(ad) {
//   if (ad.toUpperCase().endsWith("MMC")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(iscompany(" alffbj Mmc"));
// iscompany(obj);


// const iscompany = (ad) => ad.toUppercase().endsWith("MMC");
// console.log(iscompany(" alffbj MMC")); evde yoxla

// let emojis = "👩👨🧑👧👦🧒👶👵👴🧓👩‍🦰👨‍🦰👩‍🦱👨‍🦱👩‍🦲👨‍🦲👩‍🦳👨‍🦳👱‍♀️👱‍♂️👸🤴👳‍♀️👳‍♂️👲🧔👼🤶🎅"

// let randomeded =  Math.floor(Math.random()*emojis.length)

// console.log( emojis[randomeded]);


// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

// let  eded= prompt(' eded daxil et')

// for (let i = eded; i <= 99; i += 7) {

// console.log(eded);
// }

