var str="	室内装修";
function biaoti() {
	str=str.substring(1,str.length)+str.substring(0,1);
	document.title=str;
}
window.setInterval("biaoti()",500);
            function  checkName(){
                var a=document.getElementById("name").value;
                if(a==""){
                    alert("No Nmpty");
                }
            }

            function checkAge(){
                var a=document.getElementById("age").value;
                if(a==""){
                    alert("No Nmpty")
                }
            }

            function  checkIdCard(){
                var a=document.getElementById("idCard").value;
                if(a.length==18){
                    document.getElementById("idCardSpan").innerHTML="<span>ok</span>";
                }else{
                    document.getElementById("idCardSpan").innerHTML="<span>no</span>";
                }
            }

            function  checkEmail(){
                var a=document.getElementById("email").value;
                var b=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(b.test(a)){
                    document.getElementById("emailSpan").innerHTML="格式正确";
                }else{
                    document.getElementById("emailSpan").innerHTML="格式错误";
                }
            }

            function  checkPhoneNum(){
                var a=document.getElementById("phoneNum").value;
                if(a.length==11){
                    document.getElementById("phoneNumSpan").innerHTML="<span>ok</span>";
                }else{
                    document.getElementById("phoneNumSpan").innerHTML="<span>no</span>";
                }
            }

            function  checkPwd(){
                var a=document.getElementById("pwd").value;
                if(a==""){
                    document.getElementById("pwdSpan").innerHTML="密码不能为空";
                }else if(a.length<6 || a.length>10){
                    document.getElementById("pwdSpan").innerHTML="长度不能小于6位或大于10位";
                }else if(!isNaN(a)){
                    document.getElementById("pwdSpan").innerHTML="密码不能为纯数字";
                }else{
                    document.getElementById("pwdSpan").innerHTML="<span></span>";
                }
            }

            function  checkPwd2(){
                var a=document.getElementById("pwd").value;
                var b=document.getElementById("pwd2").value;
                if(a!=b){
                    document.getElementById("pwd2Span").innerHTML="密码不一致";
                }else{
                    document.getElementById("pwd2Span").innerHTML="密码正确";
                }
            }