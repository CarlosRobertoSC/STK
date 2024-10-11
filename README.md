SKT - Stephen King Books App
Funcionalidades
- Listagem de Livros: O aplicativo faz uma requisição à API para listar todos os livros de Stephen King. Cada livro exibe o título, ano de publicação, editora, número de páginas e ISBN.
- Detalhes do Livro: Ao clicar em um título de livro, o usuário é levado a uma página de detalhes que mostra mais informações, como vilões presentes no livro e outras observações (notas) sobre a obra.
- Detalhes dos Vilões: O aplicativo também permite que o usuário visualize informações detalhadas sobre os vilões, como nome, status, gênero e em quais livros o vilão aparece. Ao clicar no nome de um vilão, o usuário é redirecionado para uma página de detalhes do vilão, onde pode também navegar de volta para os livros em que ele aparece.
Tecnologias Utilizadas
- React: Biblioteca JavaScript utilizada para construir a interface do usuário.
- Axios: Utilizado para fazer requisições HTTP para a API da Stephen King.
- React Router: Gerencia a navegação entre as páginas do aplicativo, permitindo que os usuários se movimentem entre a lista de livros, detalhes do livro e detalhes dos vilões.
- CSS/Styled Components: Utilizado para estilizar os componentes e garantir uma interface limpa e responsiva.
Como Rodar o Projeto
Para executar o projeto localmente, siga os passos abaixo:
Pré-requisitos
- Node.js (recomendado: versão LTS)
- npm (gerenciador de pacotes do Node.js)
Passos

1. Clone o repositório:
   git clone https://github.com/seu-usuario/STK.git

2. Navegue até o diretório do projeto:
   cd STK

3. Instale as dependências:
   npm install

4. Inicie o servidor de desenvolvimento:
   npm start

Estrutura de Pastas

/src
  ├── /components
  │   ├── BookList.tsx      # Componente responsável por listar os livros
  │   ├── BookDetails.tsx   # Componente que exibe os detalhes de um livro específico
  │   └── VillainDetails.tsx # Componente que exibe os detalhes de um vilão específico
  ├── /services
  │   └── api.ts            # Serviço que faz as requisições HTTP para a API
  ├── /pages
  │   ├── Home.tsx          # Página inicial que renderiza a lista de livros
  │   └── Details.tsx       # Página de detalhes do livro
  ├── App.tsx               # Componente principal que gerencia as rotas
  └── index.tsx             # Ponto de entrada da aplicação React

API Utilizada
O projeto consome os dados da Stephen King API, que oferece informações sobre os livros e vilões das obras de Stephen King.

- Obter lista de livros: GET https://stephen-king-api.onrender.com/api/books
- Obter detalhes de um livro específico: GET https://stephen-king-api.onrender.com/api/book/{id}
- Obter lista de vilões: GET https://stephen-king-api.onrender.com/api/villains
- Obter detalhes de um vilão específico: GET https://stephen-king-api.onrender.com/api/villain/{id}

Principais Funcionalidades
1. Navegação entre livros e vilões:
   - A lista de livros exibe o título e os detalhes básicos. Ao clicar no título, o usuário é levado à página de detalhes do livro, onde pode ver os vilões associados.
   - Ao clicar no nome de um vilão, o usuário é levado à página de detalhes do vilão, onde pode ver informações mais detalhadas e um link de volta ao livro em que o vilão aparece.
   
2. Responsividade:
   - O layout foi projetado para se adaptar a diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.

Melhorias Futuras
- Adicionar uma barra de busca para permitir que os usuários filtrem a lista de livros.
- Implementar paginação para a listagem de livros, caso a quantidade de dados aumente.
- Adicionar testes unitários para os componentes.
