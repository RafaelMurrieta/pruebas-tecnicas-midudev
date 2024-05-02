// import { useState } from 'react'
import books from '../public/books.json';
import './App.css'

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
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center'>
        <h2>Libros</h2>
        <div className="flex flex-wrap">
        {
          INIT_BOOK.map(book =>{
            return(
              <div key={book.ISBN} className="card rounded flex w-2/6 bg-slate-300 m-10 col text-black  justify-items-center">
                <div className='image-card w-full justify-items-center'>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <image href={book.cover} width="100" height="100" />
                </svg>
                </div>
                <div className='card-body '>
                <p><strong>{book.title}</strong></p>
                  <p>Autor: {book.author.name}</p>
                  <p>Genero: {book.genre}</p>
                  <p>{book.synopsis}</p>
                  {/* <p>{book.year}</p> */}
                  {/* <p>{book.pages}</p> */}
                  {/* <p>{book.ISBN}</p> */}
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default App
