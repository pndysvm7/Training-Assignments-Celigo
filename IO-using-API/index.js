var async  = require('async');
var request = require('request');


let token_auth = 'Bearer your token number';

let connection_data = {
  "exportConnectionID": "",
  "importConnectionID": "",
  "exportID":"",
  "importID": "",
  "integrationID" :"",
  "flowID" :""
};

let githubData = {
  "name": "Github Export using NODEJS 1",
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
  "name": "FTP import using NodeJS 1",
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
  "name": "Github to FTP integration using NodeJS 1",
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
  "name": "Github to FTP Flow using NODEJS 1",
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
    "name": "Github connection using NODEJS 1",
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
      "name": "FTP connection made with NodeJS 1",
      "debugDate": "2022-02-24T20:47:39.055Z",
      "sandbox": false,
      "ftp": {
        "type": "sftp",
        "hostURI": "celigo.files.com",
        "username": "shivam.pandey@celigo.com",
<<<<<<< HEAD
        "password": "ftp password goes here",
=======
        "password": "here goes the password for my ftp",
>>>>>>> refs/remotes/origin/master
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





const createGithubExportConnection = (options) => {
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

const createFTPImportConnection = (options) => {
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

const createGithubExport = (options) => {
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

const createFTPImport = (options) => {
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

const createIntegration = (options) => {
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

const createFlow = (options) => {
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



async.series([
  function(callback){
    createGithubExportConnection(githubExportConnectionOptions).then(res => {
      console.log(`github export connection created with id ${res}`);
      callback(null, res);
    })
    .catch(err => {
      console.log(err);
      callback(err,null);
    })
  },
  function(callback){
    createFTPImportConnection(ftpImportConnectionOptions).then(res => {
      console.log(`FTP IMPORT connection created with id ${res}`);
      callback(null, res);
    })
    .catch(err => {
      console.log(err);
      callback(err,null);
    })
  },
  function(callback){
    createGithubExport(githubExportOptions).then(res => {
      console.log(`github export created with id ${res}`);
      callback(null, res);
    })
    .catch(err => {
      console.log(err);
      callback(err,null);
    })
  },
  function(callback){
    createFTPImport(FTPImportOptions).then(res => {
      console.log(`FTP IMPORT created with id ${res}`);
      callback(null, res);
    })
    .catch(err => {
      console.log(err);
      callback(err,null);
    })
  },
  function(callback){
    createIntegration(createIntegrationOptions).then(res => {
      console.log(`New Integration created with id ${res}`);
      callback(null, res);
    })
    .catch(err => {
      console.log(err);
      callback(err,null);
    })
  },
  function(callback){
    createFlow(flowOptions).then(res => {
      console.log(`New Flow created with id ${res}`);
      callback(null, res);
    })
    .catch(err => {
      console.log(err);
      callback(err,null);
    })
  },
  
] , (err, res) => {
  if(err){
    console.log("some error occcured");
  };
  console.log(res);
  console.log(connection_data, "i am details");
})


