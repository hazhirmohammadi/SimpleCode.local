let startBox = document.querySelector('.start-box')
let inputCounter = document.querySelector('#input-content')
let startCounter = document.querySelector('#start-counter')
let errorElement = document.querySelector('#error-message')
let timerCircle = document.querySelector('#c100');
let timerNum = document.querySelector('.c100>span')
let loadingMassage = document.querySelector('.message .loading')
let successMassage = document.querySelector('.message .success')



startCounter.addEventListener('click', function (e) {
    let seconds = parseInt(inputCounter.value)

    if (isNaN(seconds)) {
        errorElement.textContent = 'input invalid !!!';
        errorElement.classList.add('active');
        return;
    }
    errorElement.classList.remove('active');
    startBox.style.display = 'none ';
    timerCircle.style.display = 'block ';
    timerNum.textContent = seconds;
    loadingMassage.style.display='block';
    successMassage.style.display='none'
    let originalSeconds=seconds;
    let timeId = setInterval(() => {
        if (seconds <= 1) {
            clearInterval(timeId)
            startBox.style.display = 'block';
            timerCircle.style.display = 'none';
            inputCounter.value = '';
            loadingMassage.style.display='none';
            successMassage.style.display='block';
        }
        seconds-= 1;
        let percent=Math.floor(((originalSeconds - seconds)/originalSeconds)*100)

        timerCircle.classList.add(`p${percent}`)
        timerNum.textContent = seconds;
    }, 1000)
})
