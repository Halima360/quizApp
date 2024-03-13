const username = document.getElementById('username');
const finalScore = document.getElementById("finalScore")
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostResentScore = localStorage.getItem('mostResentScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = mostResentScore;
const MAX_HIGH_SCORES = 5;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
});
saveHigh = e => {
    console.log('clicked')
    e.preventDefault();
    const score = {
        // score: Math.floor(Math.random() * 100),
        score:mostResentScore,
        name:username.value
    };
    highScores.push(score)
    
    highScores.sort((a,b) => b.score - a.score);
     highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores)
    window.location.assign("/");
}
