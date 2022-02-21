"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const potter_al_1 = require("./potter-al");
(0, chai_1.should)();
describe('Potter', () => {
    let potter;
    beforeEach(() => {
        potter = new potter_al_1.Potter();
    });
    it('no book should cost 0', () => {
        potter.price([]).should.equal(0);
    });
    describe('when only identical books', () => {
        it('one book should cost 8', () => {
            potter.price([1]).should.equal(8);
            potter.price([2]).should.equal(8);
            potter.price([3]).should.equal(8);
            potter.price([4]).should.equal(8);
            potter.price([5]).should.equal(8);
        });
        it('two books should cost 16', () => {
            potter.price([1, 1]).should.equal(16);
        });
    });
    describe('one collection with no more books', () => {
        it('a 2-books collection should cost 15.2', () => {
            potter.price([1, 2]).should.equal(15.2);
        });
        it('a 2-books collection should cost 21.6', () => {
            potter.price([1, 2, 3]).should.equal(21.6);
        });
        it('a 2-books collection should cost 25.6', () => {
            potter.price([1, 2, 3, 4]).should.equal(25.6);
        });
        it('a 2-books collection should cost 30', () => {
            potter.price([1, 2, 3, 4, 5]).should.equal(30);
        });
    });
    it('a 2-books collection + 1 identical book should cost 23.2', () => {
        potter.price([1, 1, 2]).should.equal(23.2);
    });
    describe('when buying multiple collections', () => {
        it('buying a 3-books collection + a 2-books collection should cost 36.8e', () => {
            potter.price([1, 2, 3, 1, 2]).should.equal(21.6 + 15.2);
        });
        it('buying one collection of each (2, 3, 4, 5) + one identical should cost ?e', () => {
            potter.price([
                1, 2, 3, 4, 5,
                1, 2, 3, 4,
                1, 2, 3,
                1, 2,
                1,
            ]).should.equal(30 + 25.6 + 21.6 + 15.2 + 8);
        });
    });
    it('prefers 2 4-books collections over a 5-books one + a 3-books one', () => {
        potter.price([
            1, 2, 3, 4,
            2, 3, 4, 5
        ]).should.equal(25.6 * 2);
    });
});
