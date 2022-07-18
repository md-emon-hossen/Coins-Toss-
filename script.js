var coin=document.querySelector(".img");
var showMessege=document.querySelector(".show");
var flowerBtn=document.querySelector(".flowerBtn");
var manBtn=document.querySelector(".manBtn");

var coins=["img/1.jpg","img/2.jpg"];

function toss(){

    var randomNumber=Math.floor(Math.random()*2);
    coin.src=coins[randomNumber];
    return randomNumber;
}





function mainToss(vle){
    var Value=vle;
    var interValId=setInterval(toss,20);
       setTimeout(()=>{
        clearInterval(interValId);
        var ranNum=toss();
        if(Value == ranNum){
            showMessege.textContent="Congratulation! You have won.";            
        }else{
            showMessege.textContent="Sorry! you have loss.";
        }
        
       },3000);

}

var script=document.querySelector("script");


script.addEventListener("load",()=>{
    alert("loaded");        
        flowerBtn.addEventListener("click",()=>{
            mainToss(1);
        });
        manBtn.addEventListener("click",()=>{
            mainToss(0);
        });

});












