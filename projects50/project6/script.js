const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
// $(document).ready(function(){ 
//     $window.on('scroll', checkBoxes);
//     function checkBoxes() {
//         var triggerBottom = (window.innerHeight / 5 * 4);
//         $('.box').forEach(box => {
//              const boxTop = box.getBoundingClientRect().top
            
//                if(boxTop < triggerBottom) {
//                  box.addClass('show');
//                  } else {
//                     box.removeClass('show');
//                 }
//         }
    
// });
