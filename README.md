# log4js-json

json appender

## install

```
npm i log4js-json
```


## Usage

```js

var log4js = require('log4js');
var appender = require('log4js-json');

// log serialized json into console
log4js.loadAppender('json', appender());
log4js.addAppender(log4js.appenders.json());

var logger = log4js.getLogger();

logger.info('test ...');

// OR pass callback

log4js.loadAppender('json', appender(function (event) {
    // got event object, write to file or send to log system
    console.log(event);
}));

log4js.addAppender(log4js.appenders.json());


// OR

var log4js = require('log4js');
log4js.loadAppender('log4js-json');
log4js.addAppender(log4js.appenders['log4js-json'](), 'json');

var logger = log4js.getLogger('json');

logger.info('test info message');
```

## output

```
{"time":1446700684393,"level":"TRACE","data":["trace test"]}
[2015-11-05 11:18:04.393] [TRACE] json - trace test

{"time":1446700684399,"level":"DEBUG","data":["debug test"]}
[2015-11-05 11:18:04.399] [DEBUG] json - debug test

{"time":1446700684399,"level":"INFO","data":["info test"]}
[2015-11-05 11:18:04.399] [INFO] json - info test

{"time":1446700684400,"level":"WARN","data":["warn test"]}
[2015-11-05 11:18:04.400] [WARN] json - warn test

{"time":1446700684400,"level":"ERROR","data":[{"message":"test error","stack":"Error: test error\n    at Object.<anonymous> (/Users/alexv/github/log4js-json/test.js:14:14)\n    at Module._compile (module.js:434:26)\n    at Object.Module._extensions..js (module.js:452:10)\n    at Module.load (module.js:355:32)\n    at Function.Module._load (module.js:310:12)\n    at Function.Module.runMain (module.js:475:10)\n    at startup (node.js:117:18)\n    at node.js:951:3"}]}
[2015-11-05 11:18:04.400] [ERROR] json - [Error: test error]
Error: test error
    at Object.<anonymous> (/Users/alexv/github/log4js-json/test.js:14:14)
    at Module._compile (module.js:434:26)
    at Object.Module._extensions..js (module.js:452:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:475:10)
    at startup (node.js:117:18)
    at node.js:951:3

{"time":1446700684403,"level":"ERROR","data":["test error"]}
[2015-11-05 11:18:04.403] [ERROR] json - test error

{"time":1446700684403,"level":"FATAL","data":["fatal test"]}
[2015-11-05 11:18:04.403] [FATAL] json - fatal test

{"time":1446700684403,"level":"MARK","data":["mark test"]}
[2015-11-05 11:18:04.403] [MARK] json - mark test
```
