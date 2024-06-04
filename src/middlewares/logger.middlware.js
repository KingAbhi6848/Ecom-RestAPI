import fs from 'fs';

const fsPromise = fs.promises;

async function log(logData) {
    try {
        logData = new Date().toString() + ". log Data: " + logData + '\n';
        await fsPromise.appendFile("log.txt", logData);
    } catch (error) {
        console.log(error);
    }
}

const loggerMiddleware = async (req, res, next) => {
    const logData = `${req.url} - ${JSON.stringify(req.body)}`;
    await log(logData);
    next();
}

export default loggerMiddleware;
