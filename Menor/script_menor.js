function comprar(){
    let quant = document.getElementById('quantidade')
    let quantidade = Number(quant.value)
    let valor = quantidade * 10
    mensagem.innerHTML = `Olá!<br> O valor total a ser pago é:<br> <strong>R$${valor},00<strong/>`
    
}