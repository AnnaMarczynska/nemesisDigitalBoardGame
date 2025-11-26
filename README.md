# Nemesis Board Game Digital Version

## Overview
This is a project aiming to create a digital version of Nemesis Board Game.
Factory Pattern is used for rooms-, corridors- and hexes-specific data. 

## Project Structure

### dataStorage folder
- board folder
    - charactersPositionOnBoard.json: stores current positions of all characters on the board
    - corridorsBoard.json: data for all corridors: areRipples, connectedRooms 
    - currentPlayerNumber.json: stores order number of a player who is taking ripple test
    - numberOfPlayers.json: stores the number of players for a particular game session
    - roomsBoard.json: instance of rooms on the board used during game
- coordinates folder
    - coordinatesSets.json: predefined sets of coordinates
    - gameCoordinates.json: stores coordinates set drawn for a particular game session
- decks folder
- nemesis folder
    - drawnNemesisWeaknesses.json: stores drawn nemesis weaknesses for particular game session
    - nemesisBag.json: stores drawn nemesis tokens for particular game session
    - nemesisTokens: all nemesis tokens data: type & danger level
    - nemesisWeaknesses: all nemesis weaknesses data
- corridorsData.ts: data for a corridor: if there are ripples, what values triggers ripples and info about connected rooms
- hexesData.ts: data for all hex types: type, related rooms and related corridors data
- roomsData.ts: data for all room types: room name, type, description, computer information
- roomStatusData.ts: data for room statuses: statuses (slime, door, damaged, fire, silence, danger) and items count

### rooms folder

    - baseRoom.ts: base class for all room types
    - roomsSpecificActions.ts: extends baseRoom by adding specific actions for each room
    - roomManager.ts: responsible for single room creation and creation of shuffled rooms and room statuses for game setup

### board folder

    - hex.ts: base class for hexes
    - corridor.ts: base class for corridors
    - boardManager.ts: responsible for board creation and management, including creation of 
    hexes and corridors relation and assigning rooms to hexes

### other files

    - helpers.ts: helper functions used across the project like board saving/loading, easier data formatting
    - movement.ts: handles ripple test and ripple effects on corridors
    - nemesis.ts: nemesis related data and actions such as nemesis drawing tokens, weaknesses, revealing nemesis
    - scripts.ts: scripts for maintaining game process

## Scripts

- npx ts-node src/scripts.ts gameSetup - Sets up a new game session
- npx ts-node src/scripts.ts afterGameCleanUp - Cleans up data after game session ends
- npx ts-node src/scripts.ts ripplesTest - Performs a movement attempt of player's character including ripple test
