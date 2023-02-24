// Botão de Download do CV
const btnDownload = document.querySelector('#cv-download-btn');
btnDownload.addEventListener('click', () => {
    let url = 'cv/cv.pdf';
    let win = window.open(url, '_blank');
    win.focus();
});