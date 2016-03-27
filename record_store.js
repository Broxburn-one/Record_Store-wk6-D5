var recordStore = function(params) {
  this.name = params.name;
  this.city = params.city;
  this.inventory = [];
  this.balance = 400;  // 

//   this.findRecord = function findRecord(record) { 
//     return record.name.artist === 'The Beatles';
// }

//    inventory.find(findRecord); 
  

  // -- this works
//   this.addStock = function(stock){
// // check if stock exists
//     this.inventory.push(stock);     
// }

 
this.findStockByArtist = function(artist){
    var foundStock;
    for (var idx in this.inventory) {
      if(this.inventory[idx].record.artist === artist){
        foundStock =  this.inventory[idx];
      }
    }
    return {'stock': foundStock, 'index':idx};
  } 

//-----

  this.addStock = function(stock){
    // console.log(stock.record.artist);
    var artist = stock.record.artist;
    var quantity = stock.quantity;
// check if stock exists

//    function findStock(artist){
      // 1. loop thru inventory
      // 2. within each hash look for artist
      for (item of this.inventory) {
        for(key in item){
         // console.log(key)
            
          if ((key == 'record') && (item[key].artist === artist)) {
       //     console.log("Record ", item[key].artist );
            item.quantity += quantity;
            // console.log('updated/added ', item);
            return true;  // kick it out when we get a hit
          }
        }
      }
 //   }
// does this if above not run
      this.inventory.push(stock); 
  }



  this.findStockQuantity = function(artist) {
    // var foundStock = null;
     var foundStock = this.findStockByArtist(artist);
      return foundStock.stock.quantity; 
    }

  this.listInventory = function(){
    var obj = JSON.stringify(this.inventory, null, 2);
    // console.log(obj); 
    return obj;

}


  this.totalCompanyValue = function(){

      var cashInStock = 0;

      for (item of this.inventory) {
        for(key in item){
          cashInStock += (item.record.price * item.quantity) 
        }
      }
      // return cashInStock;
      return totalValue = {'bank': this.balance, 'cashInStock': cashInStock};
  }






















};


module.exports = recordStore;