function $(selector){
 //this.dom = document.querySelector(selector);
//console.log(selector);
	if(selector instanceof Object)
	{
		$.prototype.dom = selector;
	}else{
		$.prototype.dom = document.querySelector(selector);
	}
	return $.prototype;
}

$.prototype.aa = function(fun){
 this.dom.onclick = fun;
}

$.prototype.text = function(){
	return this.dom.innerHTML;
}
