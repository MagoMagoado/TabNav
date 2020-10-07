function openDay(e,day) {
    let diaslinks=document.getElementsByClassName("tablinks");
    let diascontent=document.getElementsByClassName("tabcontent");

    //desaparece com todos os contents e remove todos os actives
    for (i = 0; i < diascontent.length; i++) {
        diascontent[i].style.display = "none";
        diaslinks[i].classList.remove("active");
    }

    //deixa apenas o clicado como block
    day.style.display= "block";

    //adiciona a classe active para qual foi clicado
    e.currentTarget.className+= " active";
}

function eventos(){
    var diaslinks=document.getElementsByClassName("tablinks");
    var diascontent=document.getElementsByClassName("tabcontent");
    var tab=document.getElementsByClassName("tab")[0];


    //desaparece com todos os contents menos o 1º
    for (i = 1; i < diascontent.length; i++) {
        diascontent[i].style.display = "none";
    }

    //para ficar do mesmo tamanho de tab
    for (i = 0; i < diascontent.length; i++) {
        diascontent[i].style.height=tab.scrollHeight+"px";
    }

    diaslinks[0].addEventListener("click",function(){
        openDay(event,diascontent[0]);
    });
    diaslinks[1].addEventListener("click",function(){
        openDay(event,diascontent[1]);
    });
   diaslinks[2].addEventListener("click",function(){
        openDay(event,diascontent[2]);
    });
    diaslinks[3].addEventListener("click",function(){
        openDay(event,diascontent[3]);
    });
    diaslinks[4].addEventListener("click",function(){
        openDay(event,diascontent[4]);
    });
    diaslinks[5].addEventListener("click",function(){
        openDay(event,diascontent[5]);
    });
    diaslinks[6].addEventListener("click",function(){
        openDay(event,diascontent[6]);
    });
}
window.addEventListener("load",eventos);