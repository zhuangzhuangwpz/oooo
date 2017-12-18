var lis=document.querySelectorAll("li");
var imgs=document.querySelectorAll("img");
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
            imgs[j].style.display="none";
        }
        imgs[this.index].style.display="block";
        lis[this.index].className="bg";
    }
}