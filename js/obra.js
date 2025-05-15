const db = new PouchDB('Finances');

const movieId = new URLSearchParams(window.location.search).get('id');

db.get(movieId).then(function (movie) {
    const detailDiv = document.getElementById('movie-detail');
    detailDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <p>Gênero: ${movie.genre}</p>
        <iframe width="560" height="315" src="${movie.trailer}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
});
