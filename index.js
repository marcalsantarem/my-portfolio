// const btnDownload = document.querySelector('.content-main-tex-btn');
// btnDownload.addEventListener('click', () => {
//     const url = 'cv/cv.pdf';
//     const win = window.open(url, '_blank');
//     win.focus();
// });

const copyrightsYear = document.querySelector('.copyrights-year');
const date = new Date();
copyrightsYear.innerHTML = date.getFullYear();