// using Factory Pattern to avoid code multiplication and maintain data separation
export const roomsData = {
    cockpit: {
        roomName: 'Cockpit',
        roomType: 'special',
        roomDescription: 'This is cockpit \n' +
            'Flight check. \n ' +
            'Check the coordinates OR set journey destination. \n ' +
            'Check the coordinates - check the coordinates card while not showing it to the other players and then put it back.' +
            'You don\'t have to tell what you saw. \n ' +
            'Move journey destination marker to selected infield. \n' +
            'Attention! You cannot change journey destination if there are any characters already in hibernation process. \n' +
            'You should remember checked coordinates. \n' +
            'You cannot set journey destination if there are any Nemesis in the cockpit. \n' +
            'Attention! At the end of the game, if spaceship has not been destroyed, coordinates card should be revealed' +
            'Journey destination marker determines final destination among the 4 possible coordinates. \n' +
            'Attention! In this room, Search action is not available. \n\n',
        isComputer: true,
        actionsKey: 'cockpitRoomActions',
    },
    hibernatorium: {
        roomName: 'Hibernatorium',
        roomType: 'special',
        roomDescription: 'This is hibernatorium \n' +
            'Attempt Hibernation. \n ' +
            'You can only perform this action if the hibernation pods are unlocked – the marker on the time track must be on a blue space. \n ' +
            'Make a Ripple roll. If any Nemesis appears in the room, your attempt to enter the hibernation pod has failed. \n ' +
            'If no Nemesis appears in the room, remove your character’s miniature from the game – you have successfully entered hibernation. ' +
            'You cannot change the ship’s destination or start the self-destruct sequence if any character is in hibernation. \n ' +
            'You cannot enter a hibernation pod if there is a Nemesis in the Hibernatorium. \n' +
            'Note! You cannot perform the "Search" action in this room. \n' +
            'Note! The onboard computer is programmed to protect hibernated crew members and prevent any actions that might endanger their lives. \n\n',
        isComputer: false,
        actionsKey: 'hibernatoriumRoomActions',
    },
    engineRoom: {
        roomName: 'Engine',
        roomType: 'special',
        roomDescription: 'This is engine room \n' +
            'Check the engine \n' +
            'Check engine status in this engine room - look up the top engine token while not showing it to the other players. ' +
            'You don\'t have to tell the truth about it\'s status to other players. \n ' +
            'The top engine token shows the current status of the engine. \n ' +
            'Fix/Damage engine \n ' +
            'You can make action Repair/Damage on the engine in this room (using action card "Repairs" or "Tools" tool card): take both engine status tokens, ' +
            'check their values (do not inform other players about those values) and put them back in order chosen by yourself. \n' +
            'You don\'t have to tell the truth about if you have fixed the engine but you need to tell whether you have changed tokens order. \n ' +
            'You can repair/damage an engine even if there is a malfunction marker in the room, and even if you haven’t previously checked the engine status. \n' +
            'Note! The ship has 3 engines, of which at least 2 must be functional in order to safely return to Earth. ' +
            'At the beginning of the game, players do not know which engines are working. \n' +
            'Players can check the status of a given engine during the game – for example, here, in the appropriate Engine Room. ' +
            'At the end of the game, if the ship has not been destroyed earlier, all top engine tokens must be revealed to determine whether the ship exploded during the hyperspace jump attempt. \n' +
            'Note! You cannot perform the "Search" action in this room. \n\n',
        isComputer: false,
        actionsKey: 'engineRoomActions',
    },
    armory: {
        roomName: 'Armory',
        roomType: 'basic',
        roomDescription: 'This is armory \n' +
            'Charge your energetic weapon. \n ' +
            'Add 2 cartridges to one of your energetic weapon. \n ' +
            'Attention! This room doesn\'t allow to charge classical weapon. \n ' +
            'Attention! Cartridge marker count on weapon\'s card cannot exceed maximum magazine capacity \n\n',
        isComputer: false,
        actionsKey: 'armoryRoomActions',
    },
    communicationRoom: {
        roomName: 'Communication room',
        roomType: 'basic',
        roomDescription: 'This is communication room \n' +
            'Send a signal. \n ' +
            'Put status marker on Set signal section of your board. \n ' +
            'Sending a signal is a requirement for some of the objective cards and doesn\'t have any other use in the game. \n\n',
        isComputer: true,
        actionsKey: 'communicationRoomActions',
    },
    decontaminationRoom: {
        roomName: 'Decontamination room',
        roomType: 'basic',
        roomDescription: 'This is decontamination room \n' +
            'Perform the Decontamination Procedure \n ' +
            'Scan all Contamination cards (from your hand, action deck, and discard pile). Remove all INFECTED cards. \n' +
            'If there is a Larva on your character board, remove it. \n ' +
            'After scanning, your character suffers 1 Light Wound and you automatically pass. Shuffle all your Action cards (including those in hand and in the discard pile) and form a new Action deck. \n' +
            'Note: After the decontamination procedure, you must always pass. Your hand remains empty until the start of the next round. \n\n',
        isComputer: false,
        actionsKey: 'decontaminationRoomActions',
    },
    evacuationSector: {
        roomName: 'Evacuation sector',
        roomType: 'basic',
        roomDescription: 'This is evacuation sector \n' +
            'Try to access emergency capsule. \n' +
            'You can only attempt this action if any of sector\'s capsule is opened and has at least one available slot. \n ' +
            'Make a Ripple roll. If any Nemesis appears in room, your attempt will fail. \n ' +
            'After Ripple roll examination, if no Nemesis appears, you can put your character in one of opened capsules in sector, if at least one empty slot is available. \n' +
            'Each capsule contains two slots, therefore it can accommodate up to two characters. \n' +
            'Check \"Emergency capsules\" frame at the end of this chapter to obtain information what happens once character enters emergency capsule. \n' +
            'Character cannot enter emergency capsule if any Nemesis is present in the room. \n\n',
        isComputer: false,
        actionsKey: 'evacuationSectorRoomActions',
    },
    fireControlCenter: {
        roomName: 'Fire control center',
        roomType: 'basic',
        roomDescription: 'This is fire control center \n' +
            'Initiate the fire control procedure \n ' +
            'Choose any room.\n' +
            'Remove the fire token from that room (if there is one). \n ' +
            'All intruders flee from that room (in random directions determined by drawing Event cards – 1 card per intruder). \n' +
            'Tip: You can use the fire control procedure even if there is no fire in the chosen room, in order to drive away intruders located there. \n\n',
        isComputer: true,
        actionsKey: 'fireControlCenterRoomActions',
    },
    generator: {
        roomName: 'Generator',
        roomType: 'basic',
        roomDescription: 'This is generator room \n' +
            'Start/Stop the Ship\'s Self - Destruct Countdown \n ' +
            'Place 1 status marker on the 1st (green) space of the self-destruct track, if there is no marker there. \n' +
            'From now on, each time you move the time marker on the time track, also move the self-destruct marker 1 space forward. \n' +
            'If a character stops the self-destruct countdown, remove the marker from the track. (It will return to the 1st green space when the countdown is reinitiated.) \n' +
            'When the marker reaches the 1st yellow space on the self-destruct track, the countdown can no longer be stopped. All escape pods automatically open (but can still be closed). \n' +
            'When the marker reaches the last space on the track (with the skull symbol), the ship explodes. \n' +
            'Note: The self-destruct countdown cannot be started if any character is already hibernated. \n' +
            'If jump takes place while the self-destruct countdown is active, the ship explodes. \n\n',
        isComputer: true,
        actionsKey: 'generatorRoomActions',
    },
    laboratory: {
        roomName: 'Laboratory',
        roomType: 'basic',
        roomDescription: 'This is laboratory \n' +
            'Examine 1 Object \n' +
            'This action can only be performed if the room contains (even if carried by a character) one of the following objects: a crew member’s body, an intruder carcass, or an intruder egg. \n ' +
            'Reveal 1 intruder weakness card related to the object. \n' +
            'The object is not discarded after the examination is completed. However, the player may drop it without spending an action. \n\n',
        isComputer: true,
        actionsKey: 'laboratoryRoomActions',
    },
    nest: {
        roomName: 'Nest',
        roomType: 'basic',
        roomDescription: 'This is nest \n' +
            'Take 1 Egg \n' +
            'Take 1 egg from the Intruder board, then perform a noise roll. \n' +
            'The eggs on the Intruder board represent the eggs located in the Nest. When a player takes (or destroys) an egg from the Nest, it is removed from the Intruder board. \n ' +
            'Taking an egg from the Intruder board costs 2 actions, while picking up an egg token from the main board costs only 1 action. \n' +
            'When there are no eggs left in the Nest (all have been taken or destroyed), the Nest is considered destroyed. \n' +
            'Place 1 damage marker on the Nest tile – this symbolizes its destruction. \n' +
            'If there are eggs in a room on fire and no character is carrying them, destroy one of those eggs during the Event Phase, in the Fire Damage step. \n' +
            'Note! Remember that an egg is a Heavy Object. \n' +
            'Note! You cannot perform a Search action in the Nest. \n' +

            'Destroy 1 Egg \n ' +
            'When your character is in a room that contains eggs not being carried by anyone, you may attempt to destroy them. Eggs can be destroyed using a Shooting or Melee action. Each point of damage (of any type) destroys 1 egg. \n' +
            'If the character misses during a melee attack, they do not draw a Contamination card or suffer a Serious Wound. \n' +
            'You can also throw a grenade into a room containing uncarried eggs, just like when intruders are present in the room. A grenade destroys 2 eggs. A Molotov cocktail destroys 1 egg. \n' +
            'After each individual attempt to destroy an egg, you must perform a Noise roll. \n\n',
        isComputer: false,
        actionsKey: 'nestRoomActions',
    },
    storage: {
        roomName: 'Storage',
        roomType: 'basic',
        roomDescription: 'This is storage \n' +
            'Search for an Item \n' +
            'Draw 2 cards from the item deck of any color (red, yellow, or blue). \n\n',
        isComputer: false,
        actionsKey: 'storageRoomActions',
    },
    treatmentRoom: {
        roomName: 'Treatment room',
        roomType: 'basic',
        roomDescription: 'This is treatment room \n' +
            'Heal your wounds. \n' +
            'Bandage all of your severe injuries OR heal one bandaged severe injury OR bandage all of your shallow injuries \n\n',
        isComputer: false,
        actionsKey: 'treatmentRoomActions',
    },
    airlock: {
        roomName: 'Airlock',
        roomType: 'additional',
        roomDescription: 'This is airlock \n' +
            'Initiate airlock activation procedure \n' +
            'Choose 1 any other yellow room. There must be no destroyed doors in the corridors leading to that room. \n ' +
            'Automatically close the doors in all corridors leading to the selected room. \n ' +
            'Place an airlock marker in that room to indicate it is under a special procedure. If any door in the corridors leading to this room is opened before the end of the current player phase, remove the marker. \n' +
            'If at the end of the current player phase (when all players have already passed) all doors in the corridors leading to this room are closed, everyone in the room dies immediately (both characters and intruders). Then remove the token. \n.' +
            'If there was a fire marker in the room, remove it.\n' +
            'Bodies, intruder corpses, and dropped items remain in the room. \n\n',
        isComputer: false,
        actionsKey: 'airlockRoomActions',
    },
    cabins: {
        roomName: 'Cabins',
        roomType: 'additional',
        roomDescription: 'Those are cabins \n' +
            'Take a deep breath \n' +
            'If at the start of a new round your character is in this room and there are no intruders present, draw 1 additional action card (draw up to 6 instead of 5). \n ' +
            'This room action does not work if there is a malfunction marker in the room. \n\n',
        isComputer: false,
        actionsKey: 'cabinsRoomActions',
    },
    canteen: {
        roomName: 'Canteen',
        roomType: 'additional',
        roomDescription: 'This is canteen \n' +
            'Time for a snack... \n' +
            'Heal 1 light wound. \n ' +
            'Additionally, you may scan all Contamination cards in your hand and remove all UNINFECTED cards. \n' +
            'If at least one of the scanned cards is INFECTED, place a Larva on your character board (do not remove the INFECTED card!). \n ' +
            'If you already have a Larva figure on your board, your character dies. In that case, place 1 Creeper in this room. \n\n',
        isComputer: false,
        actionsKey: 'canteenRoomActions',
    },
    commandCenter: {
        roomName: 'Command center',
        roomType: 'additional',
        roomDescription: 'This is command center \n' +
            'Open/Close Doors \n' +
            'You may choose 1 room and open or close any doors in the corridors leading to that room. \n ' +
            'You can decide which doors to open and which to close — you don’t have to open or close all of them. \n\n',
        isComputer: true,
        actionsKey: 'commandCenterRoomActions',
    },
    engineControlRoom: {
        roomName: 'Engine control',
        roomType: 'additional',
        roomDescription: 'This is engine control room \n' +
            'Check Engine Status \n' +
            'You may check the status of 3 Engines. \n ' +
            'You can check the status of an engine even if there is a malfunction marker in its Engine Room. \n ' +
            'You cannot change engine status from the Engine Control Room. \n\n',
        isComputer: true,
        actionsKey: 'engineControlRoomActions',
    },
    podsControlRoom: {
        roomName: 'Pods control',
        roomType: 'additional',
        roomDescription: 'This is pods control room \n' +
            'Close/Open 1 Escape Pod \n' +
            'Flip 1 Escape Pod token to its closed or open side. \n\n',
        isComputer: false,
        actionsKey: 'podsControlRoomActions',
    },
    showers: {
        roomName: 'Showers',
        roomType: 'additional',
        roomDescription: 'Those are showers \n' +
            'Take a shower \n' +
            'If you have a Slime marker on your character board, discard it. \n ' +
            'Additionally, you may scan all Contamination cards in your hand and remove all UNINFECTED cards. \n ' +
            'If at least one of the scanned cards is INFECTED, place a Larva on your character board (do not remove the INFECTED card!). \n ' +
            'If you already have a Larva figure on your board, your character dies. In that case, place 1 Creeper in this room. \n\n',
        isComputer: false,
        actionsKey: 'showersRoomActions',
    },
    slimeCoveredRoom: {
        roomName: 'Slime covered room',
        roomType: 'additional',
        roomDescription: 'This is slime covered room \n' +
            'You\'ve been slimmed!\n' +
            'When you enter this room, you automatically gain a Slime marker. \n\n',
        isComputer: false,
        actionsKey: 'slimeCoveredRoomActions',
    },
    surveillanceRoom: {
        roomName: 'Surveillance room',
        roomType: 'additional',
        roomDescription: 'This is surveillance room \n' +
            'Peek at 1 Room and its Exploration Token \n' +
            'Peek at 1 unexplored room and the exploration token placed on it, without showing them to the other players. \n' +
            'After looking, return them to their place. \n ' +
            'You may, but don’t have to, tell the truth about what you saw. \n\n',
        isComputer: true,
        actionsKey: 'surveillanceRoomActions',
    }
}