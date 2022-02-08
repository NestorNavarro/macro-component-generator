const fs = require('fs');

const verifyDir = (dir) => {
    if (!fs.existsSync(`./src/${dir}`)){
        fs.mkdirSync(`./src/${dir}`);
    }
};

const createDir = (dir, name) => {
    if (!fs.existsSync(`./src/${dir}/${name}`)){
        fs.mkdirSync(`./src/${dir}/${name}`);
    }
};

const createStyleFile = async (name, dir) => {
    try {
        const output = `
#${name} {

};
`;

        fs.writeFileSync(`./src/${dir}/${name}/${name}.scss`, output);

        return `./src/${dir}/${name}/${name}.scss`;

    } catch (error) {
        console.error("Error: [createStyleFile]", error);
    }
};

const createVisaulComponent = async (name, dir) => {
    try {
        const output = `
//Our Importations
import "./${name}.scss";

const ${name} = () => {
    return (
        <div id="${name}">
        </div>
    );
};
export default ${name};
`;

        fs.writeFileSync(`./src/${dir}/${name}/${name}.jsx`, output);

        return `./src/${dir}/${name}/${name}.jsx`;

    } catch (error) {
        console.error("Error: [createVisaulComponent]", error);
    }
};


const createContainerComponent = async (name, dir) => {
    try {
        const output = `
//Our Importations
import ${name} from "./${name}.jsx";

const ${name}Container = () => {

    return (
        <${name} 
            delegations={{

            }}
        />
    );
};
export default ${name}Container;
`;

        fs.writeFileSync(`./src/${dir}/${name}/${name}Container.jsx`, output);

        return `./src/${dir}/${name}/${name}.jsx`;

    } catch (error) {
        console.error("Error: [createContainerComponent]", error);
    }
};

const createIndex = async (name, dir) => {
    try {
        const output = `
export { default } from "./${name}Container.jsx";
`;

        fs.writeFileSync(`./src/${dir}/${name}/index.js`, output);

        return `./src/${dir}/${name}/index.js`;

    } catch (error) {
        console.error("Error: [createIndex]", error);
    }
};

const generateMacroComponent = async (name = "", dir = "Components") => {

    if (dir === "Pages") {
        name += (dir.substring(0, dir.length - 1));
    }


    await verifyDir(dir);
    await createDir(dir, name);
    await createStyleFile(name, dir);
    await createVisaulComponent(name, dir);
    await createContainerComponent(name, dir);
    await createIndex(name, dir);
};

module.exports = {
    generateMacroComponent,
}