import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import Produto from "../../modelo/produto";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        
        let produto = this.entrada.receberTexto(`Digite o nome do produto: `)
        let nomes = this.produtos.map(i => (i.nome))
        if (nomes.includes(produto)) {
            console.log(`${produto} já cadastrado`);
            console.log();
        } else {
            let preco = this.entrada.receberNumero(`Digite o preço do produto: R$`)
            let cadastrar = new Produto(produto, preco);
            this.produtos.push(cadastrar);
            console.log();
        }
    }
}