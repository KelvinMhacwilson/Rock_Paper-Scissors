let score = JSON.parse(localStorage.getItem("score"))
updateDashboard()


function playGame(playerMove){
  computerMove = selectComputerMove()
  let result;

  if (playerMove === 'rock'){
    if ('rock' === computerMove){
      result = 'Tie'
    }
    else if ('paper' === computerMove){
      result = 'You Lose'
    }
    else if ('scissors' === computerMove){
      result = 'You Win'
    }
  }

  else if (playerMove === 'paper'){
    if ('rock' === computerMove){
      result = 'You Win'
    }
    else if ('paper' === computerMove){
      result = 'Tie'
    }
    else if ('scissors' === computerMove){
      result = 'You Lose'
    } 
  }

  else if (playerMove === 'scissors'){
    if ('rock' === computerMove){
      result = 'You Lose'
    }
    else if ('paper' === computerMove){
      result = 'You Win'
    }
    else if ('scissors' === computerMove){
      result = 'Tie'
    }
  }


  if (result === 'You Win'){
    score.wins += 1;
  }
  else if (result === 'You Lose'){
    score.losses += 1;
  }
  else if (result === 'Tie'){
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score))

  document.querySelector('.js-display-result').innerHTML = result;

  document.querySelector('.js-display-stats')
    .innerHTML = `<div class="display-stats-inner"><div>
    <span class="stats-text-you">You</span> <img src="/Pic/${playerMove}-emoji.png" class="icon-result icon-image-you"> 
    <img src="/Pic/${computerMove}-emoji.png" class="icon-result"> <span class="stats-text-computer icon-image-computer">Computer</span> </div> 
    </div>
  `

  updateScore()
  updateDashboard()
}

function updateScore (){
  document.querySelector('.js-display-score')
  .innerHTML = `
  Wins: ${score.wins},
  Losses: ${score.losses},
  Ties: ${score.ties}
`
updateDashboard()
}

function updateDashboard(){
  score.total = score.wins + score.losses + score.ties;
  document.querySelector('.js-total-score').innerHTML = `Total Games Played: ${score.total}`;
}

function selectComputerMove(){
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock'
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper'
  }
  else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors'
  }

  return computerMove;
}