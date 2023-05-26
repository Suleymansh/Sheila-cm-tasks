const ad=prompt('adinizi daxil edin?')

// exception handling
try{
console.log(ad.toUpperCase())
}catch(err){
console.log('error cixdi')
console.log(err)
console.log(err.message);
console.log(err.stack);

}finally{
    console.log('nehayet..')
}
    
console.log('heyat davam  edir..')

// try,catch sytax errorlari cixarmir, ancaq runtime errorlari cixarir