var button = document.getElementById("icon")
var state = document.getElementById("state")
var mama = document.getElementById("mama")
var text = ["&nbspMá", "Boa"]

function change() {
    button.classList.toggle("icon-good");
    state.classList.toggle("good");
    if(mama.innerHTML == text[1]) {
        mama.innerHTML = text[0];    
    }
    else {
        mama.innerHTML = text[1];
    }
    
}




