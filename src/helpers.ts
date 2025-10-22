import fs from 'fs';
import path from 'path';
import readline from 'readline';

export class Helpers {

    // Custom JSON stringify to keep arrays inline as the outer library solution doesn't work with scripts
    stringifyWithInlineArrays(obj: any, space = 2): string {
        return JSON.stringify(obj, (key, value) => value, space)
            .replace(/\[\s+([\s\S]*?)\s+\]/g, (match, group) => {
                // remove internal whitespace and line breaks
                const compact = group.replace(/\s+/g, ' ').trim();
                return `[ ${compact} ]`;
            });
    }

    saveBoardToFile(board: any, fileName: string) {
        const dirPath = path.join(process.cwd(), 'dataStorage');
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, {recursive: true});
        }
        const filePath = path.join(dirPath, fileName);
        const json = this.stringifyWithInlineArrays(board, 2);
        fs.writeFileSync(filePath, json, 'utf-8');
    }

    async loadFile(fileName: string): Promise<any> {
        const filePath = path.join(process.cwd(), 'dataStorage', fileName);
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    async rollDice() {
        return Number(Math.floor(Math.random() * 6) + 1);
    }

    async roomToLeaveNumber(): Promise<number> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const roomNumber = await new Promise<number>((resolve) =>
            rl.question('Enter room number you want to leave: ', (answer) => {
                rl.close();
                resolve(parseInt(answer, 10));
            })
        );
        if (isNaN(roomNumber) || roomNumber < 1 || roomNumber > 23) {
            console.log('Invalid room number. Please enter a number between 1 and 23.');
            return this.roomToLeaveNumber(); // recursion, no double closing
        }
        return roomNumber;
    }

    async roomToEnterNumber(): Promise<number> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const roomNumber = await new Promise<number>((resolve) =>
            rl.question('Enter room number you want to enter: ', (answer) => {
                rl.close();
                resolve(parseInt(answer, 10));
            })
        );
        if (isNaN(roomNumber) || roomNumber < 1 || roomNumber > 23) {
            console.log('Invalid room number. Please enter a number between 1 and 23.');
            return this.roomToEnterNumber(); // recursion, no double closing
        }
        return roomNumber;
    }
}