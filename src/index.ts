import { RoomsManager } from './rooms/roomsManager';
import { BoardManager} from './board/boardManager';
import {Ripples} from "./ripples";

async function main() {
    const manager = new BoardManager();
    const ripples = new Ripples();

    await ripples.ripplesRoll();
}

main();