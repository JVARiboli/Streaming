const movieDB = new PouchDB('filmesDB');
const moviesContainer = document.getElementById('movies');
const modal = document.getElementById('trailer-modal');
const trailerIframe = document.getElementById('trailer-iframe');
const closeModalBtn = document.querySelector('.close-btn');

let todosOsFilmes = [];

async function carregarFilmes() {
  const result = await movieDB.allDocs({ include_docs: true, descending: true });
  todosOsFilmes = result.rows.map(row => row.doc);
  exibirFilmes(todosOsFilmes);

  if (todosOsFilmes.length > 0) {
    mostrarFilmeEmDestaque(todosOsFilmes[0]);
  }
}

function exibirFilmes(filmes) {
  moviesContainer.innerHTML = '';

  if (filmes.length === 0) {
    moviesContainer.innerHTML = '<p>Nenhum filme encontrado.</p>';
    return;
  }

  filmes.forEach(filme => {
    const div = document.createElement('div');
    div.className = 'movie-card';
    div.innerHTML = `
      <img src="${filme.image}" alt="${filme.title}" class="movie-img" />
      <h4>${filme.title}</h4>
      <p><strong>Categoria:</strong> ${filme.category}</p>
      <p>${filme.synopsis}</p>
      <button type="button">Ver Trailer</button>
    `;

    div.querySelector('button').addEventListener('click', e => {
      e.stopPropagation();
      abrirTrailer(filme.trailer);
    });

    div.addEventListener('click', () => {
      mostrarFilmeEmDestaque(filme);
    });

    moviesContainer.appendChild(div);
  });
}

function mostrarFilmeEmDestaque(filme) {
  const img = document.getElementById('highlighted-image');
  const titulo = document.getElementById('highlighted-title');
  const sinopse = document.getElementById('highlighted-synopsis');
  const genero = document.querySelector('#movie-info p strong').parentElement;
  const trailerBtn = document.querySelector('#movie-info a.trailer-btn');

  img.src = filme.image || '';
  img.alt = filme.title || '';

  titulo.textContent = filme.title || '';
  sinopse.textContent = `Sinopse: ${filme.synopsis || ''}`;
  
  genero.innerHTML = `<strong>Gênero:</strong> ${filme.category || 'N/A'}`;
  trailerBtn.href = filme.trailer || '#';
}

function filterByCategory(categoria) {
  const filtrados = todosOsFilmes.filter(f => f.category === categoria);
  exibirFilmes(filtrados);

  if (filtrados.length > 0) {
    mostrarFilmeEmDestaque(filtrados[0]);
  } else {
    mostrarFilmeEmDestaque({
      title: 'Nenhum filme encontrado',
      synopsis: '',
      category: '',
      image: '',
      trailer: '#'
    });
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
