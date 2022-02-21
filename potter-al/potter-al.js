"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potter = void 0;
class Potter {
    constructor() {
        this.BOOK_PRICE = 8;
        this.discountFor = {
            5: 0.25,
            4: 0.2,
            3: 0.1,
            2: 0.05,
            1: 0,
            0: 0
        };
    }
    price(books) {
        let price = 0;
        while (books.length) {
            const uniqueBooks = new Set(books);
            price += this.BOOK_PRICE * uniqueBooks.size * (1 - this.discountFor[uniqueBooks.size]);
            uniqueBooks.forEach(item => books.splice(books.indexOf(item), 1));
        }
        return price;
    }
}
exports.Potter = Potter;
