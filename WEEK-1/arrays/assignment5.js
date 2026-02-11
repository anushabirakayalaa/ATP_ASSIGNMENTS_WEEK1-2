// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
let credit = transactions.filter(trans=>trans.type=='credit')
console.log(credit)
//     2. map() to extract only transaction amounts
let transAmount = transactions.map(trans => trans.amount);
console.log(transAmount);

//     3. reduce() to calculate final account balance
let balance = transactions.reduce((acc, trans) => {
  return trans.type === "credit"
    ? acc + trans.amount
    : acc - trans.amount;
}, 0);

console.log(balance);

//     4. find() the first debit transaction
let firstDebit = transactions.find(trans => trans.type === "debit");
console.log(firstDebit);

//     5. findIndex() of transaction with amount 10000
let index = transactions.findIndex(trans => trans.amount === 10000);
console.log(index);
