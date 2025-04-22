//Generate random colors
const randColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
      color+=hex[Math.floor( Math.random()*16)]; 
    }
    return color;
}



let fini;
document.querySelector("#start").addEventListener("click",function(){
    if(!fini){
    fini=setInterval(function(){
        document.querySelector("body").style.backgroundColor=randColor();
    },1000)
}
})
document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(fini);
   fini=null;
})