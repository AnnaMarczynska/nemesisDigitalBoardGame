export const Decks: { [key: string]: { title: string; actionCost: number; description: string }[] } = {
    captainDeck: [
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Rest', actionCost: 1, description: 'Heal 1 Light Wound OR scan a Contamination card and remove if infected.' },
        { title: 'Demolition', actionCost: 2, description: 'Destroy 1 Door or destroy Technical Corridor in your room.' },
        { title: 'Interruption', actionCost: 0, description: 'Play when another character declares an Action: cancel or force change.' },
        { title: 'Reload', actionCost: 1, description: 'Add 1 Ammo to your weapon.' },
        { title: 'Suppressive Fire', actionCost: 2, description: 'Escape yourself or another without Intruder attack (discard 1 Ammo).' },
        { title: 'Basic Repairs', actionCost: 2, description: 'Remove Malfunction marker from current room.' },
        { title: 'Order', actionCost: 2, description: 'Move another character to adjacent room (with/without consent).' },
        { title: 'Motivation', actionCost: 0, description: 'Everyone in your room draws 1 card.' }
    ],
    soldierDeck: [
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Rest', actionCost: 1, description: 'Heal 1 Light Wound OR scan a Contamination card and remove if infected.' },
        { title: 'Demolition', actionCost: 2, description: 'Destroy 1 Door or destroy Technical Corridor in your room.' },
        { title: 'Interruption', actionCost: 0, description: 'Play when another character declares an Action: cancel or force change.' },
        { title: 'Taking Aim', actionCost: 0, description: 'Reroll first miss from an Energy Weapon attack.' },
        { title: 'Covering Fire', actionCost: 2, description: 'Use 1 Ammo to let you/ally Escape without Intruder attack.' },
        { title: 'Full Auto', actionCost: 2, description: 'Spend all Ammo; deal +1 dmg for every 2 Ammo (even on miss).' },
        { title: 'Nerves of Steel', actionCost: 1, description: 'Ignore a Surprise Attack.' },
        { title: 'Basic Repairs', actionCost: 2, description: 'Remove Malfunction marker from current room.' }
    ],
    scoutDeck: [
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Rest', actionCost: 1, description: 'Heal 1 Light Wound OR scan a Contamination card and remove if infected.' },
        { title: 'Demolition', actionCost: 2, description: 'Destroy 1 Door or destroy Technical Corridor in your room.' },
        { title: 'Interruption', actionCost: 0, description: 'Play when another character declares an Action: cancel or force change.' },
        { title: 'Scavenging', actionCost: 1, description: 'Perform Search even if room is empty.' },
        { title: 'Suppressive Fire', actionCost: 2, description: 'Escape yourself or another without Intruder attack (discard 1 Ammo).' },
        { title: 'Basic Repairs', actionCost: 2, description: 'Remove Malfunction marker from current room.' },
        { title: 'Reconnaissance', actionCost: 1, description: 'Move without rolling for Noise.' },
        { title: 'Adrenaline', actionCost: 0, description: 'Immediately Escape or Shoot and draw 1 card.' }
    ],
    mechanicDeck: [
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Rest', actionCost: 1, description: 'Heal 1 Light Wound OR scan a Contamination card and remove if infected.' },
        { title: 'Demolition', actionCost: 2, description: 'Destroy 1 Door or destroy Technical Corridor in your room.' },
        { title: 'Interruption', actionCost: 0, description: 'Play when another character declares an Action: cancel or force change.' },
        { title: 'Ingenuity', actionCost: 1, description: 'Craft item using any Yellow Item as component; also repair malfunction/engine.' },
        { title: 'Pyrotechnics', actionCost: 1, description: 'Discard Fire marker OR discard an Item to place Fire marker.' },
        { title: 'Fast Repairs', actionCost: 0, description: 'Remove Malfunction marker from current room.' },
        { title: 'Technical Corridors', actionCost: 1, description: 'Move via Technical Corridors without drawing Event card.' },
        { title: 'Computer Skills', actionCost: 1, description: 'Open/Close Door or use Computer room action for free.' }
    ],
    scientistDeck: [
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Rest', actionCost: 1, description: 'Heal 1 Light Wound OR scan a Contamination card and remove if infected.' },
        { title: 'Demolition', actionCost: 2, description: 'Destroy 1 Door or destroy Technical Corridor in your room.' },
        { title: 'Interruption', actionCost: 0, description: 'Play when another character declares an Action: cancel or force change.' },
        { title: 'Risk Assessment', actionCost: 0, description: 'Look at next Event if in Computer room; place back on top/bottom.' },
        { title: 'Blocking Access', actionCost: 1, description: 'Use Computer rooms for free OR place Malfunction in Computer room.' },
        { title: 'Repairs', actionCost: 1, description: 'Remove Malfunction marker from current room' },
        { title: 'Intranet', actionCost: 0, description: 'In Computer room: use another Computer room’s action for free.' },
        { title: 'Computer Skills', actionCost: 0, description: 'Open/Close Door or use Computer room action for free.' }
    ],
    pilotDeck: [
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Search', actionCost: 1, description: 'Draw 2 cards from the Item deck of this room’s color.' },
        { title: 'Rest', actionCost: 1, description: 'Heal 1 Light Wound OR scan a Contamination card and remove if infected.' },
        { title: 'Demolition', actionCost: 2, description: 'Destroy 1 Door or destroy Technical Corridor in your room.' },
        { title: 'Interruption', actionCost: 0, description: 'Play when another character declares an Action: cancel or force change.' },
        { title: 'Respite', actionCost: 1, description: 'Draw 2 cards if Section has Power.' },
        { title: 'Improvised Weapon', actionCost: 0, description: 'If holding Heavy Item, deal 1 Injury to Intruder.' },
        { title: 'Repairs', actionCost: 0, description: 'Remove Malfunction marker from current room (discounted version).' },
        { title: 'Backdoor', actionCost: 1, description: 'In Computer room with Power: send Signal OR peek at CSS token.' },
        { title: 'Computer Skills', actionCost: 0, description: 'Open/Close Door or use Computer room action for free.' }
    ]
}