import {Helpers} from "./helpers";
import {Decks, DecksType} from "../dataStorage/decks/decks";
import {shuffle} from "lodash";

interface Card {
    title: string;
    actionCost: number;
    description: string;
}

export class CardsActions {
    helpers: Helpers = new Helpers();

    async setDecks() {
        let numberOfPlayers = await this.helpers.loadFile('numberOfPlayers.json', 'board');
        let charactersPlaying: string[] = [];
        let character: string;
        console.log('numberOfPlayers', numberOfPlayers);
        for(let i = 0; i < numberOfPlayers; i++) {
            character = await this.helpers.selectCharacter();
            if(charactersPlaying.includes(character)){
                console.log(`Character ${character} already selected. Please choose a different character.`);
                await this.helpers.selectCharacter();
            }
            console.log('Character selected:', character);
            charactersPlaying.push(character);
            let deckName = character + 'Deck';
            let allCards = shuffle(Decks[deckName]);
            let cardsToDrawnDeck: DecksType[] = [];
            await this.helpers.saveFile(allCards, `${character}CardsToDrawnDeck.json`, 'decks');
            await this.helpers.saveFile(cardsToDrawnDeck, `${character}HandCards.json`, 'decks');
        }
    }

    async drawHandCards() {
        const character = await this.helpers.loadFile('activePlayer.json', 'board');
        let cardsToDrawnDeck = await this.helpers.loadFile(`${character}CardsToDrawnDeck.json`, 'decks');
        let handCards = await this.helpers.loadFile(`${character}HandCards.json`, 'decks');
        if(cardsToDrawnDeck.length < 5) {
            cardsToDrawnDeck = [...handCards, ...cardsToDrawnDeck];
            cardsToDrawnDeck = shuffle(cardsToDrawnDeck);
        }
        handCards = cardsToDrawnDeck.splice(0, 5);
        console.log(`You have drawn the following cards for ${character}:`);
        await this.displayCards(handCards);
        await this.helpers.saveFile(handCards, `${character}HandCards.json`, 'decks');
        await this.helpers.saveFile(cardsToDrawnDeck, `${character}CardsToDrawnDeck.json`, 'decks');
    }

    async selectCardToPlay(): Promise<void> {
        const character = await this.helpers.loadFile('activePlayer.json', 'board');
        const [cardsToDrawnDeck, handCards ] = await Promise.all([
            this.helpers.loadFile(`${character}CardsToDrawnDeck.json`, 'decks'),
            this.helpers.loadFile(`${character}HandCards.json`, 'decks')
        ]);
        console.log(`Your hand cards for ${character}:`);
        await this.displayCards(handCards);
        let cardNumber = await this.helpers.askQuestion('Select number of card you want to play: ');
        let numericCardNumber = Number(cardNumber);
        await this.cardIndexValidation(character, numericCardNumber, this.selectCardToPlay);
        let selectedCard = handCards[numericCardNumber - 1];
        console.log(`You have selected to play: ${selectedCard.title} - ${selectedCard.description}`);
        handCards.splice(numericCardNumber-1, 1);
        cardsToDrawnDeck.push(selectedCard); // put played card to the bottom of the deck
        await this.helpers.saveFile(handCards, `${character}HandCards.json`, 'decks');
        await this.helpers.saveFile(cardsToDrawnDeck, `${character}CardsToDrawnDeck.json`, 'decks');
    }

    async selectCardToDiscard(): Promise<void> {
        let character = await this.helpers.loadFile('activePlayer.json', 'board');
        let handCards = await this.helpers.loadFile(`${character}HandCards.json`, 'decks');
        let input: string;

        do {
        await this.displayHandCards();

        let cardNumber = await this.helpers.askQuestion('Select number of card you want to discard: ');
        let numericCardNumber = Number(cardNumber);
            await this.cardIndexValidation(character, numericCardNumber, this.selectCardToDiscard);
            numericCardNumber--;
            handCards.splice(numericCardNumber, 1);
            await this.helpers.saveFile(handCards, `${character}HandCards.json`, 'decks');

            if(handCards.length === 0) {
                console.log('No more cards to discard.');
                break;
            }

            input = await this.helpers.askQuestion('Do you want to discard another card? (yes/no): ');
        } while (input.toLowerCase() === 'yes');
    }

    async displayHandCards(): Promise<void> {
        const character = await this.helpers.loadFile('activePlayer.json', 'board');
        let handCards = await this.helpers.loadFile(`${character}HandCards.json`, 'decks');
        console.log('Your hand cards:');
        await this.displayCards(handCards);
    }

    async displayCards(cards: Card[]) {
        cards.forEach((card, i) => {
            console.log(`${i + 1}. ${card.title} - ${card.actionCost} - ${card.description}`);
        });
    }

    async cardIndexValidation(character: string, cardIndex: number, action: any) {
        let handCards = await this.helpers.loadFile(`${character}HandCards.json`, 'decks');
        if (isNaN(cardIndex) || cardIndex < 1 || cardIndex > handCards.length) {
            console.log(`Invalid card selection. Please select a number between 1 and ${handCards.length + 1}.`);
            return action; // recursion
        }
    }
}
