// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
    
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }]
 // Use filter() to get only inStock products
 let r1=cart.filter(ct=>ct.inStock==true)
 console.log(r1)
// Use map() to create a new array with:  { name, totalPrice }
 let r2=cart.map(ct=>({name:ct.name,tot:ct.price*ct.quantity}))
 console.log(r2)
// Use reduce() to calculate grand total cart value
 let r3=cart.reduce((acc,ct)=>acc+(ct.price*ct.quantity))
 console.log(r3)
// Use find() to get details of "Mouse"
 let r4=cart.find(ct=>ct.name="Mouse")
 console.log(r4)
// Use findIndex() to find the position of "Keyboard"
let r5 =cart.findIndex(ct=>ct.name=='Keyboard')
console.log(r5)