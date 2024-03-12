class Bookshelf {
    constructor(book) {
        this.book = book;
    }

    getBook() {
        return this.book;
    }

    addBook(book) {
        this.book.push(book);
    }

    removeBook(book) {
        this.book = this.book.filter(b => b !== book);
    }
}

const bookshelf = new Bookshelf(['book1', 'book2']);
bookshelf.addBook('book3');
console.log(bookshelf.getBook());
bookshelf.removeBook('book2');
console.log(bookshelf.getBook());

