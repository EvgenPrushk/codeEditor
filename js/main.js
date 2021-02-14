//получаем тег textarea, затем добавляю обработчик событий keydown
// 
document
    .querySelectorAll('textarea')
    .forEach(element => {element.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            // отменяет стандартную обработку событий
            event.preventDefault();
            // тот из textarea над которым произошло событие
            // позволяет понять, где именно находиться каретка

            let value = '';
            let nextSelectionStart = this.selectionStart + 4;
            // вставляю то, что находилось до selectionStart 
            value += this.value.substring(0, this.selectionStart);
            // вставляю 4 пробела
            value += '    '
            // вставляю то, что находилось доselectionEnd
            value += this.value.substring(this.selectionEnd);

            this.value = value;
            this.selectionStart = nextSelectionStart;
            this.selectionEnd = nextSelectionStart;
        }
    })

        element.addEventListener('keyup', updateIframe)
})

function  updateIframe () {
    const mountedPoin = document.querySelector('[data-iframe]');
    const html = document.querySelector('.square-html>textarea').value;
    const javascript = document.querySelector('.square-javascript>textarea').value;
    const css = document.querySelector('.square-css>textarea').value;

    const page = `${html}<style>${css}</style><script>${javascript}</script>`;

    const iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;charset=utf-8,' + page;
    mountedPoin.innerHTML = '';
    mountedPoin.append(iframe);
}