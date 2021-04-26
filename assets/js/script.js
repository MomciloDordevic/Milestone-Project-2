var cards = document.querySelectorAll ('.game-card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));