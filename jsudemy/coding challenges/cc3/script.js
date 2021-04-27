const scoreDolphins = (97+112+80)/3;
const scoreKoalas = (109+95+50)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >=100){
    console.log('Koalas win the trophy');
}else if(scoreDolphins === scoreKoalas && scoreDolphins>=100 && scoreKoalas >=100 ){
    console.log('both win the trophy');
}else {
    console.log('no one wins the trophy');
}