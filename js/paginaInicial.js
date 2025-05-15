const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    release: "14 de outubro de 1994",
    synopsis: "Dois homens encontram esperança e redenção na prisão de Shawshank.",
    img: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY445_.jpg",
    trailer: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
    categories: ["Drama"]
  },
  {
    title: "The Dark Knight",
    genre: "Ação / Super-herói",
    release: "18 de julho de 2008",
    synopsis: "Batman enfrenta o Coringa para salvar Gotham City.",
    img: "https://pt.wikipedia.org/wiki/The_Dark_Knight_%28trilha_sonora%29#/media/Ficheiro:DarkKnightTrilha.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    categories: ["Ação"]
  },
  {
    title: "Inception",
    genre: "Ficção Científica / Ação",
    release: "16 de julho de 2010",
    synopsis: "Um ladrão invade sonhos para plantar uma ideia na mente de alguém.",
    img: "https://m.media-amazon.com/images/I/51s-OHpGHQL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    categories: ["Ficção Científica", "Ação"]
  },
  {
    title: "Forrest Gump",
    genre: "Drama / Romance",
    release: "6 de julho de 1994",
    synopsis: "A vida extraordinária de Forrest, um homem simples com um grande coração.",
    img: "https://m.media-amazon.com/images/I/41cczLEk5KL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    categories: ["Drama"]
  },
  {
    title: "The Matrix",
    genre: "Ficção Científica / Ação",
    release: "31 de março de 1999",
    synopsis: "Um hacker descobre a verdade sobre a realidade simulada em que vive.",
    img: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    categories: ["Ficção Científica", "Ação"]
  },
  {
    title: "Gladiator",
    genre: "Ação / Drama",
    release: "5 de maio de 2000",
    synopsis: "Um general romano se torna gladiador para vingar sua família.",
    img: "https://m.media-amazon.com/images/I/51AqndhXAIL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
    categories: ["Ação", "Drama"]
  },
  {
    title: "Titanic",
    genre: "Drama / Romance",
    release: "19 de dezembro de 1997",
    synopsis: "Um romance trágico acontece a bordo do navio Titanic.",
    img: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=2e-eXJ6HgkQ",
    categories: ["Drama"]
  },
  {
    title: "Pulp Fiction",
    genre: "Crime / Drama",
    release: "14 de outubro de 1994",
    synopsis: "Histórias entrelaçadas do submundo de Los Angeles.",
    img: "https://m.media-amazon.com/images/I/51pFzxtwRUL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    categories: ["Drama"]
  },
  {
    title: "The Lion King",
    genre: "Animação / Aventura",
    release: "24 de junho de 1994",
    synopsis: "Um jovem leão luta para assumir seu lugar como rei da savana.",
    img: "https://m.media-amazon.com/images/I/51ykNFGxi5L._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    categories: ["Animação", "Aventura"]
  },
  {
    title: "Finding Nemo",
    genre: "Animação / Aventura",
    release: "30 de maio de 2003",
    synopsis: "Um peixe-palhaço viaja pelo oceano para encontrar seu filho perdido.",
    img: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=wZdpNglLbt8",
    categories: ["Animação", "Aventura"]
  },
  {
    title: "Avengers: Endgame",
    genre: "Ação / Super-herói",
    release: "26 de abril de 2019",
    synopsis: "Os Vingadores se unem para derrotar Thanos e salvar o universo.",
    img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    categories: ["Ação"]
  },
  {
    title: "Get Out",
    genre: "Terror / Suspense",
    release: "24 de fevereiro de 2017",
    synopsis: "Um jovem negro visita a família de sua namorada branca e descobre segredos assustadores.",
    img: "https://m.media-amazon.com/images/I/61-Qj0C7VFL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
    categories: ["Terror"]
  },
  {
    title: "The Conjuring",
    genre: "Terror / Suspense",
    release: "19 de julho de 2013",
    synopsis: "Casos paranormais investigados por Ed e Lorraine Warren.",
    img: "https://m.media-amazon.com/images/I/51thCblq+XL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o",
    categories: ["Terror"]
  },
  {
    title: "Interstellar",
    genre: "Ficção Científica / Drama",
    release: "7 de novembro de 2014",
    synopsis: "Exploração espacial para salvar a humanidade.",
    img: "https://m.media-amazon.com/images/I/71nF9wT54NL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    categories: ["Ficção Científica", "Drama"]
  },
  {
    title: "The Godfather",
    genre: "Crime / Drama",
    release: "24 de março de 1972",
    synopsis: "A saga da família mafiosa Corleone.",
    img: "https://m.media-amazon.com/images/I/51rGGojzMbL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
    categories: ["Drama"]
  },
  {
    title: "Guardians of the Galaxy",
    genre: "Ação / Super-herói",
    release: "1 de agosto de 2014",
    synopsis: "Um grupo de desajustados espaciais luta para salvar a galáxia.",
    img: "https://m.media-amazon.com/images/I/51EVjMtiHxL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
    categories: ["Ação"]
  },
  {
    title: "Inside Out",
    genre: "Animação / Família",
    release: "19 de junho de 2015",
    synopsis: "As emoções de uma garota ganham vida para ajudá-la a enfrentar mudanças.",
    img: "https://m.media-amazon.com/images/I/51q4SOuGgXL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=seMwpP0yeu4",
    categories: ["Animação", "Família"]
  },
  {
    title: "Deadpool",
    genre: "Ação / Comédia",
    release: "12 de fevereiro de 2016",
    synopsis: "Um mercenário tagarela busca vingança com muito humor e ação.",
    img: "https://m.media-amazon.com/images/I/51MxFh1QnML._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=ONHBaC-pfsk",
    categories: ["Ação", "Comédia"]
  },
  {
    title: "La La Land",
    genre: "Romance / Musical",
    release: "9 de dezembro de 2016",
    synopsis: "Um músico e uma atriz lutam para realizar seus sonhos em Los Angeles.",
    img: "https://m.media-amazon.com/images/I/51Q43yKXvIL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    categories: ["Romance", "Musical"]
  },
  {
    title: "The Social Network",
    genre: "Drama / Biografia",
    release: "1 de outubro de 2010",
    synopsis: "A história da criação do Facebook e suas consequências.",
    img: "https://m.media-amazon.com/images/I/51g4z4DH7dL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=lB95KLmpLR4",
    categories: ["Drama"]
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasia / Aventura",
    release: "16 de novembro de 2001",
    synopsis: "Um garoto descobre que é um bruxo e começa sua aventura na Escola de Magia.",
    img: "https://m.media-amazon.com/images/I/51UoqRAxwEL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
    categories: ["Fantasia", "Aventura"]
  },
  {
    title: "The Avengers",
    genre: "Ação / Super-herói",
    release: "4 de maio de 2012",
    synopsis: "Heróis da Marvel se unem para salvar o mundo.",
    img: "https://m.media-amazon.com/images/I/51kfVo-R9XL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    categories: ["Ação"]
  },
  {
    title: "Frozen",
    genre: "Animação / Família",
    release: "27 de novembro de 2013",
    synopsis: "Duas irmãs enfrentam desafios para salvar seu reino congelado.",
    img: "https://m.media-amazon.com/images/I/51sh2kFdE-L._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
    categories: ["Animação", "Família"]
  },
  {
    title: "The Silence of the Lambs",
    genre: "Thriller / Terror",
    release: "14 de fevereiro de 1991",
    synopsis: "Uma jovem agente do FBI busca ajuda de um psicopata para capturar um assassino.",
    img: "https://m.media-amazon.com/images/I/51C1KnqShQL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
    categories: ["Terror"]
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animação / Ação",
    release: "14 de dezembro de 2018",
    synopsis: "Miles Morales descobre o multiverso do Homem-Aranha.",
    img: "https://m.media-amazon.com/images/I/71sPt5J1uIL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
    categories: ["Animação", "Ação"]
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    genre: "Aventura / Comédia",
    release: "20 de dezembro de 2017",
    synopsis: "Quatro adolescentes entram em um videogame perigoso.",
    img: "https://m.media-amazon.com/images/I/51bHyGkY2TL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
    categories: ["Aventura", "Comédia"]
  },
  {
    title: "Coco",
    genre: "Animação / Musical",
    release: "22 de novembro de 2017",
    synopsis: "Um jovem músico descobre sua história familiar no Dia dos Mortos.",
    img: "https://m.media-amazon.com/images/I/51bVnSb5ccL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=Rvr68u6k5sI",
    categories: ["Animação", "Musical"]
  },
  {
    title: "Shrek",
    genre: "Animação / Comédia",
    release: "22 de maio de 2001",
    synopsis: "Um ogro verde parte em uma aventura para salvar uma princesa.",
    img: "https://m.media-amazon.com/images/I/51rJZyGHTtL._AC_SY679_.jpg",
    trailer: "https://www.youtube.com/watch?v=CwXOrWvPBPk",
    categories: ["Animação", "Comédia"]
  }
];

