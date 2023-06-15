const To_top = document.querySelector('.to-top');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
        To_top.classList.add('active')

    }else {
        To_top.classList.remove('active')
    }
})