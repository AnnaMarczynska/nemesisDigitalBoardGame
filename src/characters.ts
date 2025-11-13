import {Helpers} from "./helpers";
import {Decks} from "../dataStorage/decks/decks";
import {shuffle} from "lodash";

export class Characters {
    helpers: Helpers = new Helpers();

    async selectCharacter(): Promise<string> {
        const characters = ['Captain', 'Soldier', 'Scout', 'Mechanic', 'Scientist', 'Pilot'];
        let characterID = await this.helpers.askQuestion('Select number of characterID you play: ' +
        '\n1. Captain' + '\n2. Soldier' + '\n3. Scout' + '\n4. Mechanic' + '\n5. Scientist' + '\n6. Pilot \n');
        if(isNaN(Number(characterID)) || Number(characterID) < 0 || Number(characterID) > 6) {
            console.log('Invalid characterID selection. Please select a number between 1 and 6.');
            return this.selectCharacter(); // recursion
        }
        return characters[Number(characterID) - 1];
    }

    async drawHandCards() {
        let character = await this.selectCharacter();
        let deckName = character.toLowerCase() + 'Deck';
        let allCards = shuffle(Decks[deckName]);
        let handCards = allCards.splice(0, 5);
        let remainingDeck = allCards;
        console.log(`You have drawn the following cards for ${character}:`);
        handCards.forEach((card, index) => {
            console.log(`${index + 1}. ${card.title} - ${card.description}`);
        });
        await this.helpers.saveBoardToFile(handCards, `${character}_handCards.json`, './dataStorage/decks');
        await this.helpers.saveBoardToFile(remainingDeck, `${character}_handCards.json`, './dataStorage/decks')
    }
}