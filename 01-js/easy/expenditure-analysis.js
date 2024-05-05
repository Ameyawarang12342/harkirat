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
   let ans=[]
   let set1=new Set()
   let l
   let cnt=0;
   for(let i=0;i<transactions.length;i++)
   {
      l=set1.size;
      set1.add(transactions[i].category)
      if(set1.size == l)
        continue;
      for(let j=0;j<transactions.length;j++)
      {
         if(transactions[j].category == transactions[i].category)
         {
            cnt=cnt+ transactions[j].price;
         }
      }
      ans.push({
          category:transactions[i].category,
          totalSpent:cnt
        }) 
      cnt=0;
   }
   return ans;
}

module.exports = calculateTotalSpentByCategory;
