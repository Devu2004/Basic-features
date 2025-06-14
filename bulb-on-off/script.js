var btn = document.querySelector('button');
var box = document.querySelector('.bulb');


var light = 0
btn.addEventListener('click', function(){
    if(light == 0){
        // box.style.transition = 'all 3s ease-in-out';
        box.style.backgroundColor = 'yellow';
        btn.innerHTML = `Switch off`;
        light = 1;
    }
    else{
        // box.style.transition = 'all 3s ease-in-out';
        box.style.backgroundColor = 'transparent';
        btn.innerHTML = `Switch on`;
        light = 0;
    }

})

