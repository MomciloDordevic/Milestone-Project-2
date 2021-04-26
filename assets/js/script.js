var cards = document.querySelectorAll('.game-card');

var flippedCard = false;
var firstCard, secondCard;
var lockBoard = false;

function flipCard() {
    if (lockBoard) return;
  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;

    return;
  }

  flippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockBoard = false;
  }, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));