var save = document.querySelector('.card');
save.style.backgroundColor = 'blue';

new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 10,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

new Glider(document.querySelector('.glider2'), {
    slidesToShow: 3,
    slidesToScroll: 10,
    draggable: true,
    dots: '#dots2',
    arrows: {
        prev: '.glider-prev2',
        next: '.glider-next2'
    }
});









  