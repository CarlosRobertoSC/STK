import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import VillainDetails from './Components/VillainDetails'; // Importe o novo componente

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/villains/:id" element={<VillainDetails />} /> {/* Adicione esta rota */}
      </Routes>
    </Router>
  );
};

export default App;
