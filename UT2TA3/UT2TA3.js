const generatePassword = (length) => {
    if (length < 8) {
        throw new Error('La constrania debe tener al menos 8 caracteres. Ingrese valor <= a 8.');
    }

    const possibleCharactersForPassword = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>!@#.';

    let password = '';
    for (let i = 0; i < length-2; i++) {
        const randomIndex = Math.floor(Math.random() * possibleCharactersForPassword.length);
        password += possibleCharactersForPassword[randomIndex];
    }

    const h4 = document.createElement('h4');
    h4.textContent = password;
    document.getElementById('content').appendChild(h4);
}

const findTheOldest = (people) => {
    let oldestPersonAge = 0;
    let result;
    for (const person of people) {
        if (person['age'] > oldestPersonAge) {
            result = person;
        }
    }

    const h4 = document.createElement('h4');
    h4.textContent = JSON.stringify(result);
    document.getElementById('content1').appendChild(h4);
    return result;
}