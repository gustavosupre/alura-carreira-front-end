var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form)
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr (paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var tdNome = montaTd(paciente.nome, "info-nome");
    var tdPeso = montaTd(paciente.peso, "info-peso");
    var tdAltura = montaTd(paciente.altura, "info-altura");
    var tdGordura = montaTd(paciente.gordura, "info-gordura");
    var tdImc = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(tdNome)
    pacienteTr.appendChild(tdPeso)
    pacienteTr.appendChild(tdAltura)
    pacienteTr.appendChild(tdGordura)
    pacienteTr.appendChild(tdImc)

    return pacienteTr;
}

function montaTd (dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;

}