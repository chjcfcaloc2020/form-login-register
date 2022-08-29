let x = 0;
let text = document.getElementById("lb");
function change_color() {
    x++;
    if(x % 2 != 0){
        text.style.color='#2691d9';
    }
    else{
        text.style.color='#adadad';
    }
}