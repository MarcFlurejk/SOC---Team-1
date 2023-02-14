function createUser(email) {
    const password = generatePassword();

    if (!email) {
        alert('Email kan ikke være tom');
        return;
    }

    if (isEmailRegistered(email)) {
        alert('Email er allerede i brug');
        return;
    }

    storeLoginInfo(email, password);
}

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function storeLoginInfo(email, password) {
    localStorage.setItem(email, password);
}

function getLoginInfo(email) {
    return localStorage.getItem(email);
}

function isEmailRegistered(email) {
    return !!localStorage.getItem(email);
}

function signUp() {
    const emailInput = document.getElementById('email').value;
    const email = emailInput;
    const loginInfo = createUser(email);
}

function showLoginInfo() {
    const emailInput = document.getElementById('email').value;
    const password = getLoginInfo(emailInput);

    if (password) {
        alert('Dit password er: ' + password);
    } else {
        alert('Der findes ikke en konto med denne mail');
    }
    emailInput.value = '';
}
