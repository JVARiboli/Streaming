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
