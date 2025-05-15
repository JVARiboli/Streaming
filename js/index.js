const db = new PouchDB('Finances');

function showForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.querySelector('.tab-login');
    const registerTab = document.querySelector('.tab-register');

    if (formType === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    }
}

document.getElementById('loginForm').querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    try {
        const userDoc = await db.get('user_' + username);

        if (userDoc.password === password) {
            alert('Login bem-sucedido!');
            document.getElementById('error-msg').classList.add('hidden');
            window.location.href = 'paginaInicial.html';
        } else {
            document.getElementById('error-msg').textContent = 'Senha incorreta.';
            document.getElementById('error-msg').classList.remove('hidden');
        }
    } catch (err) {
        document.getElementById('error-msg').textContent = 'Usuário não encontrado.';
        document.getElementById('error-msg').classList.remove('hidden');
    }
});

document.getElementById('registerForm').querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    try {
        await db.get('user_' + newUsername);
        alert('Usuário já existe. Tente outro nome.');
    } catch (err) {
        if (err.status === 404) {
            await db.put({
                _id: 'user_' + newUsername,
                username: newUsername,
                password: newPassword
            });
            alert('Cadastro bem-sucedido! Você já pode fazer login.');
            showForm('login');
        } else {
            alert('Erro ao acessar o banco: ' + err.message);
        }
    }
});
