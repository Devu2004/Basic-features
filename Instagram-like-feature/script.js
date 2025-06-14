var image = document.querySelector('.img');
var heart = document.querySelector('#heart');
var heart_below = document.querySelector('#heart-2');

image.addEventListener(`dblclick`, function(){
    heart.style.transform = 'translate(-50% , -50%) scale(1)';
    heart.style.opacity = 0.8;

    setTimeout(function(){
        heart.style.opacity = 0;
        heart_below.style.color = `red`
    },1000)
    setTimeout(function(){
        heart.style.opacity = 1;
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
        heart_below.style.color = `red`
    },2000)
})
let flag = 0;
heart_below.addEventListener(`click`, function(){
    if(flag == 0){
        heart_below.style.color = `red`
        flag = 1;
    }
    else{
        heart_below.style.color = `white`
        flag = 0;
    }
})