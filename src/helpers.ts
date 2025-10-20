import fs from 'fs';
import path from 'path';

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
            fs.mkdirSync(dirPath, { recursive: true });
        }
        const filePath = path.join(dirPath, fileName);
        const json = this.stringifyWithInlineArrays(board, 2);
        fs.writeFileSync(filePath, json, 'utf-8');
    }
}