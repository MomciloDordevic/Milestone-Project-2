var cards = document.querySelectorAll ('.game-card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;

        return;
    }
}

function checkForMatch()

cards.forEach(card => card.addEventListener('click', flipCard));