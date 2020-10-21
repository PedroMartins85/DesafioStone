const winston = require('winston');
const { combine, timestamp, label, printf, colorize } = winston.format;

const logger = winston.createLogger({
    format: combine(
        label({ label: 'CUSTOM', message: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        colorize(),
        printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: winston.format.json()
        })
    ]
});

module.exports = logger;