

const botaoDeslizar = document.getElementById("deslizar")

botaoDeslizar.addEventListener('click', function () {
    deslizar()
})

const botaoAdicionar = document.querySelector("#adicionar")

botaoAdicionar.addEventListener('click', function(){
    adicionarTarefa()
})

function adicionarTarefa() {

    // Pegar o valor digitado no input
    const tarefa = document.querySelector('#input').value 
    

    // Criar um Item da lista
    const li = document.createElement('li')
    li.className = "list-group-item"

    // Criar Texto
    const p = document.createElement('p')
    p.innerText = tarefa

    // Criar Botão
    const botao = document.createElement('button')
    botao.className = "btn btn-danger"
    botao.innerText = "Apagar"
    botao.addEventListener('click', function(){
        apagarTarefa(li)
    })

    // Criando uma DIV
    const div = document.createElement('div')
    div.className = "row justify-content-between"

    // Adicionar Texto e Botão no Item da lista
    div.appendChild(p)
    div.appendChild(botao)

    li.appendChild(div)

    // Fazer referência a lista
    const lista = document.querySelector("#list")

    
    // Adicionar item na lista
    lista.appendChild(li)
    
    document.querySelector('#input').value = ''

}

function apagarTarefa(li) {

    // Remover Item da lista
    li.remove()
}



function deslizar() {

    // Mover o bloco para a direita
    const bloco = document.querySelector('#bloco')

    var distanciaEsquerda = 0

    var intervalo = setInterval(function () {

        if (distanciaEsquerda === 520) {

            clearInterval(intervalo)

        } else {

            distanciaEsquerda++
            bloco.style.left = distanciaEsquerda + 'px'
        }

    }, 5)

   
}