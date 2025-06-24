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
      <img src="${filme.image}" alt="${filme.title}" class="movie-img">
      <h4>${filme.title}</h4>
      <p><strong>Categoria:</strong> ${filme.category}</p>
      <p>${filme.synopsis}</p>
      <button onclick="abrirTrailer('${filme.trailer}')">Ver Trailer</button>
    `;
    moviesContainer.appendChild(div);
  });
}

function filterByCategory(categoria) {
  const filtrados = todosOsFilmes.filter(f => f.category === categoria);
  exibirFilmes(filtrados);
}

function abrirTrailer(url) {
  trailerIframe.src = url;
  modal.style.display = 'block';
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

carregarFilmes();
