import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchBookById } from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await fetchBookById(id);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    getBook();
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;
