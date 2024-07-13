const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const bigBrothera = sinon.spy(console);
    const dummya = sinon.stub(Utils, 'calculateNumber');

    dummya.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummya.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummya.callCount).to.be.equal(1);
    expect(bigBrothera.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrothera.log.callCount).to.be.equal(1);
    dummya.restore();
    bigBrothera.log.restore();
  });
});
