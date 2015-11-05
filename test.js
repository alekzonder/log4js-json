var log4js = require('log4js');

var appender = require('./index');

log4js.loadAppender('json', appender);
log4js.addAppender(log4js.appenders.json(), 'json');

var logger = log4js.getLogger('json');

logger.trace('trace test');
logger.debug('debug test');
logger.info('info test');
logger.warn('warn test');
logger.error(new Error('test error'));
logger.error('test error');
logger.fatal('fatal test');
logger.mark('mark test');
