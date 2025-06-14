var btn = document.querySelector(`button`);
var green_progress = document.querySelector(`.green-progress`)
var percent = document.querySelector(`.second-para`);
var grow = 0;
btn.addEventListener(`click`, function() {
    var time = Math.floor(Math.random() * 50+50)
    var new_percentage = setInterval(function() {
        grow++;
        percent.innerHTML = grow+`%`;
        green_progress.style.width = grow + `%`;
        console.log(time);
        
    },time);
    setTimeout(function() {
        clearInterval(new_percentage);
        btn.innerHTML = `Downloaded`
        btn.style.width = `110px`
        btn.style.opacity = `0.5`
    },time*100)
})