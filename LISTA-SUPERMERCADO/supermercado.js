var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',() =>{
    // pegando o valor digitado em nome e preco do produto
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })

    /*
        <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span> R$20,00</span></h3>
        </div>
    */

        let listaProdutos = document.querySelector('.lista-produtos');
        let soma = 0;
        listaProdutos.innerHTML = "";
        items.map(function(val){
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML +=`
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span> R$`+val.valor+`</span></h3>
            </div>
            `
        })

        // colocando somente duas casas decimais
        soma = soma.toFixed(2);
        // resetando o valor apos o produto ser inserido na lista
        nomeProduto.value = "";
        precoProduto.value = "";

        let elementoSoma = document.querySelector('.soma-produto h1');
        elementoSoma.innerHTML = 'R$' + soma;

    alert(items[0].nome);
    alert(items[0].valor);
    alert(soma);
});

document.querySelector('button[name=limpar]')
.addEventListener('click', () =>{
    items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0";
})