const moviesContainer = document.getElementById('movies');

// Função para criar os cards de filme
function renderMovies(list) {
  moviesContainer.innerHTML = ''; // limpa antes
  list.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie-item');
    div.title = movie.title;
    div.innerHTML = `<img src="${movie.img}" alt="${movie.title}" />`;
    div.addEventListener('click', () => {
      updateHighlightedMovie(movie);
    });
    moviesContainer.appendChild(div);
  });
}

function updateHighlightedMovie(movie) {
  document.getElementById('highlighted-image').src = movie.img;
  document.getElementById('highlighted-image').alt = movie.title;
  document.getElementById('highlighted-title').textContent = movie.title;
  document.querySelector('#highlighted-movie p:nth-of-type(1)').innerHTML = `<strong>Gênero:</strong> ${movie.genre}`;
  document.querySelector('#highlighted-movie p:nth-of-type(2)').innerHTML = `<strong>Estreia:</strong> ${movie.release}`;
  document.getElementById('highlighted-synopsis').innerHTML = `<strong>Sinopse:</strong> ${movie.synopsis}`;
  document.querySelector('#movie-info a.trailer-btn').href = movie.trailer;
}

// Filtrar por categoria
function filterByCategory(category) {
  const filtered = movies.filter(movie => movie.categories.includes(category));
  renderMovies(filtered);
  if (filtered.length > 0) {
    updateHighlightedMovie(filtered[0]);
  } else {
    // Se não achar nenhum, limpa a área de destaque
    document.getElementById('highlighted-image').src = '';
    document.getElementById('highlighted-title').textContent = 'Nenhum filme encontrado';
    document.querySelector('#highlighted-movie p:nth-of-type(1)').textContent = '';
    document.querySelector('#highlighted-movie p:nth-of-type(2)').textContent = '';
    document.getElementById('highlighted-synopsis').textContent = '';
    document.querySelector('#movie-info a.trailer-btn').href = '#';
  }
}

// Renderiza todos inicialmente
renderMovies(movies);
