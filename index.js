const btnDownload = document.querySelector('#cv-download-btn');
btnDownload.addEventListener('click', () => {
    const url = 'cv/cv.pdf';
    const win = window.open(url, '_blank');
    win.focus();
});