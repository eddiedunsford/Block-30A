import { useEffect, useState } from 'react';
import { fetchBooks } from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetchBooks();
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getBooks();
  }, []);

  return (
    <div>
      <h1>Library Catalog</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
