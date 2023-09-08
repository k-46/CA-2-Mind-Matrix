const displayUserName = document.querySelector("#userName");

const displayUserScore = document.querySelector("#userScore");

const displayHighScore = document.querySelector("#highScore");

const play = document.querySelector(".playAgain");

window.onload=()=>{
    let currentScore = localStorage.getItem("userScore");

    let highScore = localStorage.getItem("highScore");

    if(!highScore || parseFloat(highScore)<=parseFloat(currentScore)){
        highScore=currentScore;
        localStorage.setItem("highScore",highScore);
        // console.log(highScore)
    }


displayUserName.innerText = localStorage.getItem("username") + "'s Score"

displayUserScore.innerText = currentScore + "%";

displayHighScore.innerText = highScore + "%"
}

play.addEventListener("click",()=>{
    window.location.href = "./index.html"
})