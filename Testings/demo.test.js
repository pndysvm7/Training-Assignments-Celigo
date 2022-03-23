// const chai = require('chai');
// const expect = chai.expect;
// const demo = require('./demo')


// describe('demo file' , ()=> {

//     context('add function test' , () => {
//         it('should add 2 numbers' , ()=> {
//             expect(demo.add(2,5)).to.equal(7);
//         })

//     })

//     context('addCallback function' , ()=> {
//         it('should test the callback' , (done)=> {
//             demo.addCallback(1,2,(err, result) => {
//                 expect(err).to.not.exist;
//                 expect(result).to.equal(3);
//                 done();
//             })

//         })
//     })
    

//     context('promise add ' , ()=> {
//         it('should test the promise' , (done) => {
//             demo.addPromise(2,2).then(result=> {
//                 expect(result).to.equal(4);
//                 done();
//             }).catch(err => {
//                 console.log('error caught');
//                 done(err);
//             })
//         })
//     })
    

    
// })