function alerta () {
    alert('temperat')
}




function farenheit () {
    var temperatura_de_entrada = parseFloat(document.querySelector("#entrada").value);
    var temperatura_em_celsius = ((temperatura_de_entrada - 32) / 1.8).toFixed(2);
    var resultadoCelsius = document.getElementById('resultadoCelsius');

    if (resultadoCelsius == null) {
        var divResultado = document.createElement ('div');
        divResultado.id = 'divResultado';
        var area = document.querySelector("#area");
        area.appendChild(divResultado);

        var textoOutput = document.createElement ('h4');
        textoOutput.id = 'textoOutput';
        divResultado.appendChild(textoOutput)
        textoOutput.innerText = "Temperatura em celsius:"

        resultadoCelsius = document.createElement('h4');
        resultadoCelsius.id = 'resultadoCelsius';
        divResultado.appendChild(resultadoCelsius)
        resultadoCelsius.innerText = temperatura_em_celsius+'°C';
    }
    return temperatura_em_celsius
};