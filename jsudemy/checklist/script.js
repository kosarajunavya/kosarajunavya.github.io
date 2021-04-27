
function operation(){
    var ans = document.getElementById('result');
    if (document.getElementById("input").value === 'monday') {
        ans.innerHTML= list('monday');
    }else if (document.getElementById("input").value === 'tuesday') {
        ans.innerHTML= list('tuesday');
    }else if (document.getElementById("input").value === 'wednesday') {
        ans.innerHTML= list('wednesday');
    }else if (document.getElementById("input").value === 'thrusday') {
        ans.innerHTML= list('thrusday');
    }else if (document.getElementById("input").value === 'friday') {
        ans.innerHTML= list('friday');
    }else if (document.getElementById("input").value === 'saturday') {
        ans.innerHTML= list('saturday');
    }
    
}

function list(days){
    var day = document.getElementById('input');
    var res;
    switch(days) {
        case 'monday':
            res= 'Today you should be completing the fundamental parts of javascript from udemy course'
            break;
            case 'tuesday':
            res= 'Today you should be completing till arrow functions'
            break;
            case 'wednesday':
            res= 'Today you should be completing till basic operators'
            break;
            case 'thrusday':
            res= 'Today you should be completing till coding challenge 3'
            break;
            case 'friday':
            res=  'Today you should be completing the fundamental parts-2 of javascript from udemy course'
            break;
            case 'saturday':
            res=  'totally revision and experiments'
            break;
    }
    return res;
}
