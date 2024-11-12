import { useEffect, useState } from 'react';
import { fetchUserDetails } from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

function Account({ user }) {
  const [checkedOutBooks, setCheckedOutBooks] = useState([]);

  useEffect(() => {
    const getAccountDetails = async () => {
      try {
        const response = await fetchUserDetails();
        setCheckedOutBooks(response.data.checkedOutBooks);
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };
    getAccountDetails();
  }, []);

  return (
    <div>
      <h2>{user.username}'s Account</h2>
      <h3>Checked Out Books</h3>
      {checkedOutBooks.length > 0 ? (
        <ul>
          {checkedOutBooks.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books checked out.</p>
      )}
    </div>
  );
}

export default Account;
