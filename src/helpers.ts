import stringify from 'json-stringify-pretty-compact';
import fs from 'fs';
import path from 'path';

export class Helpers {

    saveBoardToFile(board: any, filename: string) {
        const filePath = path.resolve('./dataStorage', filename);
        const json = stringify(board, { maxLength: 80 });
        fs.writeFileSync(filePath, json, 'utf-8');
    }
}