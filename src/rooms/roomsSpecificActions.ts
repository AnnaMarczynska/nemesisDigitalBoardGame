export class RoomsSpecificActions {

    static cockpitRoomActions = {
        async checkCoordinates(){},
        async changeCoordinates(){}
    };

    static engineRoomActions = {
        async checkEngine(){},
        async changeEngine(){},
    };

    static hibernationRoomActions = {
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

    static evacuationSectorActions = {
        async attemptEvacuation(){}
    }

    static fireControlCenterActions = {
        async putOutFire(){}
    }

    static generatorRoomActions = {
        async startCountdown(){},
        async stopCountdown(){}
    }

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

    static cabinRoomActions = {
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

    static showerRoomActions = {
        async takeShower(){}
    }

    static surveillanceRoomActions = {
        async checkRoom(){}
    }
}