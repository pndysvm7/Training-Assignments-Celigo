// var async  = require('async');
// var request = require('request');


let token_auth = 'Bearer e1fe580f161f43639e9776c5504ba685';

let connection_data = {
  "exportConnectionID": "",
  "importConnectionID": "",
  "exportID":"",
  "importID": "",
  "integrationID" :"",
  "flowID" :""
};

let githubData = {
  "name": "Github Export using NODEJS 1 Testing Testing",
  "_connectionId": connection_data["exportConnectionID"],
  "apiIdentifier": "eb109453df",
  "asynchronous": true,
  "oneToMany": false,
  "sandbox": false,
  "http": {
    "relativeURI": "/users/pndysvm7",
    "method": "GET",
    "headers": [
      {
        "name": "user-agent",
        "value": "*"
      },
      {
        "name": "accept",
        "value": "application/vnd.github.v3+json"
      }
    ],
    "successMediaType": "json",
    "errorMediaType": "json",
    "formType": "rest"
  },
  "rawData": "61d7c83ace726e46bf3c10ce78390e8a701544c2a988a5b02f2e2525",
  "adaptorType": "HTTPExport"
}



let ftpdata = {
  "name": "FTP import using NodeJS 1 Testing testing",
  "_connectionId": connection_data["importConnectionID"],
  "apiIdentifier": "if3420a8e9",
  "oneToMany": false,
  "sandbox": false,
  "mapping": {
    "fields": [
      {
        "extract": "login",
        "generate": "user"
      }
    ]
  },
  "file": {
    "fileName": "nodejsuser-{{timestamp}}.json",
    "type": "json"
  },
  "ftp": {
    "directoryPath": "ShivamPandey",
    "fileName": "nodejsuser-{{timestamp}}.json"
  },
  "adaptorType": "FTPImport"
}

let integrationData = {
  "name": "Github to FTP integration using NodeJS 1 Testing Testing",
  "install": [],
  "sandbox": false,
  "_registeredConnectionIds": [
    connection_data["exportID"],
    connection_data["importID"]
  ],
  "installSteps": [],
  "uninstallSteps": [],
  "flowGroupings": []
}


let flowData = {
  "name": "Github to FTP Flow using NODEJS 1 Testing testing",
  "disabled": true,
  "_integrationId": connection_data["integrationID"],
  "skipRetries": false,
  "pageProcessors": [
    {
      "responseMapping": {
        "fields": [],
        "lists": []
      },
      "type": "import",
      "_importId": connection_data["importID"]
    }
  ],
  "pageGenerators": [
    {
      "_exportId": connection_data["exportID"],
      "skipRetries": false
    }
  ],
  "createdAt": "2022-02-22T05:23:41.131Z",
  "lastExecutedAt": "2022-02-24T20:33:33.020Z",
  "autoResolveMatchingTraceKeys": true
}


var githubExportConnectionOptions = {
  'method': 'POST',
  'url': 'https://api.integrator.io/v1/connections',
  'headers': {
    'Authorization': token_auth,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "type": "http",
    "name": "Github connection using NODEJS 1 Testing Testing",
    "sandbox": false,
    "http": {
      "formType": "rest",
      "mediaType": "json",
      "baseURI": "https://api.github.com",
      "ping": {
        "successValues": [],
        "failValues": []
      },
      "rateLimit": {
        "failValues": []
      },
      "headers": [
        {
          "name": "user-agent",
          "value": "*"
        },
        {
          "name": "accept",
          "value": "application/vnd.github.v3+json"
        }
      ],
      "unencrypted": {
        "field": "value"
      },
      "encrypted": "******",
      "auth": {
        "type": "cookie",
        "failValues": [],
        "oauth": {
          "scope": []
        },
        "cookie": {
          "uri": "https://api.github.com",
          "method": "GET"
        }
      }
    }
  })

};


