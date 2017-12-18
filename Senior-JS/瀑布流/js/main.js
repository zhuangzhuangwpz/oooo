window.onload = function () {
    imgLocation();

    var imgData = [{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]

    window.onscroll = function(){
        //如果为true的时候滚动浏览器的时候追加内容
        if(check()){
            var container = document.querySelector(".container");

            for(var i=0;i<imgData.length;i++){
                var addbox = document.createElement("div");
                addbox.className = "box";
                container.appendChild(addbox)
                var addboximg = document.createElement("div");
                addboximg.className = "box_img";
                addbox.appendChild(addboximg);
                var addimg = document.createElement("img");
                addimg.src = "img/"+imgData[i].src;
                addboximg.appendChild(addimg);
            }
            imgLocation()
        }
    }

};

//如果滚动条滚动到最后一张图片的时候，那么执行。
function check(){
    var ieHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //滚动条滚动的距离
    var clineTop = document.documentElement.scrollTop || document.body.scrollTop;
//最后一张图片距离顶部的高度
    var box = document.querySelectorAll(".box");
    var boxTop = box[box.length-1].offsetTop;
    if(boxTop< ieHeight+clineTop){
        return true;
    }
}


function imgLocation() {

//固定 container的宽度，一排能放几张图片
//先检测浏览器当前宽度，然后获取第一张 box的宽度

    var container = document.querySelector(".container");
    var box = document.querySelectorAll(".box");
//一张图片的宽度
    var boxWidth = box[0].offsetWidth;
//当前浏览器的宽度
    var ieWidth = document.documentElement.clientWidth || document.body.clientWidth;
//一排图片的摆放个数
    var num = Math.floor(ieWidth / boxWidth);
//一张图片的宽度 * 一排图片的个数，= container的宽度
    container.style.width = boxWidth * num + "px";

//让除第一排的图片偏移到最短的那个的高度
    var boxHeightArr = []; //盒子高度的数组
    for (var i = 0; i < box.length; i++) {
        if (i < num) {
            boxHeightArr[i] = box[i].offsetHeight; //把第一排的图片的高度赋值给盒子数组
        } else {
            box[i].style.position = "absolute";
            //一排中最矮的那张图片的高度
            var getMinBox = Math.min.apply(null, boxHeightArr);
            //获取一排中最矮的那张图片位置
            var minIndex = boxMinHeight(boxHeightArr, getMinBox);
            box[i].style.top = boxHeightArr[minIndex] + "px";
            box[i].style.left = box[minIndex].offsetLeft + "px";
            //盒子数组的最小高度 = 盒子数组的最小高度加上当前循环的图片位置的偏移高度
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + box[i].offsetHeight;
        }
    }
}

//获取最矮的那张图片的位置
function boxMinHeight(boxHeightArr, getMinBox) {
    for (var i in boxHeightArr) {
        if (boxHeightArr[i] == getMinBox) {
            return i;
        }
    }
}

