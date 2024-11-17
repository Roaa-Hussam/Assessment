// here is task 4 and 5 make sure you have Nodejs and typescript installed then type in your terminal tsc product-w the file (product.ts) will be compile it to
// js file and then run it using nodejs by typing node product.js in order to see the output
interface Product {
  name: string;
  price: number;
}

function claPrice(products: Product[]): number {
  let totalPrice = 0;

  for (const product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
}

const products: Product[] = [
  {
    name: "ferrari",
    price: 130000,
  },
  { name: "jeep", price: 10000 },
  { name: "ford", price: 12000 },
];

const totalPrices = claPrice(products);

//uncomment the line below to see the output of task 4
// console.log(`total Price : ${totalPrices}`);

// Task 5 Write a TypeScript function that accepts a string and checks if it is a valid email address.
// You can assume the email should have a basic structure like username@domain.com. Use regular expressions to implement this.

function isValid(email: string): boolean {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailFormat.test(email);
}

const correctEmail = "username@domain.com";
const wrongEmail = "123something.com";

console.log(isValid(wrongEmail));
console.log(isValid(correctEmail));
