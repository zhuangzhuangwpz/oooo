//function $(selector){

//如果$在调用的时候前面没有new，
//那么这个$方法里的this是window对象,
//如果在$调用的时候前面有new
//那么$方法中的this 是实例

//    this.dom=document.querySelector(selector);
//}
//$.prototype.click=function(fun){
//    this.dom.onclick=fun;
//}


//方法二


function $(selector){
     this.dom=document.querySelector(selector);
    //console.log(document.querySelector(selector));    button按钮
    console.log(this);

}
$.prototype.click=function(fun) {
    this.dom.onclick=fun;
    console.log(fun);
}



/*
直接调用前面没有 new 的写法
function $(selector){
    this.dom=document.querySelector(selector);
    console.log(this);   //这个this 是window
    var obj= $.prototype.init(selector);
    return obj;
    $.protoype.dom=document.querySelector(selector);
    return $.prototyope;
}
$.prototype.init=function(selector){
    this.dom=document.querySelector(selector);
    console.log(this)   //这个this 是 $protoype.init
    return this;
}
$.prototype.click=function(fun){
    this.dom.onclick=fun;
}
    */