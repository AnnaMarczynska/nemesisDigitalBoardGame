import fs from 'fs';
import path from 'path';
import readline from 'readline';

const DATA_PATH = path.resolve(process.cwd(), 'dataStorage');

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

    async saveFile(data: any, fileName: string, folderPath?: string) {
        const targetDir = folderPath ? path.join(DATA_PATH, folderPath) : DATA_PATH;
        const filePath = path.join(targetDir, fileName);
        await fs.promises.mkdir(path.dirname(filePath), {recursive: true});
        await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    }

    async loadFile(fileName: string, folderPath?: string) {
        const targetDir = folderPath ? path.join(DATA_PATH, folderPath) : DATA_PATH;
        const filePath = path.join(targetDir, fileName);
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    }

    async rollDice() {
        return Number(Math.floor(Math.random() * 6) + 1);
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

    async askQuestion(question: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return await new Promise<string>((resolve) =>
            rl.question(question, (response) => {
                rl.close();
                resolve(response);
            })
        );
    }
}
