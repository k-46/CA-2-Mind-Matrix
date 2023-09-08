const result = document.querySelector(".result");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const erase = document.querySelector(".erase");

var numSelected = null;
let emptyTile = 0;
let score = 100;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

// var solution = [
//     "387491625",
//     "241568379",
//     "569327418",
//     "758619234",
//     "123784596",
//     "496253187",
//     "934176852",
//     "675832941",
//     "812945763"
// ]

window.onload = setGame();

// erase button
erase.addEventListener("click",selectNumber);



// Creating the board and numberpad
function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        
        number.classList.add("cell");
        document.querySelector(".numpad").append(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }else{
                emptyTile++;
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.querySelector(".gameTable").append(tile);
        }
    }
}

// separates which number or erase is selected
function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

// For changing values to the tile (both numbers and erase)
function selectTile(){
    
    if (numSelected) {
        if(numSelected.id==" " && this.innerText.length>0 && !(this.classList.contains("tile-start"))){
            this.innerText = '';
        }
        if(this.classList.contains("tile-start") || this.innerText!=""){
            return;
        }
        else{
            this.innerText = numSelected.id;
        }
        
    }
    // console.log("select")
    // console.log(numSelected)
}


// Timer functionality


let currentSecond = 59;
let currentMinute = 0;

// setting the timer according to the difficulty level
let difficulty = localStorage.getItem("difficulty");

if(difficulty=="Easy"){    
    currentMinute = 5;
}
else if(difficulty=="Medium"){
    currentMinute = 3;
}
else if(difficulty=="Hard"){
    currentMinute = 1;
}

minutes.innerText=currentMinute;
seconds.innerText=currentSecond;

setInterval(timer,1000);

function timer(){
    currentSecond--;
    if(currentMinute==0 && currentSecond==0){
        checkResults();

    }
    if(currentSecond==0){
        currentMinute--;
        currentSecond=59;
    }

    minutes.innerText=currentMinute;
    seconds.innerText=currentSecond;

}

// checking whether the user input is correct

var solution = "387491625241568379569327418758619234123784596496253187934176852675832941812945763";

result.addEventListener("click",()=>{
    checkResults()    
});


function checkResults(){
    let tiles = document.getElementsByClassName("tile");
    // console.log(tiles)
    filledTile = 0;
    for(let i=0; i<81; i++){
        
        if(tiles[i].innerText==solution[i] && !(tiles[i].classList.contains("tile-start"))){
            filledTile++;
        }
    }
    let finalScore = (((filledTile/emptyTile)*100)).toFixed(2);
    console.log(finalScore);
    localStorage.setItem("userScore",finalScore)
    // console.log(localStorage.getItem("userScore"))
    window.location.href = "./gameover.html"
}