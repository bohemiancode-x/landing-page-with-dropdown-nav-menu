const dropDown = document.getElementsByClassName('dropdown');
const cta = document.getElementsByClassName('arrow-down');
const open = document.querySelector('.openbtn');
const close = document.querySelector('.closebtn');
const popupBg = document.querySelector('.nav-overlay-bg');

open.addEventListener('click', () => {
    popupBg.style.display = 'block';
})

close.addEventListener('click', () => {
    popupBg.style.display = 'none';
})


let i;
for (let i=0; i < cta.length; i++){
    cta[i].addEventListener('click', () => {
        
        if (dropDown[i].style.display === "none") {
            cta[i].classList.add("active");
            dropDown[i].style.display = "flex";
        } else {
            dropDown[i].style.display = "none";
            cta[i].classList.remove("active");
        }
    })
};