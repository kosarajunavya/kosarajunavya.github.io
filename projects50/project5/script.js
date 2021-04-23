// const loadText = document.querySelector('.loading-text');
// const bg = document.querySelector('.bg');
// let load = 0;
// let int = setInterval(blurring, 30)
// function blurring() {
//     load++;
//     if (load > 99) {
//         clearInterval(int);
//     }
//     loadText.innerText = `${load}%`;
//     loadText.style.opacity = scale(load, 0, 100, 1, 0)
//     bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
// }

// function scale(number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

var load = 0;

$(function() {
    var int = setInterval(blurring, 30)
    
    function blurring() {
        load++;
        if (load > 99) {
            clearInterval(int)
        }
        $(".loading-text").html(load + "%");
        $(".loading-text").fadeOut(6000);
        $(".bg").style.filter(`blur(${scale(load,0,100,30,0)}px)`);
        

    }
    
    const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
   
});
