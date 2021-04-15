var inp=document.getElementById("inputtext");
var but=document.getElementById("button");
var news=document.getElementById("newdiv");

but.addEventListener('click',function(){
        var para=document.createElement('p')
        para.innerHTML=inp.value;
        news.append(para)
        inp.value=""
        para.addEventListener('click',function(){
            para.style.textDecoration="line-through";
        })
        para.addEventListener('dblclick',function(){
            para.innerHTML=""
        })

})