class Produto{


    constructor(){
        this.id = 1
        this.arrayProdutos = []
    }

    Adicionar(){
        let produto = this.lerDados()
        if (this.Validar(produto) == true){
            this.Salvar(produto)
        }

        this.Listar()
        this.Cancelar()
    }

    lerDados(){
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.valorProduto = document.getElementById('pdvalor').value

        return produto
    }

    Validar(produto){
        let msg = ''
        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto! \n'
        }

        if (produto.valorProduto == ''){
            msg += 'Informe o Valor do produto \n' 
        }

        if (msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++ 
    }

    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_deletar = tr.insertCell()

            td_id.innerHTML = this.arrayProdutos[i].id
            td_nome.innerHTML = this.arrayProdutos[i].nomeProduto
            td_valor.innerHTML = this.arrayProdutos[i].valorProduto
            let imagem = document.createElement('img')
            imagem.src = 'lixeira.jpeg'
            imagem.setAttribute('onclick', 'produto.Deletar(' + this.arrayProdutos[i].id + ')')
            td_deletar.appendChild(imagem)
            
        }
        
    }

    Cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdvalor').value = ''
    }

    Deletar(id){
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert('O item foi apagado')  
    }
}

var produto = new Produto()