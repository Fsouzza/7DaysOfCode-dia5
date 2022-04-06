var categorias = ["Hortifrut", "Açougue", "Limpeza", "Bebidas", "Laticinios", "Padariaa", "Enlatados"]
var lista = []
var produto = ""
var quantidade = ""
var categoria = ""

createSelectCategorias()

function createSelectCategorias(){

var divCategorias = ""
divCategorias += "Categoria: <select name='categoriasSelect' id='categoriasSelect'>"

for (var item in categorias) {
    divCategorias += "<option value='" + categorias[item] + "'>" + categorias[item] + "</option>"
}

divCategorias += "</select>" 
document.getElementById("divCategorias").innerHTML = divCategorias
}

function addItem() {

    produto = document.getElementById("item").value
    quantidade = document.getElementById("qtde").value
    categoria = document.getElementById("categoriasSelect").value

    var elementoProduto = {"produto":produto, "quantidade":quantidade, "categoria":categoria}

    lista.push(elementoProduto)

    document.getElementById("item").value = ""
    document.getElementById("qtde").value = ""
}

function finalizar() {

    var htmlCode = "<h3>Lista de Compras:</h3>"

    var categoriasSelecionadas = []

    for (var k in lista) {
        if (!categoriasSelecionadas.includes(lista[k].categoria))
        categoriasSelecionadas.push(lista[k].categoria)
    }

    for (var i in categoriasSelecionadas){
        htmlCode += "<ul>" + categoriasSelecionadas[i] + ":</ul>"
        for(var j in lista){
            if(lista[j].categoria == categoriasSelecionadas[i]) {
                htmlCode += "<li>" + lista[j].produto + ": " + lista[j].quantidade + "</li>"
        }
    }
}


limparConteudo()

    document.getElementById("conteudo").innerHTML = htmlCode

}


function removeItem() {
    var remover = lista.pop();
    alert("voce acabou de deletar o ultimo produto inserido")
}


function excluirLista(){
    var htmlCode = ""

    htmlCode += "Item da Lista: <select name='itemSelect' id='itemSelect'>"

    for (var item in lista) {
        htmlCode += "<option value='" + lista[item].produto + "'>" + lista[item].produto + "</option>"
    }

htmlCode += "</select>"
htmlCode += "<br><button class='delButton' onclick='excluirElemento()' >Excluir Item</button>"
htmlCode += "<br><button class='normButton' onclick='home()' >Home</button>"

finalizar()
document.getElementById("conteudo").innerHTML = htmlCode

}

function excluirElemento() {
    var item = document.getElementById("itemSelect").value

        for(var i in lista) {
            if (lista[i].produto.toLowerCase() == item.toLowerCase()) {
                lista.splice(i, 1)
            }
        }

excluirLista()

}

function home() {
    limparConteudo()
    var htmlCode = ""

        htmlCode += "<h3>Adicione o produto e quantidade a Lista</h3>"
        htmlCode += "Produto <br>  <input type='text' id='item'><br>"
        htmlCode += "Quatidade <br> <input type='number' id='qtde' min='0' max='50'><br>"
        htmlCode += "<div id='divCategorias'></div>"
        htmlCode += "<br><button class='add' onclick='addItem()'>Adicionar</button><br>"
        htmlCode += "<button class='remove' onclick='removeItem()'>Remover</button><br><button class='exclui' onclick='excluirLista()'>Excluir</button><br>"
        htmlCode += "<button class='print' onclick='finalizar()''>Visualizar</button><br>"
        htmlCode += "<div class='msg'>"
        htmlCode += "<p id='msg'></p>"
        htmlCode += "</div>"

        document.getElementById("conteudo").innerHTML = htmlCode

        createSelectCategorias()
}

function limparConteudo() {
    document.getElementById("conteudo").innerHTML = ""
}

function limparDivCategorias() {
    document.getElementById("divCategorias").innerHTML = ""
}

function addButtonsContent() {
    var htmlCode = ""
    htmlCode += "<br><button class='NormButton' onclick='home()' >Adicionar Novos</button><button class='NormButton' onclick='newLista()' >Nova Lista</button>"

    document.getElementById("conteudo").innerHTML += htmlCode
    console.log("Não aparece na tela essa informação")
}


function newLista() {
    lista=[]
    home()
}