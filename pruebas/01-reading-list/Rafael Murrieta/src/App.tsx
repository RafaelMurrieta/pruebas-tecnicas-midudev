import books from '../public/books.json';
import { Card } from './card';

var INIT_BOOK: Book[] = [];
const library = books.library

library.forEach(element => {
  INIT_BOOK.push(element.book);
});

interface Book {
  title: string,
  pages: number,
  genre: string,
  cover: string,
  synopsis: string,
  year: number,
  ISBN: string,
  author: {
    name: string,
    otherBooks: string[]
  }
}


function App() {
  return (
    <section className='container-books'>
          {
            INIT_BOOK.map(book => (
                <Card
                  key={book.ISBN}
                  ID={book.ISBN}
                  cover={book.cover}
                  title={book.title}
                  name={book.author.name}
                  genere={book.genre} 
                  synopsis={book.synopsis}
                />
            ))
          }
    </section>
  );
}


export default App
