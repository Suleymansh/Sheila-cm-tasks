const domains = [
  {
    id: 0,
    name: "baki.az",
    owner: {
      name: "ali",
      age: 17,
      gender: "man",
      job: "fe",
    },
  },
  {
    id: 1,
    name: "fe.az",
    owner: {
      name: "aydan",
      age: 15,
      gender: "woman",
      job: "be",
    },
  },
  {
    id: 2,
    name: "fs.com",
    owner: {
      name: "tesla",
      age: 15,
      gender: "woman",
      job: "fs",
    },
  },
  {
    id: 3,
    name: "zoo.com",
    owner: {
      name: "zabilia",
      age: 20,
      gender: "man",
      job: "qa",
    },
  },
  {
    id: 4,
    name: "zatachivak.com",
    owner: {
      name: "pakitotunak",
      age: 28,
      gender: "man",
      job: "designer",
    },
  },
];


// 1. document-e baki.az - ali - man  yazdirmalisiniz. [forEach]
//  const result=domains.forEach(domain,index)=>{
//  if( domain.name==="baki.az")
// }
// )

domains.forEach((domain,index)=>{
    if (domain.name === "baki.az") {
        document.write(
          domain.name + " - " + domain.owner.name + " - " + domain.owner.gender );
    }

})

// 2. gender-i woman olan domain-leri massive yigin. Massivi console-a yazdirin. (filter)
//  const result =domains.filter((domain)=>domain.owner.gender==="woman")
// console.log(result);

// / 3. id-si 3 olan domaini tapin. (find)
//  const result= domains.find((domain)=>
//  domain.id===3
// )
// console.log(result);

// 4. owner-nin adi 'a' ile biten domain-leri massive yigin. (filter, endsWith)
// const result=domains.filter((domain)=>{
//     return domain.owner.name.endsWith('a')

// })
// console.log(result );

// / 5. domain-lerin sahiblerinin adlari oldugu massiv yaradin. (map) [ali, tesla, zabilia]
// const result= domains.map((domain)=>{

//     return domain.owner.name
// })
// console.log(result);
// 6. owner-nin yasi (15-20) arasi olan (15den boyuk, 20den kicik) domain-leri tapin. (filter)

// const result= domains.filter((domain)=>{

//     return domain.owner.age > 15 && domain.owner.age < 20;
// })
// console.log(result);

// 7. owner-inin job-u designer olan domainin index-ni tapin. (findIndex)

// const result= domains.findIndex((domain)=>{
//     return domain.owner.job==='designer'

// })
// console.log(result);
//  8. ancaq owner-lerinin melumatlarinin oldugu massiv yaradin. (map) 
// const result= domains.map((domain)=>
//    domain.owner

// )
// console.log(result);
// 9. .com ile biten domain-leri tapin. (filter)
// const result= domains.filter((domain)=>
//      domain.name.endsWith('.com')
// )
// console.log(result);

// 10. .az ile biten domain-lerin owner-larinin adlari oldugu massiv yaradin. (filter, map)
// const result=domains.filter((domain)=>
//   domain.name.endsWith('.az')
// ).map((domain)=>
// domain.owner.name
// )
// console.log(result);
//  11. .az ile biten domain-lerin owner-larinin yaslarinin cemini hesablayin (filter, forEach)
// const result=domains.filter((domain)=>
//   domain.name.endsWith('.az')
// )
// totalAge=0
//  result.forEach((domain) =>
//   totalAge += domain.owner.age
//   );
// console.log(totalAge);

// 12. en uzun ada malik olan domain-i tapin (forEach)
// let longestDomain = null;

// domains.forEach((domain) => {
//   if (!longestDomain|| domain.name.length > longestDomain.name.length) {
//     longestDomain = domain;
//   }
// });

// console.log("Domain with the longest name:", longestDomain);
// 13. en yasli owner-e sahib olan domain-i tapin. (forEach)
// let oldestDomain = null;
// let oldestOwnerAge = 0;

// domains.forEach((domain) => {
//   if (domain.owner.age > oldestOwnerAge) {
//     oldestOwnerAge = domain.owner.age;
//     oldestDomain = domain;
//   }
// });
// console.log(oldestDomain);

// 14. ozunun ve ya owner-nin adinda n olan domain-leri tapin. (filter)

// const domainsWithNameN = domains.filter((domain) =>
//   domain.owner.name.toLowerCase().includes("n")
// );
// console.log(domainsWithNameN);








