import {Helpers} from "./helpers";
import {shuffle} from "lodash";

export class Nemesis {
    helpers: Helpers = new Helpers();

    async setNemesisTokens() {
        let nemesisTokens = await this.helpers.loadFile('nemesisTokens.json');

        // prepare token lists
        let emptyToken = nemesisTokens.find((c: { type: string; }) => c.type === 'empty');
        let queenToken = nemesisTokens.find((c: { type: string; }) => c.type === 'queen');
        let larvaToken = nemesisTokens.find((c: { type: string; }) => c.type === 'larva');
        let adultTokens = shuffle(nemesisTokens.filter((c: { type: string; }) => c.type === 'adult'));
        let facehuggerTokens = shuffle(nemesisTokens.filter((c: { type: string; }) => c.type === 'facehugger'));
        return {
            emptyToken, queenToken, larvaToken, adultTokens, facehuggerTokens
        }
    }

    async setNemesisBag() {
        let nemesisTokens = await this.setNemesisTokens();
        let playersData = await this.helpers.loadFile('charactersPositionOnBoard.json');
        let playersCount = playersData.playersCount;
        let nemesisBag: [string, number][] = []

        // adding predefined tokens
        nemesisBag.push(
            nemesisTokens.emptyToken,
            nemesisTokens.queenToken,
            nemesisTokens.larvaToken,
            nemesisTokens.larvaToken,
            nemesisTokens.larvaToken,
            nemesisTokens.facehuggerTokens[0]
        );

        // adding adults tokens, player number + 1
        for (let i = 0; i <= playersCount; i++) {
            nemesisBag.push(nemesisTokens.adultTokens[i]);
        }

        nemesisBag = shuffle(nemesisBag);
        await this.helpers.saveFile(nemesisBag, 'nemesisBag.json');
        return nemesisBag;
    }

    async drawNemesis() {
        let nemesisBag = await this.helpers.loadFile('nemesisBag.json');
        let drawNemesis = nemesisBag[0];
        nemesisBag.splice(0, 1);
        await this.helpers.saveFile(nemesisBag, 'nemesisBag.json');
        return drawNemesis;
    }

    async setNemesisWeaknesses() {
        const weaknesses = await this.helpers.loadFile('nemesisWeaknesses.json');
        const shuffledWeaknesses = shuffle(weaknesses);
        const eggWeakness = shuffledWeaknesses[0];
        const nemesisBodyWeakness = shuffledWeaknesses[1];
        const crewMemberBodyWeakness = shuffledWeaknesses[2];

        console.log('Egg Weakness:', eggWeakness);
        console.log('Nemesis Body Weakness:', nemesisBodyWeakness);
        console.log('Crew Member Body Weakness:', crewMemberBodyWeakness);

        const assignedWeaknesses = {
            eggWeakness,
            nemesisBodyWeakness,
            crewMemberBodyWeakness
        };

        await this.helpers.saveFile(assignedWeaknesses, 'drawnNemesisWeaknessesState.json');
        return assignedWeaknesses;
    }
}
