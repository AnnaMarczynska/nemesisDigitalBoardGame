import {Helpers} from "./helpers";
import {Corridor} from "./board/corridor";
import {BoardManager} from "./board/boardManager";
import {Nemesis} from "./nemesis";

export class Movement {
    helpers: Helpers = new Helpers();
    boardManager = new BoardManager();
    nemesis: Nemesis = new Nemesis();

    async ripplesRoll() {
        //avoids repeating this.helpers everywhere
        const { rollDice, loadFile } = this.helpers;
        const { from, to } = await this.moveToRoom();
        let roll: number = await rollDice();
        let roomToLeave = from;
        let roomToEnter = to;
<<<<<<< HEAD
        let corridors: Corridor[] = await loadFile('corridorsBoard.json', './dataStorage/board');
=======
        let corridors: Corridor[] = await loadFile('corridorsBoard.json', 'board');
>>>>>>> a210f48839ba46f072f3bc84506dfa5f73880c4e
        const testedCorridor = await this.boardManager.getRequiredCorridors(corridors, 'connected', roomToLeave, roomToEnter);
        const allRoomToLeaveCorridors = await this.boardManager.getRequiredCorridors(corridors, 'all', roomToLeave);
        let drawnNemesis = await this.nemesis.drawNemesis();

        //checking runtime errors, no corridor found between selected rooms
        if (!testedCorridor) {
            return console.log('No corridor found between the selected rooms.');
        }

        console.log('You have rolled ', roll);
        if (roll < 5) {
            // ! as it is certain that the corridor exists
            if (!testedCorridor!.areRipples) {
                testedCorridor!.areRipples = true;
                console.log('Movement successful!');
                // saving character new position
                await this.boardManager.saveCharactersNewPosition(to);
                await this.boardManager.roomDataRevealer(to);
            } else {
                console.log('Nemesis appears in the room!');
                console.log('This is ' + drawnNemesis.type + ' with danger level ' + drawnNemesis.danger);
                testedCorridor!.areRipples = false;
            }
        } else if (roll === 5) {
            console.log('Danger! Danger! Movement everywhere!');
            console.log('Movement successful!');
            await this.boardManager.saveCharactersNewPosition(to);
            await this.boardManager.roomDataRevealer(to);
            // danger result adds ripples to all remaining corridors of the room to leave
            for (const corridor of allRoomToLeaveCorridors) {
                corridor.areRipples = true;
            }
        } else {
            console.log('Silent move, no ripples made...');
            await this.boardManager.saveCharactersNewPosition(to);
            await this.boardManager.roomDataRevealer(to);
        }
        // cannot be one of this.helpers consts as it cannot be destructured - taken out of an object and assigned to a standalone variable
<<<<<<< HEAD
        await this.helpers.saveFile(corridors, 'corridorsBoard.json', './dataStorage/board');
=======
        await this.helpers.saveFile(corridors, 'corridorsBoard.json', 'board');
>>>>>>> a210f48839ba46f072f3bc84506dfa5f73880c4e
    }

    async moveToRoom() {
        const { currentPlayerPosition } = await this.boardManager.getCurrentPlayerPosition();
<<<<<<< HEAD
        const boardMap = await this.helpers.loadFile('roomsBoard.json', './dataStorage/board') as { id: number; connectedRooms: number[] }[];
=======
        const boardMap = await this.helpers.loadFile('roomsBoard.json', 'board') as { id: number; connectedRooms: number[] }[];
>>>>>>> a210f48839ba46f072f3bc84506dfa5f73880c4e
        let roomToEnter: number;

        // find all rooms connected to the room to leave and make a new array of their ids (map)
        let availableRooms: number[] = boardMap
            .filter(c => c.connectedRooms.includes(currentPlayerPosition))
            .map(c => c.id);

        do {
            console.log('You are currently in room number: ', currentPlayerPosition);
            console.log('You can move to following rooms: ', availableRooms);
            roomToEnter = await this.helpers.roomToEnterNumber();
            if (!availableRooms.includes(roomToEnter)) {
                console.log('Unavailable room selected. Please choose again.');
            }
        } while (!availableRooms.includes(roomToEnter));
        return {
            from: currentPlayerPosition,
            to: roomToEnter
        }
    }
}
