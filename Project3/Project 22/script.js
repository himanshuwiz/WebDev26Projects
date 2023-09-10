var ImgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var arrow = document.querySelector(".arrow"); 

originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.getBoundingClientRect().left; 

ImgBox.onmousemove = function(e){
    var boxWidth = (e.clientX - leftSpace) + "px"; 
    imgWrap.style.width = boxWidth;
    arrow.style.left = boxWidth; 
}

