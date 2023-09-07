const userName = document.querySelector("#userName");
const userScore = document.querySelector("#userScore");
const highScore = document.querySelector("#highScore");
const play = document.querySelector(".playAgain");
let high = localStorage.getItem("highscore");

play.addEventListener("click",()=>{
    window.location.href = "./index.html"
})