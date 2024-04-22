document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button-open');
    const toHide = document.getElementById('to-hide');

    button.addEventListener('click', function() {
        if (toHide.style.maxHeight) {
            // Если контейнер открыт, закрыть его
            toHide.style.maxHeight = null;
        } else {
            // Если контейнер закрыт, открыть его
            toHide.style.maxHeight = toHide.scrollHeight + 'px';
        }
    });
});
