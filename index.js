let homePoints = 0
let guestPoints = 0
let homePointEl = document.getElementById("home-score-points")
let guestPointEl = document.getElementById("guest-score-points")

function addHomePoint(numberOfPoints) {
    homePoints += numberOfPoints
    homePointEl.textContent = homePoints
    highLightScore()
}

function addGuestPoint(numberOfPoints) {
    guestPoints += numberOfPoints
    guestPointEl.textContent = guestPoints
    highLightScore()
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homePointEl.textContent = homePoints
    guestPointEl.textContent = guestPoints
    highLightScore()
}

function highLightScore() {
    // homePointEl.setAttribute("border", "None")
    homePointEl.style.border = "None"
    guestPointEl.style.border = "None"
    // console.log("homePoints=" + homePoints)
    // console.log("guestPoints=" + guestPoints)
    if (homePoints != 0 && homePoints > guestPoints)
    {
        homePointEl.style.border = "#9AABD8 5px solid"
    }

    else if (guestPoints != 0 && guestPoints > homePoints)
        guestPointEl.style.border = "#9AABD8 5px solid"

}