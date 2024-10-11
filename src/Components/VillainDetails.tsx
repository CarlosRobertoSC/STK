import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importa o Link para navegação interna
import axios from 'axios';

interface Book {
  title: string;
  url: string;
}

interface Villain {
  id: number;
  name: string;
  gender: string;
  status: string;
  notes: string[];
  books: Book[];
}

const VillainDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Pegando o ID do vilão a partir da URL
  const [villain, setVillain] = useState<Villain | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVillainDetails = async () => {
      try {
        const response = await axios.get(`https://stephen-king-api.onrender.com/api/villain/${id}`);
        setVillain(response.data.data);
        setLoading(false);
      } catch (err: any) {
        console.error('Erro ao carregar detalhes do vilão:', err);
        setError('Erro ao carregar detalhes do vilão.');
        setLoading(false);
      }
    };

    fetchVillainDetails();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!villain) {
    return <p>Nenhum detalhe disponível para este vilão</p>;
  }

  return (
    <div>
      <h1>{villain.name}</h1>
      <p><strong>Gênero:</strong> {villain.gender}</p>
      <p><strong>Status:</strong> {villain.status}</p>
      <p><strong>Notas:</strong> {villain.notes.join(', ')}</p>

      {villain.books.length > 0 && (
        <div>
          <h3>Livros:</h3>
          <ul>
            {villain.books.map((book) => (
              <li key={book.url}>
                {/* Atualize o link para usar o React Router */}
                <Link to={`/books/${book.url.split('/').pop()}`}> {/* Extrai o ID do livro da URL */}
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VillainDetails;
