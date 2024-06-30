document.addEventListener("DOMContentLoaded", function() {
    // Получаем массив всех ссылок на странице
    const links = document.querySelectorAll('a');
    const linksArray = Array.from(links);

    // Выводим массив ссылок через 1 секунду
    setTimeout(() => {
        alert(linksArray);
    }, 1000);

    // Удаляем элемент №3 (изображение) при щелчке на него
    const removableElement = document.getElementById('removable');
    removableElement.addEventListener('click', function() {
        removableElement.remove();
    });

    // Оформляем стиль после нажатия кнопки
    const changeStyleButton = document.getElementById('change-style');
    changeStyleButton.addEventListener('click', function() {
        document.body.style.backgroundColor = 'yellow';
        document.body.style.fontFamily = 'Arial';
        document.body.style.fontSize = '12px';
        document.body.style.color = 'blue';

        // Добавляем рамку к изображениям
        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.border = '1px solid green';
        });
    });
});

