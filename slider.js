let btnLeft = document.querySelector('#btn-left');
let btnRight = document.querySelector('#btn-right');


let slides = document.querySelectorAll('.testimonials__slide');
let counterSlide = 0

console.log(slides.length)

function showSlide(x) {
    for (let slide of slides){
        slide.style.display = 'none'
    }

    let show = slides[x]
    show.style.display = 'flex'
}

showSlide(0)


btnLeft.addEventListener('click', function () {
    counterSlide--
    

    if (counterSlide < 0){
        counterSlide = slides.length - 1
    }
    console.log(counterSlide)
    showSlide(counterSlide)
})





btnRight.addEventListener('click', function () {
    counterSlide++
    console.log(counterSlide)
    
    if (counterSlide > slides.length - 1){
        counterSlide = 0
    }
    showSlide(counterSlide)
})