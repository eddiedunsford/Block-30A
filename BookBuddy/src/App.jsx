import { BrowserRouter as Router, Routes, Route, Navigate } from 'react';
import Books from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/pages/Books';
import BookDetail from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/pages/BookDetail';
import Login from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/pages/Login';
import Register from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/pages/Register';
import Account from 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/pages/Account';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div id="container">
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={user ? <Account user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

