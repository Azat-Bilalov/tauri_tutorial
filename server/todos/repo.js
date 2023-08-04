// todo repository
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'todos.json');

const readData = () => {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
}

const writeData = (data) => {
    const dataStr = JSON.stringify(data);
    fs.writeFileSync(dataPath, dataStr);
}

module.exports = {
    readData,
    writeData
}
