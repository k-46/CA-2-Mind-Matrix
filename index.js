const userName = document.querySelector("#userName");
const nickName = document.querySelector("#nickName");
const difficulty = document.querySelector("#difficulty");
const play = document.querySelector("#playButton");
const instruction = document.querySelector("#instructions");
const closeInstruction = document.querySelector(".ins-x");
const instructionBox = document.querySelector("#instruction-box");



play.addEventListener("click",()=>{
    if(userName.value=="" || nickName.value==""){
        alert("FILL YOUR DETAILS ")
    }
    else{
    localStorage.setItem("username",userName.value);
    localStorage.setItem("nickname",nickName.value);
    localStorage.setItem("difficulty",difficulty.value);

    console.log(localStorage.getItem("username"));;
    console.log(localStorage.getItem("difficulty"));;
    console.log(localStorage.getItem("nickname"));;

    // window.location.href="./game.html";
    }
});


// FOR THE INSTRUCTIONS

instruction.addEventListener("click",()=>{
    instructionBox.style.display="block";
});

closeInstruction.addEventListener("click", ()=>{
    instructionBox.style.display="none";
});