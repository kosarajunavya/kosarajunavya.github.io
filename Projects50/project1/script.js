// const panels = document.querySelectorAll('.panel')
// panels.forEach( panel => {
//     panel.addEventListener('click', () =>{
//         removeActiceClasses()
//         panel.classList.add('active');
//     })
// })

// function removeActiceClasses(){
//     panels.forEach( panel=> {
//         panel.classList.remove('active')
//     })
// }

$(function() {
    $('.panel').click(function() {
        $('.panel').removeClass('active');
        $(this).addClass('active');
    })
})