import {Helpers} from "./helpers";
import {Decks, DecksType} from "../dataStorage/decks/decks";
import {shuffle} from "lodash";

export class Characters {
    helpers: Helpers = new Helpers();

    async selectCharacter(): Promise<void> {
        const characters = ['Captain', 'Soldier', 'Scout', 'Mechanic', 'Scientist', 'Pilot'];
        let characterID = await this.helpers.askQuestion('Select number of characterID you play: ' +
        '\n1. Captain' + '\n2. Soldier' + '\n3. Scout' + '\n4. Mechanic' + '\n5. Scientist' + '\n6. Pilot \n');
        if(isNaN(Number(characterID)) || Number(characterID) < 0 || Number(characterID) > 6) {
            console.log('Invalid characterID selection. Please select a number between 1 and 6.');
            return this.selectCharacter(); // recursion
        }
        await this.helpers.saveBoardToFile(characters[Number(characterID) - 1], 'activePlayer.json', 'board');
    }

    async setDecks() {
        let numberOfPlayers = await this.helpers.loadFile('numberOfPlayers.json');
        let character = await this.helpers.loadFile('activePlayer.json', 'board');
        let playingCharacters: string[] = [];
        character.toLowerCase();
        for(let i = 0; i < numberOfPlayers; i++) {
            await this.selectCharacter();
            playingCharacters.push(character);
            if(playingCharacters.includes(character)){
                console.log(`Character ${character} already selected. Please choose a different character.`);
                await this.selectCharacter();
                // i--;
                // continue;
            }
            let deckName = character + 'Deck';
            let allCards = shuffle(Decks[deckName]);
            let cardsToDrawnDeck: DecksType[] = [];
            await this.helpers.saveBoardToFile(allCards, `${character}CardsToDrawnDeck.json`, 'decks');
            await this.helpers.saveBoardToFile(cardsToDrawnDeck, `${character}HandCards.json`, 'decks');
        }
    }

    async drawHandCards() {
        type Card = { title: string; actionCost: number; description: string }
        const character = await this.helpers.loadFile('activePlayer.json', 'board');
        let cardsToDrawnDeck = await this.helpers.loadFile(`${character}CardsToDrawnDeck.json`, 'decks');
        let handCards = await this.helpers.loadFile(`${character}HandCards.json`, 'decks');
        console.log('Before drawing cards:');
        console.log('cardsToDrawnDeck', cardsToDrawnDeck.map((card: Card) => card.title));
        console.log('handCards', handCards.map((card: Card) => card.title));
        if(cardsToDrawnDeck.length < 5) {
            cardsToDrawnDeck = [...handCards, ...cardsToDrawnDeck];
            cardsToDrawnDeck = shuffle(cardsToDrawnDeck);
        }
        handCards = cardsToDrawnDeck.splice(0, 5);
        console.log(`You have drawn the following cards for ${character}:`);
        handCards.forEach((card: { title: any; description: any; }, index: number) => {
            console.log(`${index + 1}. ${card.title} - ${card.description}`);
        });
        console.log('After drawing cards:');
        console.log('cardsToDrawnDeck', cardsToDrawnDeck.map((card: Card) => card.title));
        console.log('handCards', handCards.map((card: Card) => card.title));
        await this.selectCardToPlay();
        await this.helpers.saveBoardToFile(handCards, `${character}HandCards.json`, 'decks');
        await this.helpers.saveBoardToFile(cardsToDrawnDeck, `${character}CardsToDrawnDeck.json`, 'decks')
    }

    async selectCardToPlay(): Promise<void> {
        const character = await this.helpers.loadFile('activePlayer.json', 'board');
        let cardsToDrawnDeck = await this.helpers.loadFile(`${character}CardsToDrawnDeck.json`, 'decks');
        let handCards = await this.helpers.loadFile(`${character}HandCards.json`, 'decks');
        console.log(`Your hand cards for ${character}:`);
        handCards.forEach((card: { title: any; description: any; }, index: number) => {
            console.log(`${index + 1}. ${card.title} - ${card.description}`);
        });
        let cardNumber = await this.helpers.askQuestion('Select number of card you want to play: ');
        if(isNaN(Number(cardNumber)) || Number(cardNumber) < 1 || Number(cardNumber) > handCards.length) {
            console.log(`Invalid card selection. Please select a number between 1 and ${handCards.length}.`);
            return this.selectCardToPlay(); // recursion
        }
        let selectedCard = handCards[Number(cardNumber) - 1];
        console.log(`You have selected to play: ${selectedCard.title} - ${selectedCard.description}`);
        handCards.splice(cardNumber, 1);
        cardsToDrawnDeck.push(selectedCard); // put played card to the bottom of the deck
        await this.helpers.saveBoardToFile(handCards, `${character}HandCards.json`, 'decks');
        await this.helpers.saveBoardToFile(cardsToDrawnDeck, `${character}CardsToDrawnDeck.json`, 'decks');
    }
}
