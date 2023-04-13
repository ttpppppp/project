const arrImg = [
    "row-banner.png",
    "row-banner4.png",
    "row-banner5.png",
];
var index = 0;
function fForward(){
    index++;
    if(index >= arrImg.length){
        index = 0;
    }
    document.querySelector("#myImg").src = `./image/${arrImg[index]}`;
}
function fStart(){
    setInterval(fForward,2000);
}
fStart();