var box = document.querySelectorAll('td');
var btn = document.querySelector("#button");

function clearBoard(){
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = ""; 
    }
}

function changeMarker(){
    if (this.textContent === ""){
        this.textContent = "X";
    }
    else if(this.textContent === "X"){
        this.textContent = "O";
    }
    else{
        this.textContent = "";
    }
}

for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click',changeMarker);
}


btn.addEventListener('click',clearBoard);