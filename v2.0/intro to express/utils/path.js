const path = require('path');


console.log(path.dirname(require.main.filename));


module.exports = path.dirname(process.mainModule.filename);