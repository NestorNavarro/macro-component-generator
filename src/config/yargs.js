const argv = require('yargs')
    .option({
        "name" : {
            alias : "n",
            type : "string",
            demandOption : true,
            describe : "This is the file name",
        },
        "dir" : {
            alias : "d",
            type : "string",
            default : "Components", 
            describe : "This is the dir name",
        }
    }).argv;


module.exports = {
    argv
}