function $(selector){
    //this.dom = document.querySelector(selector);
//console.log(selector);
    if(selector instanceof Object)
    {
        $.prototype.dom = selector;
    }else{
        $.prototype.dom = document.querySelectorAll(selector);
    }
    return $.prototype;
}

$.prototype.click = function(fun){
    for(var  i=0;i<this.dom.length;i++){
        this.dom[i].onclick = fun;
    }

}

$.prototype.text = function(){
    return this.dom.innerHTML;
}
