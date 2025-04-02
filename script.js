// Part 1

let Book1 = {
    title: "Hot Grease",
    author: "Jason Mitchell",
    pages: 56,
    view: function() {
        console.log("The book " + this.title + " is written by " + this.author + ", and has " + this.pages + " pages.")
    }
}

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let georgiaMile = new Book("The Georgia Mile", "K. Brown", 112)
let glassCeiling = new Book("A Glass Ceiling", "John Smith", 97)
let racingTime = new Book("Racing Time", "Janet Doe", 200)

let books = [georgiaMile, glassCeiling, racingTime]

console.log(books[1].title)
console.log(books[2].author)

function filterPages(books) {
    return books
    .filter(book => book.pages > 100)
    .map(book =>({Title: book.title, Pages: book.pages}))
}
console.log(filterPages(books))

books = books.map(book => ({
        ...book,
        title: 'Title: ' + book.title
    }));

console.log(books[0].title);

books = books.map(book => ({
        ...book,
        author: 'Author: ' + book.author
    }));

console.log(books[1].author);


// Part 2

let Account = {
    accountNumber: 3228101,
    balance: 100.00,
    owner: "Jason King",
    deposit: function() {
        console.log(this.balance += 120.50)
    },
    withdraw: function() {
        console.log(this.balance -= 54.70)
    }
}
Account.deposit();
Account.withdraw();

let balance = 165.80;
let interestRate = 0.07;
let timesCompunded = 4;
let years = 5;

function compoundInterest(balance, interestRate, timesCompunded, years) {
    let amount = balance * Math.pow((1 + interestRate / timesCompunded), timesCompunded * years);
    return amount.toFixed(2)
}
console.log("Compound Interest: $" + compoundInterest(balance, interestRate, timesCompunded, years));