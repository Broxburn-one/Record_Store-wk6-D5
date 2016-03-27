var Customer = function(params) {
  this.name = params.name;
  this.record_collection = [];

  this.buyRecord = function(record) {
    this.record_collection.push(record);

    var length = this.record_collection.length
    // return name of artist added
    return this.record_collection[length-1].artist;

    // can later tie purchase to store and decrement stock by 1 using addStock function with -1 value
  }
 



}




module.exports = Customer;