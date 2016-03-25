var assert = require('chai').assert;
var Record = require('../record.js');

describe('record', function(){
  var record1
  beforeEach(function() {
    record1 = new Record({'artist':'The Beatles', 'title': 'White Album', 'price': 35.00});
    record2 = new Record({'artist':'The Goons', 'title': 'Goon But Not Forgotten', 'price': 3.00});
    record3 = new Record({'artist':'Al Jolson', 'title': 'Al Jolson Sings', 'price': 8.00});
    record4 = new Record({'artist':'The Police', 'title': 'Greatest Hits', 'price': 6.00});
    record5 = new Record({'artist':'Spike Milligan', 'title': 'Tales from the Raj', 'price': 35.00});
  });




 it('should have an artist', function() {
    assert.equal('The Beatles', record1.artist);
  }); // it

   it('should have a title', function() {
    assert.equal('White Album', record1.title);
  });

   it('should have a price', function() {
    assert.equal(35.00, record1.price);
  });


});  //describe



// Create a constructor to create Record objects with artist, title, price