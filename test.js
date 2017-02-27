var stackRemap = require('./index.js');

// override prepareStackTrace
stackRemap.install();

// setup your mappings
stackRemap.add([
    {
        source: '/path/to/my/src/one.js',
        original: { line: 1, column: 0 },
        generated: { line: 5, column: 0 },
        totalLines: 80
    },
    {
        source: '/path/to/my/src/two.js',
        original: { line: 1, column: 0 },
        generated: { line: 85, column: 0 },
        totalLines: 120
    }
]);

// run your code and see the stack
console.log(new Error('foo'));

// reset mappings if desired
stackRemap.reset();

// stop overriding prepareStackTrace
stackRemap.uninstall();

// everything is back to normal
console.log(new Error('foo'));
