describe("payments test w/ setup + teardown", function (){
    beforeEach (function (){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });
    it("should add a new payment to allPayments on submitPaymentInfo()", function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
});

it('should not add a new payment on submitPaymentInfo() with empty input', function(){
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(object.keys(allPayments).length).toEqual(0);
});
it('should update #paymentTable on appendPaymentTable()', () => {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td')

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$20');
    expect(curTdList[2].innerText).toEqual('%20');
    expect(curTdList[3].innerText).toEqual('X');
});

 it ('should create a  new payment on createCurPayment()', () => {
    let expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
    }
    expect(createCurPayment()).toEqual(expectedPayment);
 });

 it('should not create payment with empty input on createPayment()', () =>{
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
 });
