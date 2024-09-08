//scroll

let oldScrollTopPosition = document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    let scrollTopPosition = document.documentElement.scrollTop;

    if (oldScrollTopPosition < scrollTopPosition) {
        this.document.querySelector('.header').classList.add('header--hidden');
        oldScrollTopPosition = scrollTopPosition;
    } else if (oldScrollTopPosition > scrollTopPosition) {
        this.document.querySelector('.header').classList.remove('header--hidden');
        oldScrollTopPosition = scrollTopPosition;
    }
})

// заглушка отправки формы

const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
})

// burger menu

const burgerEl = document.querySelector('.burger');

if (burgerEl) {
    const body = document.body;
    const menuEl = document.querySelector('.nav');
    burgerEl.addEventListener('click', () => {
        menuEl.classList.toggle('nav--active');
        burgerEl.classList.toggle('burger--active');
        body.classList.toggle('stop-scroll');
    });

};

//for animations
