let btnGoTop = document.querySelector('.footer__btn');


let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
  

btnGoTop.addEventListener('click', function () {
    window.scrollBy(0, -scrollHeight)
})

window.addEventListener('scroll', function () {
    if(window.scrollY > 900 && window.scrollY < scrollHeight){
        btnGoTop.classList.add('footer__btn_fixed')
        btnGoTop.classList.remove('footer__btn')
    } else{
        btnGoTop.classList.add('footer__btn')
        btnGoTop.classList.remove('footer__btn_fixed')
    }
})