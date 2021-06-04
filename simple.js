let arr = ["red","green","aqua","violet","orange"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click",function(){
    const randomNumber = randomNumberGenerator();
    document.body.style.backgroundColor = arr[randomNumber];
    color.textContent =`Background Color : ${arr[randomNumber]}`;
})

function randomNumberGenerator()
{
    return Math.floor(Math.random()*arr.length);
}