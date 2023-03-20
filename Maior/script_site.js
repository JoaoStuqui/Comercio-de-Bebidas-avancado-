function comprar(){
    let quantidade_vinho = document.getElementById('quantidade_vinho')
    let quantidade_heineken = document.getElementById('quantidade_heineken')
    let quantidade_guarana = document.getElementById('quantidade_guarana')
    let valor_vinho = Number(quantidade_vinho.value) * 80
    let valor_heineken = Number(quantidade_heineken.value) * 20
    let valor_guarana = Number(quantidade_guarana.value) * 10
    let total = valor_vinho + valor_heineken + valor_guarana
    mensagem.innerHTML = `Olá!<br> O valor total a ser pago é:<br> <strong>R$${(total)},00<strong/>`
}