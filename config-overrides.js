// -override
// module.exports = function override(config,env){
//     //do shuff with the webpack config...
//     return config;
// };

const { override,useBabelRc } = require("customize-cra");

module.exports = override(
    useBabelRc()
);