var ftpImportConnectionOptions = {
    'method': 'POST',
    'url': 'https://api.integrator.io/v1/connections',
    'headers': {
      'Authorization': token_auth,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "type": "ftp",
      "name": "FTP connection made with NodeJS 1 Testing Testing",
      "debugDate": "2022-02-24T20:47:39.055Z",
      "sandbox": false,
      "ftp": {
        "type": "sftp",
        "hostURI": "celigo.files.com",
        "username": "shivam.pandey@celigo.com",
        "password": "your password",
        "port": 22,
        "usePassiveMode": true,
        "userDirectoryIsRoot": false,
        "useImplicitFtps": false,
        "requireSocketReUse": false
      }
    })
  
};

var githubExportOptions = {
    'method': 'POST',
    'url': 'https://api.integrator.io/v1/exports',
    'headers': {
      'Authorization': token_auth,
      'Content-Type': 'application/json'
    },
};

var FTPImportOptions = {
    'method': 'POST',
    'url': 'https://api.integrator.io/v1/imports',
    'headers': {
      'Authorization': token_auth,
      'Content-Type': 'application/json'
    },
};

var createIntegrationOptions = {
    'method': 'POST',
    'url': 'https://api.integrator.io/v1/integrations',
    'headers': {
      'Authorization': token_auth,
      'Content-Type': 'application/json'
    },
  
};


var flowOptions = {
    'method': 'POST',
    'url': 'https://api.integrator.io/v1/flows',
    'headers': {
      'Authorization': token_auth,
      'Content-Type': 'application/json'
    },
  
};





exports.createGithubExportConnection = (options) => {
  options = githubExportConnectionOptions;
  return new Promise((resolve, reject) => {
    request(options , function (error, response) {
      if (error){
          return reject(error)
      } 
      let data = JSON.parse(response.body);
      connection_data["exportConnectionID"] = data["_id"];
      resolve(data["_id"]);
    }) 
  })
}

exports.createFTPImportConnection = (options) => {
  options = ftpImportConnectionOptions;
  return new Promise((resolve, reject) => {
    request(options , function (error, response) {
      if (error){
          return reject(error)
      } 
      let data = JSON.parse(response.body);
      connection_data["importConnectionID"] = data["_id"];
      resolve(data["_id"]);
    }) 
  })

}

exports.createGithubExport = (options) => {
  options = githubExportOptions;

  githubData["_connectionId"] = connection_data["exportConnectionID"];
  options.body = JSON.stringify(githubData);
  
  return new Promise((resolve, reject) => {
    request(options, function (error, response) {
      if (error){
          return reject(error);
      };
    
      
      let data = JSON.parse(response.body);
      
      connection_data["exportID"] = data["_id"];
      resolve(data["_id"]);
  })

  })

}

exports.createFTPImport = (options) => {
  options = FTPImportOptions;
  ftpdata["_connectionId"] = connection_data["importConnectionID"];

  options["body"] = JSON.stringify(ftpdata);

  return new Promise((resolve,reject) => {
    request(options , function (error, response) {
      if (error) {
          return reject(error)
      }
      let data = JSON.parse(response.body);
      connection_data["importID"] = data["_id"];
      resolve(data["_id"]);
  })

  })
}

exports.createIntegration = (options) => {
  options = createIntegrationOptions;
  integrationData["_registeredConnectionIds"] = [
    connection_data["exportID"],
    connection_data["importID"]
  ];

  options["body"] = JSON.stringify(integrationData);
  // console.log(options)

  return new Promise((resolve,reject) => {
    request(options , function (error, response) {
      if (error) {
          return reject(error)
      }
      let data = JSON.parse(response.body);
      connection_data["integrationID"] = data["_id"];
      resolve(data["_id"]);
  })

  })


}

exports.createFlow = (options) => {
  options = flowOptions;
  flowData["_integrationId"] =  connection_data["integrationID"];
  flowData.pageProcessors[0]._importId = connection_data["importID"];
  flowData.pageGenerators[0]._exportId = connection_data["exportID"];

  options["body" ] = JSON.stringify(flowData);

  // console.log(options);

  return new Promise((resolve,reject) => {
    request(options , function (error, response) {
      if (error) {
          return reject(error)
      }
      let data = JSON.parse(response.body);
      connection_data["flowID"] = data["_id"];
      resolve(data["_id"]);
  })

  })


}




