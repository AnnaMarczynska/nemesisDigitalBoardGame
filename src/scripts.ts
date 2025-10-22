import {BoardManager} from './board/boardManager';
import {Ripples} from './ripples';

const boardManager = new BoardManager();
const ripples = new Ripples();

async function gameSetup() {
    console.log('Game setup in progress... 🟩🟩🟩⬜️⬜️ ');
    console.log('Game\'s map preparation... ⏳ ');

    console.log('Rooms setup... ⏳ ');
    boardManager.setHexesBoard();
    console.log('Rooms assigned to hexes ✅ ');

    console.log('Corridors setup... ⏳ ');
    boardManager.setCorridorsBoard();
    console.log('Corridors data loaded ✅ ');

    console.log('Game setup complete. ✅ ');
}

async function ripplesTest() {
    console.log('Rolling ripple test... 🌊🌊🌊 ');
    await ripples.ripplesRoll();
    console.log('Ripples test complete. ✅ ');
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