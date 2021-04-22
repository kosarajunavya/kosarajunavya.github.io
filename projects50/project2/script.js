const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
});

prev.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) *
        100 + "%";

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
};

// var currentActive = 10;
// $(document).ready(function() {
//     $("#next").click(function() {
//         currentActive = currentActive+10;
//         if (currentActive === 100) {
//             currentActive = 100
//             $("#next").attr("disabled", "disabled");
//         }
//         update(currentActive)
//         $("#prev").removeAttr("disabled");
//     });
//     // 
//     $("#prev").click(function() {
//         currentActive = currentActive-10;
//         if (currentActive <= 10) {
//             currentActive = 10
//             $("#prev").attr("disabled", "disabled");
//         }
    
//         $("#next").removeAttr("disabled", "disabled");
//         update(currentActive)
//     });


//     function update(currentActive) {
//         $('.circle').each(function() {

//             if (parseInt($(this).text()) === currentActive) {
//                 $(this).addClass("active");
               
//             } else if (parseInt($(this).text()) > currentActive) {
//                 $(this).removeClass("active");
              
//             }
//             $(".progress").width(($('.active').length - 1) / ($(".circle").length - 1) * 100 + '%')
           
//         });
//     }
// })