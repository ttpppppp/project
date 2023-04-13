let sp ={ma:"SP0001" , ten: "Delicious Food" , hinh: "./image/food-1.png" , gia: "40000"};
const arrSP = [
    {ma:"SP0002" , ten: "Delicious Food" , hinh: "./image/food-1.png" , gia: "40000"},
    {ma:"SP0003" , ten: "Chicken Food" , hinh: "./image/food-2.png" , gia: "50000"},
    {ma:"SP0004" , ten: "Burgeer Food" , hinh: "./image/food-4.png" , gia: "60000"},
    {ma:"SP0004" , ten: "Burgeer Food" , hinh: "./image/food-5.png" , gia: "60000"},
    {ma:"SP0004" , ten: "Burgeer Food" , hinh: "./image/food-6.png" , gia: "60000"},
    {ma:"SP0004" , ten: "Burgeer Food" , hinh: "./image/food-7.png" , gia: "60000"},
    {ma:"SP0004" , ten: "Burgeer Food" , hinh: "./image/food-8.png" , gia: "60000"},
    {ma:"SP0004" , ten: "Burgeer Food" , hinh: "./image/food-3.png" , gia: "60000"}
];
var str = "";
for(let i = 0 ; i < arrSP.length ; i++){
    str+= `<div class="box">
    <a href="" class="ri-heart-line wishlist-icon"></a>
    <div class="img">
        <img src="${arrSP[i].hinh}" alt="">
    </div>
    <div class="content">
        <h3>${arrSP[i].ten}</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <span> (50) </span>
        </div>
        <div class="price">${arrSP[i].gia} <span>$50.00</span></div>
        <p href="" class="btn" onclick = "addCart();">add to card</p>
    </div>
    </div>
    `
}
document.querySelector(".dssp").innerHTML = str;
let soLuong = 0;
const arrCart = [];
function addCart(){
    soLuong++;
    document.querySelector(".cartNo").innerText = soLuong;

}