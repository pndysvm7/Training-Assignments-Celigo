const chai = require('chai');

const expect = chai.expect;

const index = require('./index')

describe('index file ' , ()=> {
    
    context('check github connection' , ()=> {
        it('should check github connection' , (done)=> {
            index.createGithubExportConnection('').then(result=> {
                 
                console.log( `github export connection created with ${result}`);
                expect(result).to.be.a('string');
                done();
            }).catch(err => {
                console.log('error caught');
                done(err);
            })

        })
    })

    context('check FTP connection' , ()=> {
        it('should check FTP connection' , (done)=> {
            index.createFTPImportConnection('').then(result=> {
                 
                console.log( `FTP import conection created with ${result}`);
                expect(result).to.be.a('string');
                done();
            }).catch(err => {
                console.log('error caught');
                done(err);
            })

        })
    })


    context('create a github export' , ()=> {
        it('should check the github export' , (done)=> {
            index.createGithubExport('').then(result=> {
                 
                console.log( `github export created with ${result}`);
                expect(result).to.be.a('string');
                done();
            }).catch(err => {
                console.log('error caught');
                done(err);
            })

        })
    })

    context('create a FTP import' , ()=> {
        it('should check the FTP import' , (done)=> {
            index.createFTPImport('').then(result=> {
                 
                console.log( `ftp import created with ${result}`);
                expect(result).to.be.a('string');
                done();
            }).catch(err => {
                console.log('error caught');
                done(err);
            })

        })
    })

    context('create an Integration' , ()=> {
        it('should check the Integration' , (done)=> {
            index.createIntegration('').then(result=> {
                 
                console.log( `Integration created with ${result}`);
                expect(result).to.be.a('string');
                done();
            }).catch(err => {
                console.log('error caught');
                done(err);
            })

        })
    })


    context('create a Flow' , ()=> {
        it('should check the Flow' , (done)=> {
            index.createFlow('').then(result=> {
                 
                console.log( `Flow created with ${result}`);
                expect(result).to.be.a('string');
                done();
            }).catch(err => {
                console.log('error caught');
                done(err);
            })

        })
    })


})