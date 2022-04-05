var categorias = ["Hortifrut", "Açougue", "Limpeza", "Bebidas", "Laticinios", "Padaria", "Enlatados"]
var lista = []
var produto = ""
var quantidade = ""
var categoria = ""
var divCategorias = ""

divCategorias += "Categoria: <select name='categoriasSelect' id='categoriasSelect'>"

for (var item in categorias) {
    divCategorias += "<option value='" + categorias[item] + "'>" + categorias[item] + "</option>"
}

divCategorias += "</select>" 
document.getElementById("divCategorias").innerHTML = divCategorias

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

function limparConteudo() {
    document.getElementById("conteudo").innerHTML = ""
}


function removeItem() {
    var remover = lista.pop();
    alert("voce acabou de deletar o ultimo produto inserido")
}
