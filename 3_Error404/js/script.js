const  container=document.querySelector('#container');

window.onmousemove=function (event) {
    let x =event.clientX/8;
    let y =event.clientY/8;

    container.style.backgroundPositionX=x+"px"
    container.style.backgroundPositionY=y+"px"
}