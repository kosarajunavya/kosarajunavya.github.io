// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const container = document.querySelector('.container')

// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
// left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
// right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

$(document).ready(function()  {
    $('.left').mouseover(function() {
        $('.container').addClass('hover-left');
    });
    $('.left').mouseout(function() {
        $('.container').removeClass('hover-left');
    });
    $('.right').mouseenter(function() {
        $('.container').addClass('hover-right');
    });
    $('.right').mouseleave(function() {
        $('.container').removeClass('hover-right');
    });
});