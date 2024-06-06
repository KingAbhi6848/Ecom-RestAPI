// import fs from 'fs';

import winston from "winston";

// const fsPromise = fs.promises;

// async function log(logData) {
//     try {
//         logData = new Date().toString() + ". log Data: " + logData + '\n';
//         await fsPromise.appendFile("log.txt", logData);
//     } catch (error) {
//         console.log(error);
//     }
// }

const loggerMiddleware = async (req, res, next) => {
    const logData = `${req.url} - ${JSON.stringify(req.body)}`;
    logger.info(logData);
    next();
}

const logger = winston.createLogger(
    {
        level:'info',
        format: winston.format.json(),
        defaultMeta: {service: 'request-logging'}  ,
        transports: [
            new winston.transports.File({filename: "Log2.txt"})
        ]
    }
);
export default loggerMiddleware;
