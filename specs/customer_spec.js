var assert = require('chai').assert;
var Customer = require('../customer.js');
var Record = require('../record.js');
var recordStore = require('../record_store.js');

describe('customer', function(){
  var customer1;
  var record1, record2, record3, record4, record5
  beforeEach(function() {
    customer1 = new Customer({'name': 'Fred Bloggs'});

    record1 = new Record({'artist':'The Beatles', 'title': 'White Album', 'price': 35.00});
    record2 = new Record({'artist':'The Goons', 'title': 'Goon But Not Forgotten', 'price': 3.00});
    record3 = new Record({'artist':'Al Jolson', 'title': 'Al Jolson Sings', 'price': 8.00});
    record4 = new Record({'artist':'The Police', 'title': 'Greatest Hits', 'price': 6.00});
    record5 = new Record({'artist':'Spike Milligan', 'title': 'Tales from the Raj', 'price': 35.00});
  });

 it('should have an name', function() {
    assert.equal('Fred Bloggs', customer1.name);
  }); 

 it('should start with an empty record collection', function(){
  assert.equal(0, customer1.record_collection.length)
 })

 it('should be able to buy a record', function() {
   var boughtRecord = customer1.buyRecord(record1);
   assert.equal('The Beatles', boughtRecord);
 })

  it('should be able to find a record in collection', function() {

    customer1.buyRecord(record3);
    customer1.buyRecord(record4);
    customer1.buyRecord(record5);

    var found = customer1.findRecord(record3);
    assert.equal(1, found);

  })




it('should be able to sell a record if it has it', function() {

 customer1.buyRecord(record3);  // add a record
  var soldRecord = customer1.sellRecord(record3);
  assert.equal(1, soldRecord);
 })



});


//Create a RecordCollector (or customer) constructor who can buy and sell records