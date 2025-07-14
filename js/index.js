const db = new PouchDB('usuariosDB');

async function criarUsuarioAdmin() {
    try {
        await db.get('admin');
    } catch (err) {
        if (err.status === 404) {
            await db.put({
                _id: 'admin',
                password: 'admin',
                tipoUsuario: 'administrador'
            });
            console.log('✅ Usuário administrador criado automaticamente.');
        }
    }
}

criarUsuarioAdmin();

function showForm(form) {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.remove('active');

    document.querySelector('.tab-login').classList.remove('active');
    document.querySelector('.tab-register').classList.remove('active');

    if (form === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.querySelector('.tab-login').classList.add('active');
    } else {
        document.getElementById('registerForm').classList.add('active');
        document.querySelector('.tab-register').classList.add('active');
    }
}

document.querySelector('#loginForm form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    try {
        const user = await db.get(username);

        if (user.password === password) {
            localStorage.setItem('usuarioLogado', JSON.stringify({
                username: user._id,
                tipoUsuario: user.tipoUsuario
            }));
            
            if (user.tipoUsuario === 'administrador')
                window.location.href = 'admin.html';
            else
                window.location.href = 'paginaInicial.html';
        } else {
            errorMsg.classList.remove('hidden');
        }

    } catch (err) {
        errorMsg.classList.remove('hidden');
    }
});

document.querySelector('#registerForm form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (password !== confirmPassword) {
        alert('❌ As senhas não coincidem!');
        return;
    }

    try {
        await db.get(username);
        alert('⚠️ Este nome de usuário já está em uso.');
    } catch (err) {
        if (err.status === 404) {
            await db.put({
                _id: username,
                password: password,
                tipoUsuario: 'usuario'
            });
            alert('✅ Cadastro realizado com sucesso!');
            showForm('login');
        } else {
            alert('❌ Erro ao acessar o banco de dados.');
        }
    }
});
