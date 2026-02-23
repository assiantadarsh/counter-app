let h1 = document.querySelector("h1");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset= document.querySelector(".reset");
let count = 0;
inc.addEventListener("click",function(){
    count++;
    h1.innerHTML = count;
    dec.disabled= false;
})
dec.addEventListener("click",function(){
    if(count>0){
        count--;
        h1.innerHTML= count;
    }
    if(count===0){
        dec.disabled = true;
    }
})
reset.addEventListener("click",function(){
    count=0;
    h1.innerHTML= count;
    dec.disabled  = true;
})