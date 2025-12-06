import {Helpers} from "./helpers";

export class CharacterActions {
    selectedCharacters: string[] = [];
    helpers: Helpers = new Helpers();

    async selectCharacter(){
        const allCharacters = ['captain', 'soldier', 'scout', 'mechanic', 'scientist', 'pilot'];
        let selectedCharacter: string = '';
        let choice: number;

            let indexValidationResult = false;
            let duplicateValidationResult = false;
            while (!indexValidationResult || !duplicateValidationResult) {
                choice = await this.characterChoice();
                indexValidationResult = this.validateCharacterSelectionIndex(choice);
                if(indexValidationResult) {
                    selectedCharacter = allCharacters[Number(choice) - 1];
                    duplicateValidationResult = this.validateCharacterDuplicateSelection(selectedCharacter);
                }
            }
            console.log('Character selected:', selectedCharacter);
            this.selectedCharacters.push(selectedCharacter);
            await this.helpers.saveFile(selectedCharacter, 'activePlayer.json', 'board');
    }

    async characterChoice() {
        return Number(await this.helpers.askQuestion(`Select number of the character you play:
        1. Captain
        2. Soldier
        3. Scout
        4. Mechanic
        5. Scientist
        6. Pilot
        > `));
    }

    validateCharacterSelectionIndex(choice: number): boolean {
        if (!choice || choice < 1 || choice > 6) { // index validation
            console.log('Invalid choice selection. Please select a number between 1 and 6.');
            return false;
        }
        return true;
    }

    validateCharacterDuplicateSelection(character: string): boolean {
        if (this.selectedCharacters.includes(character)) {
            console.log(`Character ${character} already selected. Please choose a different character.`);
            return false;
        }
        return true;
    }
}
