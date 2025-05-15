const db = new PouchDB('Finances');

function loadUsers() {
    db.allDocs({ include_docs: true }).then(function (result) {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';

        result.rows.forEach(function (row) {
            const user = row.doc;
            const userDiv = document.createElement('div');
            userDiv.classList.add('movie-item');
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>E-mail: ${user.email}</p>
                <p>Tipo de Acesso: ${user.role}</p>
                <button onclick="deleteUser('${user._id}')">Excluir</button>
            `;
            userList.appendChild(userDiv);
        });
    });
}

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const newUser = {
        name,
        email,
        password,
        role
    };

    db.post(newUser).then(function () {
        loadUsers();
        document.getElementById('userForm').reset();
    }).catch(function (err) {
        console.log('Erro ao adicionar usuário', err);
    });
});

function deleteUser(userId) {
    db.get(userId).then(function (doc) {
        return db.remove(doc);
    }).then(function () {
        loadUsers();
    }).catch(function (err) {
        console.log('Erro ao excluir usuário', err);
    });
}

window.onload = loadUsers;
