const  folder= document.getElementById("folder");
const windowDiv = document.getElementById("window");
const close= document.getElementById("close-btn");

folder.addEventListener("click", function(){
    windowDiv.style.display="block"
})

close.addEventListener("click", function(){
      windowDiv.style.display = "none";

})

