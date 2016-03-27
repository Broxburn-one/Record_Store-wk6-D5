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
  
  this.findRecord = function(record) {
    for(item of this.record_collection){
      if (item === record) {
        return 1;
      } else {
        return 0;
      }
    } //for
  };

  this.sellRecord = function(record){
         // console.log(this.record_collection);
    if (this.findRecord(record)) {
      var index = this.record_collection.indexOf(record);
      if (index > -1) {
         this.record_collection.splice(index, 1);
        // console.log('Now we got this :', this.record_collection);     
         return 1;
      } else {
        return undefined;  // record not in collection so can't sell
      }
    }  // 1st if
   };








// final brace
}
module.exports = Customer;
