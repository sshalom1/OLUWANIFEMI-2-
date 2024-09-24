const originalObject = { name: 'Alice', age: 25 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { name: 'Alice', age: 25 }

// Modifying the copy won't affect the original object
copiedObject.age = 30;
console.log(copiedObject); // Output: { name: 'Alice', age: 30 }
console.log(originalObject); // Output: { name: 'Alice', age: 25 }