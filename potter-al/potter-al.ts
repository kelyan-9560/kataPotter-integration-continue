export class Potter {


  readonly BOOK_PRICE = 8;

  readonly discountFor: any = {
    5: 0.25,
    4: 0.2,
    3: 0.1,
    2: 0.05,
    1: 0,
    0: 0
  }

  price(books: number[]): number {
    let price = 0;

    while (books.length) {
      const uniqueBooks = new Set(books);

      price += this.BOOK_PRICE * uniqueBooks.size * (1 - this.discountFor[uniqueBooks.size]);

      uniqueBooks.forEach(item => books.splice(books.indexOf(item), 1));
    }

    return price;
  }

}