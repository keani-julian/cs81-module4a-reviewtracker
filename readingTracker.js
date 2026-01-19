//URL to my GitHub repo: https://github.com/keani-julian/cs81-module4a-reviewtracker/tree/main

// All my commentary will be numbered below to keep track of it visually. 
// My short comments are there, along with the function summaries below each. 

// Weekly reading log
// 1. Array of objects storing each day’s reading info
// 2. Each object has: day (string), book (string), minutes (number)
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// Function: addReadBook
// 3. Purpose: Add a new reading entry to the log
// 4. Input: day (string), book (string), minutes (number)
// 5. Output: Updates the readingLog array
// Function summary: This function adds a new reading entry to the reading log for a specific day and book. It takes three inputs: day (string), book (string), and minutes (number). The function updates the readingLog array by creating a new object and appending it to the existing entries.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // 6. Create an object representing this reading session
  readingLog.push(newEntry); // 7. Add the object to the readingLog array
  // 8. Important: push() maintains the array order, so entries remain chronological
}

// Returns total minutes spent reading all week
// Function: totalReadingMinutes
// 9. Purpose: Sum total minutes read across all entries
// 10. Input: log (array of reading objects)
// 11. Output: total number of minutes (number)
// Function summary: This function calculates the total number of minutes read across all entries in a given reading log array. It loops through each reading entry and sums the 'minutes' property from each object. The final output is a single number representing the total minutes read.
function totalReadingMinutes(log) {
  let total = 0; // 12. Initialize counter
  for (let entry of log) { // 13. Loop through each reading object in the array
    total += entry.minutes; // 14. Access the 'minutes' property and accumulate
    // 15. Important: this demonstrates how objects and arrays work together
  }
  return total; // 16. Return the final total minutes
}

// Returns the book read most frequently
// Function: mostReadBook
// 17. Purpose: Determine which book was read the most frequently
// 18. Input: log (array of reading objects)
// 19. Output: book title (string)
// Function summary: This function identifies the book that has been read most frequently in a reading log array. It counts how many times each book appears using an object as a frequency map and then determines the book with the highest count. The output is the title of the book that was read the most often.
function mostReadBook(log) {  
  const bookCounts = {}; // 20. Object to track how many times each book appears
  for (let entry of log) {  // 21. Loop through each entry
    if (!bookCounts[entry.book]) { // 22. If this book hasn’t been counted yet
      bookCounts[entry.book] = 1; // 23. Initialize count to 1
    } else {
      bookCounts[entry.book]++; // 24. Otherwise, increment count
      // 25. This loop shows how to tally values using objects
    }
  }
// Suggested Improvement:
// The variable 'log' could be renamed 'entries' in functions to clarify it contains multiple entries.
// Also, add input validation: minutes should be > 0 and book/day should be strings.
// This improves readability and prevents invalid data from breaking the program.

  let maxBook = null; // 26. Variable to store the book read most
  let maxCount = 0;  // 27. Highest count seen so far
  for (let book in bookCounts) { // 28. Loop over object keys (book titles)
    if (bookCounts[book] > maxCount) { // 29. Compare each book’s count
      maxBook = book; // 30. Update maxBook if this book has a higher count
      maxCount = bookCounts[book];  // 31. Update the highest count
    }
  }
  return maxBook; // 32. Return the most read book
  // 33. Important: using an object as a frequency map is a key JS pattern
}

// Prints a summary of minutes read per day
// Function: printDailySummary
// 34. Purpose: Print a summary of reading for each day
// 35. Input: log (array of reading objects)
// 36. Output: logs each day’s reading activity to the console
// Function summary: This function prints a summary of how many minutes were read each day along with the book titles. It takes an array of reading entries as input and outputs formatted strings to the console. This is useful for quickly reviewing the reading activity over the week.
function printDailySummary(log) {
  for (let entry of log) { // 37. Loop through each object in the array
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); 
    // 38. Access multiple object properties to format output
    // 39. Important: this demonstrates how to iterate and display structured data
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50); // 40. Test adding a new entry
printDailySummary(readingLog); // 41. Display all entries
console.log("Total minutes read:", totalReadingMinutes(readingLog));// 42. Calculate and display total
console.log("Most read book:", mostReadBook(readingLog));  // 43. Determine and display the most read book


// Test case: call function with new input data - add a Sunday reading session
addReadBook("Sunday", "The Midnight Library", 35); // New entry
printDailySummary(readingLog); // Confirm it prints Sunday correctly
console.log("Total minutes read (including Sunday):", totalReadingMinutes(readingLog)); 
console.log("Most read book (including Sunday):", mostReadBook(readingLog));
