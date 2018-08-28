const routes = require('./routes');
module.exports = function (app, err) {
    routes(app, err);
};