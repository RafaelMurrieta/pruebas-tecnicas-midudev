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
      <div>
        <h2 className='text-center'>Libros</h2>
        <div className="flex flex-wrap">
  {
    INIT_BOOK.map(book => {
      return (
        <div key={book.ISBN} className=" bg-slate-300 m-3 p-8 grid text-black w-1/4 rounded-3xl">
          <div className='image-card w-full justify-items-center'>
            <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
              <image href={book.cover} width="200" height="200" />
            </svg>
          </div>
          <div className='card-body w-full text-wrap'>
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
