GreenSync Code Style Guide

At GreenSync, we strive to maintain a consistent and readable codebase. This guide outlines the coding style guidelines that we follow in our projects. By following these guidelines, we can ensure that our code is easy to read, maintain, and understand.

Indentation:
We use 2 spaces for indentation. Do not use tabs for indentation.

Variable Naming:
Variable names should be descriptive and use camelCase. Avoid using abbreviations or single-letter variable names.

Example:

```bash
// Good
const firstName = "John";
const lastName = "Doe";

// Bad
const fn = "John";
const ln = "Doe";
```

## Function Naming:

Function names should be descriptive and use camelCase. Use verbs to describe the action that the function performs.
Example:

```bash
// Good
function calculateTotalPrice() {
// ...
}

// Bad
function total() {
// ...
}
```

## Commenting:

Use comments to explain complex code or to provide context for other developers. Comments should be concise and to the point.
Example:

```bash
// Calculate the total price of the items in the cart
function calculateTotalPrice() {
// ...
}
```

## Formatting:

Use consistent formatting throughout the codebase. This includes spacing, line breaks, and curly brace placement.
Example:

```bash
// Good
if (condition) {
// ...
} else {
// ...
}

// Bad
if(condition){
// ...
}else{
// ...
}
```

Error Handling:
Always handle errors in your code. Use try-catch blocks to catch errors and provide meaningful error messages.
Example:

```bash try {
// Code that may throw an error
} catch (error) {
console.error("An error occurred:", error.message);
}
```

File Naming:
Use descriptive file names that reflect the purpose of the file. Use camelCase for file names.
Example:

```bash // Good
userProfile.js
productList.js

// Bad
up.js
pl.js
```

## Conclusion:

By following these coding style guidelines, we can ensure that our code is consistent, readable, and maintainable. Thank you for your contribution to GreenSync!
