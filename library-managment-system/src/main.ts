import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { Library } from "./Library";

const lib = new Library();

// Create items
const book1 = new Book(1, "bee", "bereket", 24);
const book2 = new Book(2, "insect", "john", 1);
const magazine1 = new Magazine(4, "daily news", 7);

// Add items to library
lib.addItem(book1);
lib.addItem(book2);
lib.addItem(magazine1);

// List available items
console.log("=== Available Items ===");
lib.listAvailable();

// Checkout a book
book1.checkout();

console.log("\n=== After Checkout ===");
lib.listAvailable();

// Return the book
book1.returnItem();

console.log("\n=== After Return ===");
lib.listAvailable();

// Show all items using polymorphism 
console.log("\n=== All Items Info ===");
lib.items.forEach(item => {
  console.log(item.getInfo());
});

// Find by title 
const result = lib.findByTitle("bee");

console.log("\n=== Search Result ===");
console.log(result ? result.getInfo() : "Item not found");