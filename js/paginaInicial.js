const movieDB = new PouchDB('filmesDB');
const moviesContainer = document.getElementById('movies');
const modal = document.getElementById('trailer-modal');
const trailerIframe = document.getElementById('trailer-iframe');
const closeModalBtn = document.querySelector('.close-btn');

let todosOsFilmes = [];

const filmesIniciais = [
  {
    _id: 'filme_1',
    title: 'Matrix',
    image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    synopsis: 'Um hacker descobre a verdade sobre a realidade.',
    category: 'Ficção Científica',
    trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
  },
  {
    _id: 'filme_2',
    title: 'O Senhor dos Anéis',
    image: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    synopsis: 'Um hobbit embarca em uma jornada épica para destruir um anel poderoso.',
    category: 'Ação',
    trailer: 'https://www.youtube.com/embed/V75dMMIW2B4'
  },
  {
    _id: 'filme_3',
    title: 'Vingadores: Ultimato',
    image: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    synopsis: 'Os heróis sobreviventes tentam reverter os efeitos do estalo de Thanos.',
    category: 'Ação',
    trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c'
  },
  {
    _id: 'filme_4',
    title: 'Coringa',
    image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    synopsis: 'Um comediante falido é levado à loucura e se torna o vilão Coringa.',
    category: 'Drama',
    trailer: 'https://www.youtube.com/embed/zAGVQLHvwOY'
  },
  {
    _id: 'filme_5',
    title: 'Toy Story',
    image: 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg',
    synopsis: 'Brinquedos ganham vida quando não há humanos por perto.',
    category: 'Animação',
    trailer: 'https://www.youtube.com/embed/CxwTLktovTU'
  }
];

async function carregarFilmes() {
  const result = await movieDB.allDocs({ include_docs: true });

  if (result.rows.length === 0) {
    try {
      await movieDB.bulkDocs(filmesIniciais);
      console.log('✅ Filmes iniciais cadastrados!');
    } catch (err) {
      console.error('Erro ao inserir filmes iniciais:', err);
    }
  }

  const novosResultados = await movieDB.allDocs({ include_docs: true, descending: true });
  todosOsFilmes = novosResultados.rows.map(row => row.doc);
  exibirFilmes(todosOsFilmes);

  if (todosOsFilmes.length > 0) {
    mostrarFilmeEmDestaque(todosOsFilmes[0]);
  }
}

function exibirFilmes(filmes) {
  moviesContainer.innerHTML = '';

  if (filmes.length === 0) {
    moviesContainer.innerHTML = '<p>Nenhum filme disponível nessa categoria.</p>';
    mostrarFilmeEmDestaque(null);
    return;
  }

  filmes.forEach(filme => {
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.innerHTML = `
      <img src="${filme.image}" alt="${filme.title}" class="movie-img" />
      <h4>${filme.title}</h4>
    `;

    div.addEventListener('click', () => {
      mostrarFilmeEmDestaque(filme);
    });

    moviesContainer.appendChild(div);
  });

  mostrarFilmeEmDestaque(filmes[0]);
}

function mostrarFilmeEmDestaque(filme) {
  const destaque = document.getElementById('highlighted-movie');
  const img = document.getElementById('highlighted-image');
  const titulo = document.getElementById('highlighted-title');
  const sinopse = document.getElementById('highlighted-synopsis');
  const genero = document.querySelector('#movie-info p strong').parentElement;
  const trailerBtn = document.querySelector('#movie-info a.trailer-btn');

  if (!filme) {
    destaque.style.display = 'none';
    return;
  }

  destaque.style.display = 'flex';

  img.src = filme.image || '';
  img.alt = filme.title || '';
  img.style.display = 'block';

  titulo.textContent = filme.title || '';
  sinopse.textContent = `Sinopse: ${filme.synopsis || ''}`;
  genero.innerHTML = `<strong>Gênero:</strong> ${filme.category || 'N/A'}`;

  trailerBtn.href = filme.trailer || '#';
  trailerBtn.style.display = 'inline-block';
}

function filterByCategory(categoria) {
  const filtrados = todosOsFilmes.filter(f => f.category === categoria);
  exibirFilmes(filtrados);

  if (filtrados.length > 0) {
    mostrarFilmeEmDestaque(filtrados[0]);
  } else {
    mostrarFilmeEmDestaque(null);
  }
}

function abrirTrailer(url) {
  trailerIframe.src = url;
  modal.style.display = 'flex';
}

closeModalBtn.onclick = () => {
  modal.style.display = 'none';
  trailerIframe.src = '';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    trailerIframe.src = '';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  carregarFilmes();
});
