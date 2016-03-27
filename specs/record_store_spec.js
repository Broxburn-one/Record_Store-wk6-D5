var assert = require('chai').assert;
var recordStore = require('../record_store.js');
var Record = require('../record.js');

describe('record_store', function(){
  var record_store1
  var record1, record2, record3, record4, record5
  beforeEach(function() {
    record1 = new Record({'artist':'The Beatles', 'title': 'White Album', 'price': 35.00});
    record2 = new Record({'artist':'The Goons', 'title': 'Goon But Not Forgotten', 'price': 3.00});
    record3 = new Record({'artist':'Al Jolson', 'title': 'Al Jolson Sings', 'price': 8.00});
    record4 = new Record({'artist':'The Police', 'title': 'Greatest Hits', 'price': 6.00});
    record5 = new Record({'artist':'Spike Milligan', 'title': 'Tales from the Raj', 'price': 35.00});


    record_store1 = new recordStore({'name': 'Castle Records', 'city': 'Edinburgh', 'inventory': []});

// add stock
   record_store1.addStock({'record': record1, 'quantity': 22});
   record_store1.addStock({'record': record2, 'quantity': 15});
   record_store1.addStock({'record': record3, 'quantity': 6});
   record_store1.addStock({'record': record4, 'quantity': 9});
   record_store1.addStock({'record': record5, 'quantity': 2});



  });

it('should have a name', function() {
    assert.equal('Castle Records', record_store1.name);
  }); 

it('should have a city', function() {
    assert.equal('Edinburgh', record_store1.city);
  }); 



 it('should be able to add inventory', function(){

    record_store1.addStock({'record': record5, 'quantity': 12});

 var foundStockRecord = record_store1.findStockByArtist("Spike Milligan");
    assert.deepEqual("Spike Milligan", foundStockRecord.stock.record.artist);
    assert.deepEqual(14, foundStockRecord.stock.quantity);
  });


// it('should have inventory', function() {
//     record_store1.addStock({'record': record1, 'quantity': 12});
//     assert.equal(1, record_store1.inventory.length);
//   }); 

 it('should find stock by artist', function(){
    record_store1.addStock({'record': record2, 'quantity': 2});
    var foundStockRecord = record_store1.findStockByArtist("The Goons");
    assert.deepEqual("The Goons", foundStockRecord.stock.record.artist);
   assert.equal(17, foundStockRecord.stock.quantity);
  });


 it('should have a bank balance', function() {
    assert.equal(400, record_store1.balance) 
 });

// list inventory

  it('should list inventory', function(){
    var output = record_store1.listInventory();
    // var output_test = JSON.stringify(record_store1.listInventory(), null, 2);
    // assert.equal(output_test, output);
  })

// method to sell a record: -> update balance and inventory
  it('should be able to sell a record', function(){
    // feed addStock a negative number
    record_store1.addStock({'record': record1, 'quantity': -2});

   var foundStockRecord = record_store1.findStockByArtist("The Beatles");
    assert.deepEqual("The Beatles", foundStockRecord.stock.record.artist);
    var output_test = JSON.stringify(record_store1.listInventory(), null, 2);
    // var output = record_store1.listInventory();
    assert.deepEqual(20, foundStockRecord.stock.quantity);

  })

  it('should adjust cash in bank when item sold', function() {
        record_store1.addStock({'record': record1, 'quantity': -2});


        assert.deepEqual(470, record_store1.balance);



  })

// create report to list cash in bank and cash in stock
it('should list cash in bank and cash in stock', function() {
  var totalValue = record_store1.totalCompanyValue();
  assert.deepEqual({ 'bank': 400, 'cashInStock': 1974 }, totalValue);
})

// create a customer




});