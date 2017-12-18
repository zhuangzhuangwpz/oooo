var tbody=document.querySelector("tbody");
tbody.addEventListener("click",function(x){
    var taeget= x.target;
    if(taeget.className==="puls"){
        var next=taeget.nextSibling;
        var nextHtml=next.innerHTML;
        if(Number(nextHtml)===0){

        }else {
            next.innerHTML=Number(nextHtml)-1;
        }
    }else if(taeget.className==="add"){
        var pre=taeget.previousSibling;
        var preHtml=pre.innerHTML;
        pre.innerHTML=Number(preHtml)+1;
    }
    var jiage1=(document.querySelector(".jiage1")).innerHTML;
    var jiage2=(document.querySelector(".jiage2")).innerHTML;
    var one=(document.querySelector(".one")).innerHTML;
    var two=(document.querySelector(".two")).innerHTML;
    var heji1=document.querySelector(".heji1");
    var heji2=document.querySelector(".heji2");
    var heji=(document.querySelector(".heji"));
    heji1.innerHTML=Number(jiage1)*Number(one);
    heji2.innerHTML=Number(jiage2)*Number(two);
    heji.innerHTML=Number(heji1.innerHTML)+Number(heji2.innerHTML);
});
