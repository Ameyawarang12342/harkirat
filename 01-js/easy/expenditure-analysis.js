/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {};
  let arr =[];
  transactions.forEach(element => {
    if(typeof map[element.category] === "undefined"){
      map[element.category] = element.price;
      
    }else{
        map[element.category] += element.price; 
    }
    

  });
  for(const key in map){
    let res = {};
    res.category = key;
    res.totalSpent = map[key];
    arr.push(res);
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
