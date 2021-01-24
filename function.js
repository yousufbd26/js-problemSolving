// https://github.com/yousufbd26/js-problemSolving

// km to meter

function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}

var first = kilometerToMeter(1);
var second = kilometerToMeter(7);
console.log(first, second);


// Budget Calculator

function budgetCalculator(watch, phone, laptop){
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;
var totalPrice = watchPrice * watch + phonePrice * phone + laptopPrice * laptop;
return totalPrice;
}

var myBudget = budgetCalculator(3, 13, 20)
console.log(myBudget);


// Hotel's Cost

function hotelCost(StayHotelDays){
    var totalCost = 0;
    if(StayHotelDays <= 10){
    totalHotelCost = StayHotelDays *100;
    }

    else if(StayHotelDays <= 20){
        var tenDCost = 10 * 100;
        var stay = StayHotelDays - 10;
        var twentyDCost = stay * (100-20);
        totalCost = tenDCost + twentyDCost;
    }
    else{
        var tenDCost = 10 *  100;
        var twentyDCost = 10 * (100 - 20);
        var stay = StayHotelDays - 20;
        var moreDCost = stay * 50;
        totalCost = tenDCost + twentyDCost + moreDCost;
    }
    return totalCost;
}
var stayingHotelCost =  hotelCost(40);
console.log(stayingHotelCost);


// Big Name

var myFriends = ["Ali", "Anny", "Razu", "Riaz", "Al-mahmud", "Sohel", "Ripon"];
  function megaFriend(fName){
      var largeName = fName[0];
      for(var i = 0; i < fName.length; i++){
          if(fName[i].length > largeName.length){
              largeName = fName[i];
          }
      }
      return largeName;
  }
  console.log(megaFriend(myFriends));