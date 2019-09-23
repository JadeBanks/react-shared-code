var path = require ('path');
var fs = require ('fs');

const {
    override,
    babelInclude,
} = require("customize-cra");

module.exports = function (config, env) {
    return Object.assign(config, override(
        babelInclude([
            path.resolve('src'),
            fs.realpathSync('node_modules/shared')
        ])
        )(config, env)
    )
}