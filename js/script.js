
// Получаем элементы для отображения времени
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Устанавливаем конечную дату для таймера
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2); // Таймер на 2 дня вперед

timerUpdate(); // Обновляем часы сразу при загрузке страницы

// Функция для обновления таймера
function timerUpdate() {
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;

    if (timeDiff <= 0) {
        clearInterval(timerInterval); // Останавливаем таймер, если время истекло
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
}

// Форматируем числа для добавления ведущего нуля
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Запускаем интервал для обновления каждую секунду
const timerInterval = setInterval(timerUpdate, 1000);

