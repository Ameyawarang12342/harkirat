const fs = require("fs");
const path = require("path");

try {
    const filePath = path.resolve(__dirname, 'readme.txt');
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}
