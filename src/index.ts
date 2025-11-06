import { RoomsManager } from './rooms/roomsManager';
import { BoardManager} from './board/boardManager';
import {Movement} from "./movement";

async function main() {
    const manager = new BoardManager();
    const ripples = new Movement();

    await manager.setPlayersOnBoard();
    await ripples.ripplesRoll();
}

main();