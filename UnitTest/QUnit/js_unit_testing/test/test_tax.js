QUnit.test("addTax test", function(assert){
    assert.equal(addTax(1, 10), 1.1);
    // assert.equal(addTax(5, 12), 5.6);
    assert.equal(addTax(100, 17.5), 117.5);
});
