const log4js = require('log4js')

const getLogger = (category, level = process.env.LOG_LEVEL) => {
    const logger = log4js.getLogger(category);
    logger.level = level;

    return logger;
};

module.exports = { getLogger }
