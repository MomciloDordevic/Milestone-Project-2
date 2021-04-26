var cards = document.querySelectorAll('.game-card');

var flippedCard = false;
var firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));