import {Helpers} from "./helpers";
import {Corridor} from "./board/corridor";

export class Ripples {

    helpers: Helpers = new Helpers();

    async ripplesRoll() {
        //avoids repeating this.helpers everywhere
        const { rollDice, roomToLeaveNumber, roomToEnterNumber, loadFile } = this.helpers;
        let roll = await rollDice();
        let roomToLeave = await roomToLeaveNumber();
        let roomToEnter = await roomToEnterNumber();
        let corridor: Corridor[] = await loadFile('corridorsBoard.json');
        let testedCorridor = corridor.find(c => c.connectedRooms.includes(roomToEnter) && c.connectedRooms.includes(roomToLeave));
        let allRoomToLeaveCorridors = corridor.filter(c => c.connectedRooms.includes(roomToLeave));

        //checking runtime errors
        if (!testedCorridor) {
            console.log('No corridor found between the selected rooms.');
            return;
        }

        if (roll < 5) {
            console.log('Ripples made!');
            // ! as it is certain that the corridor exists
            if (!testedCorridor!.areRipples) {
                testedCorridor!.areRipples = true;
            } else {
                console.log('Nemesis appears in the room!');
                testedCorridor!.areRipples = false;
            }
        } else if (roll === 5) {
            console.log('Danger! Danger! Ripples everywhere!');
            // danger result adds ripples to all remaining corridors of the room to leave
            for (const corridor of allRoomToLeaveCorridors) {
                corridor.areRipples = true;
            }
        } else {
            console.log('Silent move, no ripples made...');
        }
        // cannot be one of this.helpers consts as it cannot be destructured - taken out of an object and assigned to a standalone variable
        this.helpers.saveBoardToFile(corridor, 'corridorsBoard.json');
    }
}