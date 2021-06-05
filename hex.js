let arr = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");
let randomColor = "#";
btn.addEventListener("click",function(){
    const randomNumber = randomNumberGenerator();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    randomColor="#";
})

function randomNumberGenerator()
{
    for(let i = 0 ; i<6 ; i++)
    {
        randomColor += arr[Math.floor(Math.random()*arr.length)];
    }
    console.log(randomColor);
    return randomColor;
}