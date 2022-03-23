exports.add = (a,b) => {
    return a+b;
}

exports.addCallback = (a,b,callback) => {
    setTimeout( () => {
        return callback(null, a+b);

    },1000 )
}


exports.addPromise = (a,b) => {
    // return Promise.reject('fake')
    return Promise.resolve(a+b);
}




// async.series([
//   function(callback){
//     createGithubExportConnection(githubExportConnectionOptions).then(res => {
//       console.log(`github export connection created with id ${res}`);
//       callback(null, res);
//     })
//     .catch(err => {
//       console.log(err);
//       callback(err,null);
//     })
//   },
//   function(callback){
//     createFTPImportConnection(ftpImportConnectionOptions).then(res => {
//       console.log(`FTP IMPORT connection created with id ${res}`);
//       callback(null, res);
//     })
//     .catch(err => {
//       console.log(err);
//       callback(err,null);
//     })
//   },
//   function(callback){
//     createGithubExport(githubExportOptions).then(res => {
//       console.log(`github export created with id ${res}`);
//       callback(null, res);
//     })
//     .catch(err => {
//       console.log(err);
//       callback(err,null);
//     })
//   },
//   function(callback){
//     createFTPImport(FTPImportOptions).then(res => {
//       console.log(`FTP IMPORT created with id ${res}`);
//       callback(null, res);
//     })
//     .catch(err => {
//       console.log(err);
//       callback(err,null);
//     })
//   },
//   function(callback){
//     createIntegration(createIntegrationOptions).then(res => {
//       console.log(`New Integration created with id ${res}`);
//       callback(null, res);
//     })
//     .catch(err => {
//       console.log(err);
//       callback(err,null);
//     })
//   },
//   function(callback){
//     createFlow(flowOptions).then(res => {
//       console.log(`New Flow created with id ${res}`);
//       callback(null, res);
//     })
//     .catch(err => {
//       console.log(err);
//       callback(err,null);
//     })
//   },
  
// ] , (err, res) => {
//   if(err){
//     console.log("some error occcured");
//   };
//   console.log(res);
//   console.log(connection_data, "i am details");
// })

