
function incrementarJuros(valor, percentualDeJuros) {
    const valorDeAcrescimo = (percentualDeJuros/100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));