// 4. We need to swap the case of all letters in a string. Provide us a function for doing it.
// swapCase(string) : string
// Input             |     Output
// aBcD             |      AbCd
// jAvaScRIPt     |     JaVAsCripT

function swapCase (string) {
    let litter = ""
    for(let i=0;i<string.length;i++){
     let word=string[i];
     if (word=== word.toLowerCase()){
     litter+=word.toUpperCase();}
     else if (word=== word.toUpperCase()){
      litter+=word.toLowerCase();}
     }
     return litter
}
console.log (swapCase("aBcD"))
console.log (swapCase("jAvaScRIPt"))