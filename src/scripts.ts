import {BoardManager} from './board/boardManager';
import {Movement} from './movement';
import {RoomsSpecificActions} from "./rooms/roomsSpecificActions";
import {Nemesis} from "./nemesis";
import {CardsActions} from "./cardsActions";

const boardManager = new BoardManager();
const movement = new Movement();
const coordinates = RoomsSpecificActions;
const nemesis = new Nemesis();
const cardsActions = new CardsActions();

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

    console.log('Placing cardsActions on the qboard... ⏳ ');
    await boardManager.setPlayersOnBoard();
    console.log('CardsActions placed on the qboard ✅ ');

    console.log('Creating cardsActions decks... ⏳ ');
    await cardsActions.setDecks();

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

async function afterGameCleanup() {
    console.log('After game cleanup in progress... 🧹🧹🧹 ');
    await boardManager.afterGameCleanUp();
    console.log('Cleanup complete. ✅ ');
}

async function ripplesTest() {
    console.log('Rolling ripple test... 🌊🌊🌊 ');
    await movement.ripplesRoll();
    console.log('Movement test complete. ✅ ');
}

async function drawCharacterHand() {
    console.log('Drawing character hands... 🃏🃏🃏 ');
    await cardsActions.drawHandCards();
    console.log('Selecting card to play... 🃏🃏🃏 ');
    await cardsActions.selectCardToPlay();
    console.log('Displaying hands cards now... 🃏🃏🃏 ');
    await cardsActions.displayHandCards();
    console.log('Selecting card to discard... 🃏🃏🃏 ');
    await cardsActions.selectCardToDiscard();
    console.log('Displaying hands cards now... 🃏🃏🃏 ');
    await cardsActions.displayHandCards();
}

const scripts: { [key: string]: () => Promise<void> } = {
    gameSetup,
    afterGameCleanup,
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
