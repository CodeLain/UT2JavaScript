const sumAll = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || a > b) {
        throw new Error('a y b deben ser numbers y a<b');
    }

    let result = 0;
    for (let i = a; i <= b; i++) {
        result += i;
    }

    const p = document.createElement('p');
    p.textContent = result;
    document.getElementById('content').appendChild(p);
}
const convertToCelsius = (temp) => {
    let result = parseFloat(((temp - 32) * 5 / 9).toFixed(1));
    const p = document.createElement('p');
    p.textContent = result;
    document.getElementById('content1').appendChild(p);
}

const convertToFahrenheit = (temp) => {
    let result = parseFloat((temp * 9 / 5 + 32).toFixed(1));
    const p = document.createElement('p');
    p.textContent = result;
    document.getElementById('content1').appendChild(p);
}

const leapYears = (anio) => {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

const getSum = (nums) => {
    let result = 0;
    for (num of nums) {
        result += num;
    }
    console.log(result);
}