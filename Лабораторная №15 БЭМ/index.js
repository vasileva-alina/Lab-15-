document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('menu').classList.add('open');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('open');
});


let sum = 0;
let sumText = document.getElementById('Sum'); // Убедитесь, что у вас есть элемент с id "Sum"

function Sum(button) {
    let colvoText = button.parentElement.querySelector('.colvo'); // Находим элемент colvo в текущей карточке
    let colvo = parseInt(colvoText.innerHTML); // Получаем текущее количество
    if (colvo < 5) {
        colvo++;
    }
    colvoText.innerHTML = colvo; // Обновляем текст
}

function Min(button) {
    let colvoText = button.parentElement.querySelector('.colvo'); // Находим элемент colvo в текущей карточке
    let colvo = parseInt(colvoText.innerHTML); // Получаем текущее количество
    if (colvo > 0) {
        colvo--;
    }
    colvoText.innerHTML = colvo; // Обновляем текст
}

function Add(button) {
    let colvoText = button.parentElement.querySelector('.colvo'); // Находим элемент colvo в текущей карточке
    let colvo = parseInt(colvoText.innerHTML); // Получаем текущее количество
    sum += colvo; // Увеличиваем общую сумму
    sumText.innerHTML = sum; // Обновляем текст общей суммы
    colvoText.innerHTML = 0; // Сбрасываем количество в текущей карточке
}


