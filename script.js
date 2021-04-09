const cards = document.querySelectorAll('.memory-card');
const shuffleNextCard = document.querySelectorAll('.next-card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    if(!flippedCard){
        flippedCard = true;
        firstCard = this;
    }else{
        flippedCard = false;
        secondCard = this;
        cardMatch();
    }
}

function cardMatch(){
    if(firstCard.dataset.img === secondCard.dataset.img){
        disableCards();
    }else{
        unflipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    restart();
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        restart();
    }, 750);
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

(function shuffle2(){
    shuffleNextCard.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        shuffleNextCard.style.order = randomPos;
    });
})();

function restart(){
    flippedCard = false;
    [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));