// generate card types ace = 1 / 2-10 / Jack, Queen, King = 10
const cardNames = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
const cardScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const suitNames = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let cards = [];
const player = {
    score: 0,
    deck: []
};
const dealer = {
    score: 0,
    deck: []
};

let deckSize = 52;
for (let i = 0; i < deckSize; ++i) {
    cards.push({
        name: cardNames[i % cardNames.length],
        suit: suitNames[Math.floor(i / cardNames.length)],
        score: cardScores[i % cardScores.length]
    });
}

// shuffling algorithm taken from StackOverflow ;O
cards = cards.map(value =>
    ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

// returns a string representation of cards in deck
const getDeckDesc = (deck, newCard = false) => {
    return deck.reduce((acc, card, i) => {
        const postString = deck.length > 1
            ? i === deck.length - 2
                ? ' and ' : ', '
            : '  ';
        return acc + `${i === deck.length - 1 && newCard ? '[' : ''}${card.name} of ${card.suit} (${card.score})${i === deck.length - 1 && newCard ? ']' : ''}${postString}`;
    }, '').slice(0, -2);
};

const drawCard = (entity) => {
    entity.deck.push(cards.pop());
    // adds the score of the last card from entity deck to entity score 
    const newScore = entity.deck[entity.deck.length - 1].score;
    entity.score += newScore;

};

const printScores = (drawPlayer = false, drawDealer = false) => {
    console.log(`\nPlayer: ${player.score}\nDeck: ${getDeckDesc(player.deck, drawPlayer)}\nDealer: ${dealer.score}\nDeck: ${getDeckDesc(dealer.deck, drawDealer)}`);
};

drawCard(player);
drawCard(dealer);
console.log('\nStarting hands');
printScores(true, true);
while (true) {

    console.log('\nPlayer draws a card.');
    drawCard(player);
    printScores(true);

    if (player.score > 21) {
        console.log('Dealer wins.');
        break;
    }
    else if (player.score === 21) {
        console.log('Player wins.');
        break;
    }

    console.log('\nDealer draws a card.');
    drawCard(dealer);
    printScores(false, true);

    if (dealer.score > 21) {
        console.log('Player wins.');
        break;
    }
    else if (dealer.score === 21) {
        console.log('Dealer wins.');
        break;
    }
}