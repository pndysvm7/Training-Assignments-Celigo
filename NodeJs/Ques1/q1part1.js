const fs = require('fs');
const xml2js = require('xml2js');



let XMLData = `<person >
<name>Shivam Pandey</name>
<title>Engineering Intern</title>
<title>Student</title>
<team>Core</team>
<age>22</age>

<about> Final Year at VNIT Nagpur </about>
</person>`

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

let jsonData = convertXMLToJson(XMLData);
console.log(jsonData);



