let bscore = 0
let rscore = 0
let gscore = 0
let tscore = 0

function plusRed() {
    rscore += 1
    drawScore()
}

function plusBlue() {
    bscore += 1
    drawScore()
}

function plusGreen() {
    gscore += 1
    drawScore()
}


function minusRed() {
    rscore -= 1
    if (rscore <= 0) {
        rscore = 0
    }
    drawScore()
}

function minusBlue() {
    bscore -= 1
    if (bscore <= 0) {
        bscore = 0
    }
    drawScore()
}

function minusGreen() {
    gscore -= 1
    if (gscore <= 0) {
        gscore = 0
    }
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
    let greenElem = document.getElementById("greenscore")
    redElem.innerText = rscore
    blueElem.innerText = bscore
    greenElem.innerText = gscore

    let totElem = document.getElementById("totalscore")
    let tscore = rscore + bscore + gscore
    totElem.innerText = tscore
    console.log(tscore)
}


function addGreen() {
    document.getElementById("gg").style.display = "block"
    document.getElementById("gt").style.display = "block"
    document.getElementById("gz").style.display = "block"
    document.getElementById("gb").style.display = "none"
    document.getElementById("ga").style.display = "block"
}

function removeGreen() {
    document.getElementById("gt").style.display = "none"
    document.getElementById("gg").style.display = "none"
    document.getElementById("gz").style.display = "none"
    document.getElementById("gb").style.display = "block"
    document.getElementById("ga").style.display = "none"
}