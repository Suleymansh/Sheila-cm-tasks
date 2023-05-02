// prop2Taker adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin. Mes: 

// prop2Taker({  one: 1,  'prop-2': 2})  // 2
// prop2Taker({  'prop-2': 'two',  prop: 'test'})  // 'two'

function prop2Taker(obj) {
 console.log(obj['prop-2']);


}
prop2Taker();