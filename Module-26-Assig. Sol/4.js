//Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.
function processBooks(books, callback) {
    const titles = books.map(book => book.title);

    callback(titles);
}

function logTitlesAlphabetically(titles) {
    const sortedTitles = titles.sort();
    console.log("Book Titles in Alphabetical Order:");
    sortedTitles.forEach(title => console.log(title));
}

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

processBooks(books, logTitlesAlphabetically);
