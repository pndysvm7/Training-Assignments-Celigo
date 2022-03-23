const assert = require('assert');
const { isTypedArray } = require('util/types');
const { isContext } = require('vm');

describe('file to be tested' , ()=> {
    context('function to be tested', ()=> {
        it('should do something' , ()=>{
            assert.equal(1,1);
        });

        it('this is pending');
    })
})