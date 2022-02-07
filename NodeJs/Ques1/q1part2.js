const fs = require('fs');
const xml2js = require('xml2js')


const fpath = './input.xml';



const convertXMLToJson = (xml) => {
    let result;
    xml2js.parseString(xml, (err, res) => {
        if (err) {
            console.log('can not convert to json');
            throw err;
        }

        result = JSON.stringify(res);
    });

    return result;
}


async function readMyFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, content) => {
            if (err) {
                return reject(err);
            }
            return resolve(content);
        })
    })
}



const convertToJs = async (filepath) => {

    let xml = await readMyFile(filepath);
    return convertXMLToJson(xml);


}



convertToJs(fpath).then((res) => console.log(res)).catch(e => console.log('error hai'));

