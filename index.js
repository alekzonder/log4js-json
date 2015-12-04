module.exports = function (callback) {

    function jsonAppender(timezoneOffset) {

        return function(loggingEvent) {

            var eventData = [];

            loggingEvent.data.forEach(function(item) {

                if (item instanceof Error) {
                    var error = {
                        is_error: true,
                        message: item.message,
                        code: item.code,
                        stack: item.stack
                    };

                    eventData.push(error);
                } else {
                    eventData.push(item);
                }

            });

            var event = {
                time: loggingEvent.startTime.getTime(),
                level_int: loggingEvent.level.level,
                level: loggingEvent.level.levelStr,
                data: eventData
            };

            if (!callback) {
                var json = JSON.stringify(event);
                console.log(json);
            } else {
                callback(event);
            }
        };
    }

    function configure(config) {
        return jsonAppender(config.timezoneOffset);
    }

    return {
        appender: jsonAppender,
        configure: configure
    };
};
