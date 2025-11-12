import {BoardManager} from './board/boardManager';
import {Movement} from './movement';
import {RoomsSpecificActions} from "./rooms/roomsSpecificActions";
import {Nemesis} from "./nemesis";

const boardManager = new BoardManager();
const movement = new Movement();
const coordinates = RoomsSpecificActions;
const nemesis = new Nemesis();

async function gameSetup() {
    console.log('Game setup in progress... 🟩🟩🟩⬜️⬜️ ');
    console.log('Game\'s map preparation... ⏳ ');

    console.log('Rooms setup... ⏳ ');
    await boardManager.setRoomsBoard();
    console.log('Rooms assigned to hexes ✅ ');

    console.log('Corridors setup... ⏳ ');
    await boardManager.setCorridorsBoard();
    console.log('Corridors data loaded ✅ ');

    console.log('Setting coordinates... ⏳ ');
    await coordinates.cockpitRoomActions.setCoordinates();
    console.log('Coordinates set ✅ ');

    console.log('Setting number of players... ⏳ ');
    await boardManager.setNumberOfPlayers();
    console.log('Number of players set ✅ ');

    console.log('Placing characters on the board... ⏳ ');
    await boardManager.setPlayersOnBoard();
    console.log('Characters placed on the board ✅ ');

    await nemesis.setNemesisBag();

    console.log('Game setup complete. ✅ ');
}

async function ripplesTest() {
    console.log('Rolling ripple test... 🌊🌊🌊 ');
    await movement.ripplesRoll();
    console.log('Movement test complete. ✅ ');
}

const scripts: { [key: string]: () => Promise<void> } = {
    gameSetup,
    ripplesTest
}

const scriptName = process.argv[2];

if (!scripts[scriptName]) {
    console.error(`Unknown script: ${scriptName}`);
    process.exit(1);
}

scripts[scriptName]()
    .then(() => {
        console.log(`✅ Script "${scriptName}" completed.`);
    })
    .catch((err) => {
        console.error(`❌ Error running script "${scriptName}":`, err);
        process.exit(1);
    });