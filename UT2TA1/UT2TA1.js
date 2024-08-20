const repeatString = (texto, repeticiones) => {
    for (let i = 0; i < repeticiones; i++) {
        const p = document.createElement('p');
        p.textContent = `${i + 1}-` + texto;
        document.getElementById('content').appendChild(p);
    }
};

const invertString = (texto) => {
    let invertedString = '';
    for (let i = texto.length; i > 0; i--) {
        invertedString += texto[i - 1];
    }
    const p = document.createElement('p');
    p.textContent = invertedString;
    document.getElementById('content').appendChild(p);
};

const removeFromArray = (arreglo, item) => {
    let result = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== item) {
            result.push(arreglo[i])
        }
    }
    console.log(result)
    const p = document.createElement('p');
    if (arreglo.length === result.length) {
        result = 'No se pudo encontrar el elemento a eliminar en el arreglo.';
        console.log('No se pudo encontrar el elemento a eliminar en el arreglo.');
    }
    p.textContent = result;
    document.getElementById('content2').appendChild(p);
}

const getTheTitles = (books) => {
    let result = [];
    for (const book of books) {
        result.push(book.title);
        const h1 = document.createElement('h1');
        h1.textContent = book.title;
        document.getElementById('content2').appendChild(h1);
    }
    return result;
};

const getOdds = (nums) => {
    let result = []
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new Error(`Array contains a non-number element: ${element}`);
        }
        if (num % 2 === 0) {
            result.push(num);
            const h1 = document.createElement('h1');
            h1.textContent = num;
            h1.classList.add('get-odds');
            document.getElementById('content3').appendChild(h1);
        }
    }
    return result;
}

const duplicates = (nums) => {
    let repMap = new Map();

    for (num of nums) {
        repMap.set(num, (repMap.get(num) || 0) + 1);
    }

    for (const [key, value] of repMap) {
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h4.textContent = key;
        p.textContent = value;

        document.getElementById('content3').appendChild(h4);
        document.getElementById('content3').appendChild(p);
    }
}

document.getElementById('addParagraphButton').addEventListener('click', () => {
    const texto = document.getElementById('input1').value;
    const repeticiones = document.getElementById('input2').value;
    repeatString(texto, repeticiones);
});

document.getElementById('invertParagraphButton').addEventListener('click', () => {
    const texto = document.getElementById('input1').value;
    invertString(texto);
});