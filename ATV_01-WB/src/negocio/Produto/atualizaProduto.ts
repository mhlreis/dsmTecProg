import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualiza from "../atualiza";

export default class AtualizaProduto extends Atualiza {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada();
    }
    public atualizar(): void {
       
        let entrada = this.entrada.receberTexto(`Digite o nome completo do produto a ser alterado: `)
        let todosProdutos = this.produtos.map(i => i.nome)
        let indexProdutos = todosProdutos.indexOf(entrada)

        if (indexProdutos == -1) {
            console.log(`Produto ${entrada} não encontrado`);
            console.log(`Tente novamente`);
            console.log();
        } else {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do Produto: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do Produto: R$`)
            this.produtos.filter(produto => produto.nome == entrada).map(i => i.preco = novoPreco).toString()
            this.produtos.filter(produto => produto.nome == entrada).map(i => i.nome = novoNome ).toString()
            console.log(`Produto alterado com sucesso!`);
            console.log();
        }
    }
}