let bscore = 0
let rscore = 0
let tscore = 0

function plusRed() {
    rscore += 1
    drawScore()
}

function plusBlue() {
    bscore += 1
    drawScore()
}

function minusBlue() {
    bscore -= 1
    drawScore()
}

function minusRed() {
    rscore -= 1
    drawScore()
}

function resetScore() {
    rscore = 0
    bscore = 0
    drawScore()
}

function drawScore() {
    let redElem = document.getElementById("redscore")
    let blueElem = document.getElementById("bluescore")
    redElem.innerText = rscore
    blueElem.innerText = bscore

    let totElem = document.getElementById("totalscore")
    let tscore = rscore + bscore
    totElem.innerText = tscore
    console.log(tscore)
}

function addGreen() {
    document.getElementById("gg").style.display = "block"
    document.getElementById("gt").style.display = "block"
    document.getElementById("gz").style.display = "block"
}