function add(){
    var a=document.getElementById("sub");
    var b=a.value;
    var c=document.querySelector(".comment");
    if(b!==""){
        c.innerHTML+= `<div class="model">${b}</div>`
        a.value="";
        addXbutton();
    }
}

function addXbutton(){
    c.innerHTML+=``
}
