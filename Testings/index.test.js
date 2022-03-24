const chai = require('chai');

const expect = chai.expect;

const index = require('./index')

describe('index file ' , ()=> {

    context("should check the integration" , ()=> {

        it('should check the connection created has types , exports and imports have connection IDs present and flow has integration id , export id and importid' , (done)=>{
            index.main().then(result => {
                expect(result.exportConnection).to.have.property('type').to.not.equal(null);
                expect(result.importConnection).to.have.property('type').to.not.equal(null);
                expect(result.export).to.have.property('_connectionId').to.not.equal(null);
                expect(result.import).to.have.property('_connectionId').to.not.equal(null);
                expect(result.flow).to.have.property('_integrationId').to.not.equal(null);
                expect(result.flow.pageProcessors[0]).to.have.property('_importId').to.not.equal(null);
                expect(result.flow.pageGenerators[0]).to.have.property('_exportId').to.not.equal(null);
                done();

                

            }).catch(err => {
                console.log(err);
                done(err);
            })
        })

    })
    
    


})