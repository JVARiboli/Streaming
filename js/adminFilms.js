const db = new PouchDB('Finances');

function loadMovies() {
    db.allDocs({ include_docs: true }).then(function (result) {
        const movieList = document.getElementById('movieList');
        movieList.innerHTML = '';

        result.rows.forEach(function (row) {
            const movie = row.doc;
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie-item');
            movieDiv.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <p>Categoria: ${movie.category}</p>
                <img src="${movie.image}" alt="${movie.title}" width="100">
                <br>
                <a href="${movie.trailer}" target="_blank">Assistir Trailer</a>
                <br>
                <button onclick="deleteMovie('${movie._id}')">Excluir</button>
            `;
            movieList.appendChild(movieDiv);
        });
    });
}

document.getElementById('movieForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const trailer = document.getElementById('trailer').value;
    const image = document.getElementById('image').value;

    const newMovie = {
        title,
        description,
        category,
        trailer,
        image
    };

    db.post(newMovie).then(function () {
        loadMovies();
        document.getElementById('movieForm').reset();
    }).catch(function (err) {
        console.log('Erro ao adicionar filme', err);
    });
});

function deleteMovie(movieId) {
    db.get(movieId).then(function (doc) {
        return db.remove(doc);
    }).then(function () {
        loadMovies();
    }).catch(function (err) {
        console.log('Erro ao excluir filme', err);
    });
}

window.onload = loadMovies;
