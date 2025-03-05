const tawjLibrary = [4,"hello"];

function Book (author, title, published, pages) {
    this.author = author;
    this.title = title;
    this.published = published;
    this.pages = pages;
    this.displayBooks = function () {
        return (
            this.author+
            this.title+
            this.published+
            this.pages
        )
    }
}

function addNewBook (author, title, published, pages) {
    const newBook = new Book (author, title, published, pages );
    // const exampleBook2 = new Book ("Rod Harris", "I hate people", 1999, 500);

    return newBook;
}

let myBook = addNewBook("Ben Stocks", "Stinky Blinders", 1975, 345)

tawjLibrary.push(myBook);

document.getElementById("book").innerHTML =
            myBook.author+
            myBook.title +
            myBook.pages+
            myBook.published;

// function displayBooks () {
//     for (let i = 0 ; i <= tawjLibrary.length ; i++) {
    
//     let bookList = tawjLibrary[i];

//     document.getElementById("book").innerHTML =
//             bookList.author+
//             bookList.title +
//             bookList.pages+
//             bookList.published;

//     i++;
//     }
//     return bookList;
// }

// displayBooks();
// console.log(bookList);
console.log(tawjLibrary); 
console.log("Hello");
console.log(myBook.displayBooks());
