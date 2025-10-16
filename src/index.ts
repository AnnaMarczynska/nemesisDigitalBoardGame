import { RoomsManager } from './rooms/roomsManager';

async function main() {
    const manager = new RoomsManager();
    manager.getShuffledRoomsForBoardSetting();
}

main();