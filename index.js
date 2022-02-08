const { argv } = require("./src/config/yargs");
const { generateMacroComponent } = require("./src/helpers/generateMacroComponent");

generateMacroComponent(argv.n, argv.d);