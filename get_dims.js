const fs = require('fs');
const path = require('path');

const files = [
    'public/assets/workflow1.png',
    'public/assets/Services.jpg',
    'public/assets/workflow3.jpg',
    'public/assets/Case-study.jpg'
];

files.forEach(file => {
    try {
        const buffer = fs.readFileSync(path.join(__dirname, file));
        let width, height;
        if (file.endsWith('.png')) {
            width = buffer.readUInt32BE(16);
            height = buffer.readUInt32BE(20);
        } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            let i = 2;
            while (i < buffer.length) {
                while (buffer[i] !== 0xFF) i++;
                while (buffer[i] === 0xFF) i++;
                if (i >= buffer.length) break;
                const marker = buffer[i];
                i++;
                const len = buffer.readUInt16BE(i);
                if (marker === 0xC0 || marker === 0xC2) { // SOF0 or SOF2
                    height = buffer.readUInt16BE(i + 3);
                    width = buffer.readUInt16BE(i + 5);
                    break;
                }
                i += len;
            }
        }
        console.log(`${file}: ${width}x${height}`);
    } catch (e) {
        console.error(`Error reading ${file}: ${e.message}`);
    }
});
