function jsonAppender(timezoneOffset) {

    return function(loggingEvent) {

        var eventData = [];

        loggingEvent.data.forEach(function(item) {

            if (item instanceof Error) {
                var error = {
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
            level: loggingEvent.level.levelStr,
            data: eventData
        };

        var json = JSON.stringify(event);

        console.log(json);
    };
}

function configure(config) {
    return jsonAppender(config.timezoneOffset);
}

exports.appender = jsonAppender;
exports.configure = configure;
