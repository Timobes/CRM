const { program } = require('commander');
const fs = require('fs');
const path = require('path');

const createDirectory = (name) => {
    const directoryPath = path.join('C:', 'Users', 'Timur-It', 'Desktop', 'git project', 'CRM', 'backend', 'routers');
    const fileName = `${name}Router.js`;
    const filePath = path.join(directoryPath, fileName);
    const fileContent = `
const Router  = require('express')
const ${name}Router = new Router()

${name}Router.post('/', ${name}Controller)

module.exports = ${name}Router
    `;
    
    // Создание директории, если она не существует
    try {
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }
    } catch (err) {
        console.error(`Error creating directory: ${err.message}`);
        process.exit(1);
    }
    
    // Создание файла
    try {
        fs.writeFileSync(filePath, fileContent);
        console.log(`File created: ${filePath}`);
    } catch (err) {
        console.error(`Error creating file: ${err.message}`);
        process.exit(1);
    }
    
};

program
    .version('0.0.1')
    .argument('<name>', 'Name of the router directory')
    .action((name) => {
        if (!name) {
            console.error('Please provide a name for the router directory.');
            process.exit(1);
        }
        createDirectory(name);
    })
    .parse(process.argv);
