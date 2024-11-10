import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookList = () => {

  const [AllBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {

    const getAllBooks = async () => {
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
      const booksJSON = await response.json();
      const books = booksJSON.books
      setAllBooks(books);
  }

    getAllBooks();

},[]);

  }

  return (
    <div id="AllBooks">
      <h1 id="welcome">Welcome Book Buddies!</h1>
      <h2 id="allbooks">Here at Book Buddies you can view the entire library and click to check out as
      {bookList.map((book) => (
      <section key={book.id} className="allbooks-sections" onClick={() => clickHandler(book.id,book.ti
        <img className="allbooks-cover-photos" src={book.coverimage} alt={`${book.title}'s cover photo
        <p>{book.title} by {book.author}</p>
     </section> 
    ))}
    </div>
  )

}

export default AllBooks;
