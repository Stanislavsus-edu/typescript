import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart add', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  expect(cart.items).toEqual([item1, item2, item3]);
});

test('cart sum', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  expect(cart.sum()).toBe(3900);
});

test('cart sum with discount', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  expect(cart.sum_sale(30)).toBe(2730);
});

test('cart remove', () => {
  const cart = new Cart();
  const item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const item3 = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble!', 'США', 137, ['фантастика', 'боевик', 'фэнтези', 'приключения'], 1000);
  cart.add(item1);
  cart.add(item2);
  cart.add(item3);
  cart.remove(1008);
  expect(cart.items).toEqual([item1, item3]);
});
