var p1 = document.querySelector("#player1");
var p2 = document.getElementById("player2");
var reset = document.querySelector("#reset");
var p1Display = document.getElementById("pldisplay")
var p2Display = document.getElementById("p2display")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var input = document.getElementById("input1");
var winScore = document.getElementById("num");
input.addEventListener("change", function() {
    num.textContent = this.value;
    winningScore = Number(this.value);
    reset1();
})
p1.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
p2.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});
reset.addEventListener("click", function() {
    reset1();
});

function reset1() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}