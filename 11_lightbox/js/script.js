const  imgbox=document.querySelectorAll('.imgBox')


imgbox.forEach(popup => popup.addEventListener('click',function () {
    popup.classList.toggle('active')
}))


// imgbox.addEventListener('click',function () {
//     imgbox.classList.toggle('active');
// })