
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 9,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('120.06')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 45600,
    years: 23,
    rate: 5.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('288.86')
});

/// etc
