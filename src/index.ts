import { RoomsManager } from './rooms/roomsManager';
import { BoardManager} from './board/boardManager';

async function main() {
    const manager = new BoardManager();
    manager.setRoomsBoard();
}

main();