var btn = document.querySelector(".change");
var box = document.querySelector(".Box");
var btn2 = document.querySelector(".Genrator");
var cc = document.querySelector("h2");
let c1,c2,c3;
function rgb(r,g,b){
    function rgbtohex(n){
        return n.toString(16).padStart(2,'0').toUpperCase();
    }
    return `#${rgbtohex(r)}${rgbtohex(g)}${rgbtohex(b)}`;
}
btn.addEventListener("click", function () {
    c1 = Math.floor(Math.random() * 256);
    c2 = Math.floor(Math.random() * 256);
    c3 = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    box.style.transition = "background-color 0.5s ease-in-out";
})
btn2.addEventListener("click", function () {
    let hexColor = rgb(c1, c2, c3);
    cc.textContent = hexColor;
    // cc.style.color = hexColor; 
});