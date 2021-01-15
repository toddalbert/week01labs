// Function will calculate and output a customer receipt
const salesTaxRate = 0.07
let customerSubTotal = 179.36
let isFreeTaxWeek = false

// Now we want to calculate their sales tax amount and diplay a receipt
function calculateSalesTax(subTotal = 0, taxRate = 0.06) {
  let taxTotal = taxRate * subTotal
  return taxTotal
}
// const calculateSalesTax = (subTotal, taxRate) => subTotal * taxRate

let customerTaxTotal = (isFreeTaxWeek) ? 0 : calculateSalesTax(customerSubTotal, salesTaxRate)
let customerTotal = customerTaxTotal + customerSubTotal

console.log('Subtotal:  ', customerSubTotal.toFixed(2))
console.log('Sales Tax:  ', customerTaxTotal.toFixed(2))
console.log('------------------')
console.log('Total:     ', customerTotal.toFixed(2))
