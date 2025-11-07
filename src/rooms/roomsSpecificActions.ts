// interface created to keep type safety
import {Helpers} from "../helpers";

interface RoomActionMap {
    [key: string]: Record<string, (...args: any[]) => Promise<void>>;
}

export class RoomsSpecificActions implements RoomActionMap {
    [key: string]: Record<string, (...args: any[]) => Promise<void>>;

    static cockpitRoomActions = {
        async setCoordinates(){
            const helpers: Helpers = new Helpers();
            const shuffledCoordinatesSets = await helpers.loadFile('coordinatesSets.json');
            const gameCoordinates = shuffledCoordinatesSets[0];
            const selectedDestination = gameCoordinates.B;
            const gameCoordinatesData = { ...gameCoordinates, selectedDestination } // flatten data structure for easier access
            await helpers.saveBoardToFile(gameCoordinatesData, 'gameCoordinates.json');
        },
        async checkCoordinates(){
            const helpers: Helpers = new Helpers();
            const gameCoordinates = await helpers.loadFile('gameCoordinates.json');
            console.log('Current coordinates are: ', gameCoordinates.selectedDestination);
        },
        async changeCoordinates(){
            const helpers: Helpers = new Helpers();
            const gameCoordinates = await helpers.loadFile('gameCoordinates.json');
            const newCoordinates = await helpers.askQuestion('Choose new coordinates: ');
            gameCoordinates.selectedDestination = gameCoordinates[newCoordinates];
            await helpers.saveBoardToFile(gameCoordinates, 'gameCoordinates.json');
        }
    }

    static engineRoomActions = {
        async checkEngine(){},
        async changeEngine(){},
    }

    static hibernatoriumRoomActions = {
        async goHibernate(){}
    }

    static armoryRoomActions = {
        async reloadWeapon(){}
    }

    static communicationRoomActions = {
        async sendSignal(){}
    }

    static decontaminationRoomActions = {
        async scanContaminationCards(){},
        async removeLarva(){}
    }

    static evacuationSectorRoomActions = {
        async attemptEvacuation(){}
    }

    static fireControlCenterRoomActions = {
        async putOutFire(){}
    }

    static generatorRoomActions = {
        async startCountdown(){},
        async stopCountdown(){}
    };

    static laboratoryRoomActions = {
        async examineObject(examinedObject: string){}
    }

    static nestRoomActions = {
        async destroyNest(){},
        async takeEgg(){}
    }

    static storageRoomActions = {
        async searchStorage(){}
    }

    static treatmentRoomActions = {
        async treatInjury(injuryType: string){}
    }

    static airlockRoomActions = {
        async initiateAirlockProcedure(){}
    }

    static cabinsRoomActions = {
        async restInCabin(){}
    }

    static canteenRoomActions = {
        async healShallowWound(){}
    }

    static commandCenterRoomActions = {
        async openDoors(){},
        async closeDoors(){}
    }

    static engineControlRoomActions = {
        async checkEngine(){}
    }

    static podsControlRoomActions = {
        async openEscapePod(){},
        async closeEscapePod(){}
    }

    static showersRoomActions = {
        async takeShower(){}
    }

    static slimeCoveredRoomActions = {
        async getCovered(){}
    }

    static surveillanceRoomActions = {
        async checkRoom(){}
    }
}