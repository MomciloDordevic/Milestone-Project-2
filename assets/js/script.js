var cards = document.querySelectorAll('.game-card');

var flippedCard = false;
var firstCard, secondCard;
var lockBoard = false;
var counter = 0;

/* ----- Flip Card Function -----*/



function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;

  checkForMatch();

  counter +=1;
    document.getElementById("counter").innerHTML = counter;
}



/* ----- Check for Match Function -----*/

function checkForMatch() {
  var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

/* ----- Unflip Card Function -----*/

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

/* ----- Reset Board Function -----*/

function resetBoard() {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/* ----- Shuffle Function -----*/

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function resetGame() {
    document.location.href = "";
}

cards.forEach(card => card.addEventListener('click', flipCard));