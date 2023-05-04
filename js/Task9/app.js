// prop2Taker adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin. Mes:

// prop2Taker({  one: 1,  'prop-2': 2})  // 2
// prop2Taker({  'prop-2': 'two',  prop: 'test'})  // 'two'

// function prop2Taker(obj) {
//   console.log(obj["prop-2"]);
// }
// prop2Taker({ one: 1, "prop-2": 2 });
// prop2Taker({  'prop-2': 'two',  prop: 'test'})
 

// #task2.
// propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin. Mes:

// propertyTaker({  continent: 'Asia',  country: 'Japan'}, 'continent') // 'Asia'
// propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  // 'Sweden'
// propertyTaker({name:'ali', age:12}, 'name')  // 'ali'

// function propertyTaker(obj, propertyName) {
//     console.log(obj[propertyName])

// }
// propertyTaker({ continent: "Asia", country: "Japan" }, "continent"); // 'Asia'
// propertyTaker({  country: 'Sweden',  continent: 'Europe'}, 'country')  // 'Sweden'
// propertyTaker({name:'ali', age:12}, 'name')  // 'ali'

// #task3.
// existsAndTruthy adinda funksiya yaradin. Argument kimi obyekt(obj) ve string (propertyName)  alsin. Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes,

// existsAndTruthy({a:1,b:2,c:3},'b') // true
// function existsAndTruthy(obj, propertyName) {
//     if (obj[propertyName]) {
//         return true;
//     } else return false;
// }

//  console.log(existsAndTruthy({ a:1, b:2, c:3 }, "b")) // true
//  console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'))  // false (obyektde 'y' var amma falsy-di ona gore false)
//  console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z')) // false  (obyektde 'z' yoxdu ona gore false)

// #task4
// laptop obyekti yaradin. name ve price-i prompt-la verilsin. Daha sonra hemin mehsulun endirimde olmasini sorusdun (confirm) ile. Eger endirimdedirse, price-in 20% qeder endirim tetbiq edilsin. Yekunda, console-a mehsulun adi ve qiymeti cixarilsin.

//  const laptop ={
//     name: prompt(' name enter'),
//     price: +prompt(" enter price")
//  }

//   let isDiscounted = confirm(" Bu mehsul endirimdedir?");
//    let faiz = 0.8;

//   if (isDiscounted){
// faiz *= laptop.price;
//   }

//  console.log(  `Laptopun adi :${laptop.name}, qiymeti: ${faiz}`);
