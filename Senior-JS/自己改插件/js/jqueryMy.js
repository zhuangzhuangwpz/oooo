/**
 * Created by lenovo on 17/9/25 025.
 */
function $(sekector){
    this.dom=document.querySelector(selector);
}
$.prototype.click=function(fun){
    this.dom.onclick=fun;
}