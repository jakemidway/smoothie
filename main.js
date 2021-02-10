
let burger_Menu = document.querySelector('.header__burger-menu');

function burgerMenu() {
    
    let burgerIcon = document.querySelector('.header__burger-icon'); 
    let closeIcon = document.querySelector('.header__close-icon');


    burgerIcon.addEventListener('click', toggleBurgerMenu)
    
    closeIcon.addEventListener('click', toggleBurgerMenu)         
}

function toggleBurgerMenu() {
    burger_Menu.classList.toggle('header__burger-menu_active')
    console.log('OK')
}

burgerMenu();

/*----------------------------------------------бургер меню------------------------------------------------------------------------------*/



/*---------------------------------------------счетчик корзины----------------------------------------------------------------------*/

let buy_buttons = document.querySelectorAll('.button_nocolor');

let cart_count = document.getElementById('cart_count');

function addToCart(){
    cart_count.innerText = +cart_count.innerText + 1;
}

for(let i = 0; i < buy_buttons.length; i++){
    buy_buttons[i].addEventListener('click', addToCart)  /* addToCart();*/      
}

                        




/*-------------------------------------------ПРОКРУТКА ПО ЯЯКАРЯМ------------------------------------------------------------------------------------------*/ 

let anchors = document.querySelectorAll('a[href*="#"]');

// for(let i = 0; i < anchors.length: i++){
//     anchors[i].addEventListener;
// }

for(let anchor of anchors){
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        let blockID = anchor.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    });
}

// console.log(anchors);



/*----------------------------------------------------ТЕСТИРУЕС------------------------------------------------------------------------------------------------------------*/

// let poragrafs = document.querySelectorAll('p');

// console.log(poragrafs);

// for(let poragraf of poragrafs){
//     poragraf.innerHTML = 'he-he-he'
//     console.log(poragraf);
// }
/*----------------------------------------------------lbx-----------------------------------------------------------------------------------------------------------*/