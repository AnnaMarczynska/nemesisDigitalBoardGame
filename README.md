# Nemesis Board Game Digital Version

## Overview
This is a project aiming to create a digital version of Nemesis Board Game.
Factory Pattern is used for rooms-, corridors- and hexes-specific data. 

## Project Structure

### dataStorage folder

    - roomsData.ts: data for all room types: room name, type, description, computer information
    - hexesData.ts: data for all hex types: type, related rooms and related corridors data
    - corridorsData.ts: data for corridor: if there are ripples, what values triggers ripples and info about connected rooms
    - roomStatusData.ts: data for room statuses: statuses (slime, door, damaged, fire, silence, danger) and items count
    - corridorsBoard.json: instance of corridors on the board used during game
    - roomsBoard.json: instance of rooms on the board used during game

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
    - scripts.ts: scripts for maintaining game process

## Scripts

- npx ts-node src/scripts.ts gameSetup - Sets up a new game session.
