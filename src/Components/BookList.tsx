import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Book {
  id: number;
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://stephen-king-api.onrender.com/api/books');
        setBooks(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar dados da API');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Livros de Stephen King</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>
              <Link to={`/books/${book.id}`}>{book.Title} ({book.Year})</Link>
            </h2>
            <p><strong>Editora:</strong> {book.Publisher}</p>
            <p><strong>ISBN:</strong> {book.ISBN}</p>
            <p><strong>Páginas:</strong> {book.Pages}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
