const userDB = new PouchDB('usuariosDB');
const movieDB = new PouchDB('filmesDB');

const userForm = document.getElementById('userForm');
const movieForm = document.getElementById('movieForm');

const userList = document.getElementById('userList');
const movieList = document.getElementById('movieList');

let editandoUsuarioId = null;
let editandoUsuarioRev = null;
let editandoFilmeId = null;
let editandoFilmeRev = null;

// ------------------- USUÁRIOS -------------------
async function carregarUsuarios() {
    const result = await userDB.allDocs({ include_docs: true });
    userList.innerHTML = '';

    result.rows.forEach(({ doc }) => {
        const div = document.createElement('div');
        div.className = 'user-item';
        div.innerHTML = `
            <strong>${doc._id}</strong> - ${doc.tipoUsuario}
            <button onclick="editarUsuario('${doc._id}')">✏️</button>
            <button onclick="deletarUsuario('${doc._id}', '${doc._rev}')">🗑️</button>
        `;
        userList.appendChild(div);
    });
}

async function editarUsuario(id) {
    const doc = await userDB.get(id);
    document.getElementById('usuario').value = doc._id;
    document.getElementById('password').value = doc.password;
    document.getElementById('role').value = doc.tipoUsuario;

    editandoUsuarioId = doc._id;
    editandoUsuarioRev = doc._rev;
    document.getElementById('userFormCancel').style.display = 'inline';
}

async function deletarUsuario(id, rev) {
    if (confirm('Deseja realmente excluir este usuário?')) {
        await userDB.remove(id, rev);
        carregarUsuarios();
    }
}

userForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();
    const tipoUsuario = document.getElementById('role').value;

    if (!username || !password) return alert('⚠️ Preencha todos os campos.');

    if (editandoUsuarioId) {
        await userDB.put({
            _id: editandoUsuarioId,
            _rev: editandoUsuarioRev,
            password,
            tipoUsuario
        });
        alert('✅ Usuário atualizado!');
    } else {
        try {
            await userDB.get(username);
            return alert('❌ Usuário já existe!');
        } catch (err) {
            if (err.status === 404) {
                await userDB.put({
                    _id: username,
                    password,
                    tipoUsuario
                });
                alert('✅ Usuário cadastrado!');
            }
        }
    }

    userForm.reset();
    editandoUsuarioId = null;
    editandoUsuarioRev = null;
    document.getElementById('userFormCancel').style.display = 'none';
    carregarUsuarios();
});

document.getElementById('userFormCancel').addEventListener('click', () => {
    userForm.reset();
    editandoUsuarioId = null;
    editandoUsuarioRev = null;
    document.getElementById('userFormCancel').style.display = 'none';
});

// ------------------- FILMES -------------------
async function carregarFilmes() {
    const result = await movieDB.allDocs({ include_docs: true });
    movieList.innerHTML = '';

    result.rows.forEach(({ doc }) => {
        const div = document.createElement('div');
        div.className = 'movie-item';
        div.innerHTML = `
            <strong>${doc.title}</strong> (${doc.category})<br>
            <em>${doc.synopsis}</em><br>
            <a href="${doc.trailer}" target="_blank">🎬 Ver Trailer</a><br>
            <button onclick="editarFilme('${doc._id}')">✏️</button>
            <button onclick="deletarFilme('${doc._id}', '${doc._rev}')">🗑️</button>
        `;
        movieList.appendChild(div);
    });
}

async function editarFilme(id) {
    const doc = await movieDB.get(id);
    document.getElementById('title').value = doc.title;
    document.getElementById('description').value = doc.synopsis;
    document.getElementById('category').value = doc.category;
    document.getElementById('trailer').value = doc.trailer;
    document.getElementById('image').value = doc.image;

    editandoFilmeId = doc._id;
    editandoFilmeRev = doc._rev;
    document.getElementById('movieFormCancel').style.display = 'inline';
}

async function deletarFilme(id, rev) {
    if (confirm('Deseja realmente excluir este filme?')) {
        await movieDB.remove(id, rev);
        carregarFilmes();
    }
}

movieForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const synopsis = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value;
    const trailer = document.getElementById('trailer').value.trim();
    const image = document.getElementById('image').value.trim();

    if (!title || !synopsis || !trailer || !image) {
        return alert('⚠️ Preencha todos os campos do filme.');
    }

    if (editandoFilmeId) {
        await movieDB.put({
            _id: editandoFilmeId,
            _rev: editandoFilmeRev,
            title,
            synopsis,
            category,
            trailer,
            image
        });
        alert('✅ Filme atualizado!');
    } else {
        await movieDB.put({
            _id: new Date().toISOString(),
            title,
            synopsis,
            category,
            trailer,
            image
        });
        alert('✅ Filme cadastrado!');
    }

    movieForm.reset();
    editandoFilmeId = null;
    editandoFilmeRev = null;
    document.getElementById('movieFormCancel').style.display = 'none';
    carregarFilmes();
});

document.getElementById('movieFormCancel').addEventListener('click', () => {
    movieForm.reset();
    editandoFilmeId = null;
    editandoFilmeRev = null;
    document.getElementById('movieFormCancel').style.display = 'none';
});

// Iniciar
carregarUsuarios();
carregarFilmes();