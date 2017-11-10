var tbodyPacientes = document.getElementById("tabela-pacientes");

tbodyPacientes.addEventListener("dblclick", function (event){
    var paiElementoClicado = event.target.parentNode;
    paiElementoClicado.classList.add("fadeOut");
    setTimeout(function(){
        paiElementoClicado.remove();
    }, 500); //valor em milisegundos, sendo 500 milisegundos, ou seja 0.5 segundos. igual colocamos no CSS

});