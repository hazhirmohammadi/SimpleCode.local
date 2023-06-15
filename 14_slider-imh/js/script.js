const imgbox = document.querySelector('.imgbox');
const slide = imgbox.getElementsByTagName('img');
let i = 0;

function nextSlide() {
    slide[0].classList.remove('active');
    i = (i + 1) % slide.length;
    slide[1].classList.add('active');
}

function prevSlide() {

}