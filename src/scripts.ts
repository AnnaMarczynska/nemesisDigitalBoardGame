import {BoardManager} from './board/boardManager';
import {Movement} from './movement';
import {RoomsSpecificActions} from "./rooms/roomsSpecificActions";
import {Nemesis} from "./nemesis";
import {Characters} from "./characters";

const boardManager = new BoardManager();
const movement = new Movement();
const coordinates = RoomsSpecificActions;
const nemesis = new Nemesis();
const characters = new Characters();

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

    console.log('Placing characters on the qboard... ⏳ ');
    await boardManager.setPlayersOnBoard();
    console.log('Characters placed on the qboard ✅ ');

    console.log('Creating characters decks... ⏳ ');
    await characters.setDecks();

    console.log('Setting nemesis data... ⏳ ');
    console.log('Setting nemesis bag... ⏳ ');
    await nemesis.setNemesisBag();
    console.log('Nemesis bag set ✅ ');
    console.log('Assigning nemesis weaknesses... ⏳ ');
    await nemesis.setNemesisWeaknesses();
    console.log('Nemesis weaknesses assigned ✅ ');
    console.log('Nemesis data setup complete ✅ ');

    console.log('Game setup complete. ✅ ');
}

async function ripplesTest() {
    console.log('Rolling ripple test... 🌊🌊🌊 ');
    await movement.ripplesRoll();
    console.log('Movement test complete. ✅ ');
}

async function drawCharacterHand() {
    console.log('Drawing character hands... 🃏🃏🃏 ');
    await characters.drawHandCards();
}

const scripts: { [key: string]: () => Promise<void> } = {
    gameSetup,
    ripplesTest,
    drawCharacterHand
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
