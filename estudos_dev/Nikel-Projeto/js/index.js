const myModal = new bootstrap.Modal('#register-modal');
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//logar no sistema
document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const ChekSession = document.getElementById("session-chek").value;


    const account = getAccount(email);
    if (!account) {
        alert("Opps! Verifique o usuário ou a senha");
        return;
    }

    saveSession(email, ChekSession)


    window.location.href = "home.html";

});
//criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if (email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if (password.length < 5) {
        alert("Preencha a senha com no mínimo 5 dígitos.");
        return;
    }

    SaveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();
    alert("Conta criada com sucesso!");
});

function checkLogged() {
    if (session) {

        sessionStorage.setItem("logged", session);
        logged = session;

    }
}

if (logged) {
    saveSession(logged, session)

    window.location.href = "home.html"; window
}

function SaveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}
function saveSession(data, saveSession) {
    if (saveSession) {
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}


function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }
    return "";
};
