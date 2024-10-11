import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Villain {
  name: string;
  url: string;
}

interface Book {
  Title: string;
  Year: number;
  Publisher: string;
  ISBN: string;
  Pages: number;
  villains: Villain[];
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Agora 'id' é o ID numérico do livro
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Mudança aqui para usar a URL correta
        const response = await axios.get(`https://stephen-king-api.onrender.com/api/book/${id}`);
        setBook(response.data.data);
        setLoading(false);
      } catch (err: any) {
        console.error('Erro ao carregar detalhes do livro:', err);
        if (err.response && err.response.status === 404) {
          setError('Livro não encontrado.');
        } else {
          setError('Erro ao carregar detalhes do livro.');
        }
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>; // Exibe a mensagem de erro
  }

  if (!book) {
    return <p>Nenhum detalhe disponível para este livro</p>;
  }

  return (
    <div>
      <h1>{book.Title}</h1>
      <p><strong>Ano de Publicação:</strong> {book.Year}</p>
      <p><strong>Editora:</strong> {book.Publisher}</p>
      <p><strong>ISBN:</strong> {book.ISBN}</p>
      <p><strong>Páginas:</strong> {book.Pages}</p>

      {book.villains && book.villains.length > 0 ? (
  <div>
    <h3>Vilões:</h3>
    <ul>
      {book.villains.map((villain) => (
        <li key={villain.url}>
          {/* Atualizando o link para usar o React Router */}
          <a href={`/villains/${villain.url.split('/').pop()}`}> {/* Extrai o ID da URL */}
            {villain.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
) : (
  <p>Este livro não tem vilões listados.</p>
)}

    </div>
  );
};

export default BookDetails;
