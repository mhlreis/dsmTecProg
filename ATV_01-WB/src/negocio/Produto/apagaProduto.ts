import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Apaga from "../apaga";

export default class ApagaProduto extends Apaga {

    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public apagar(): void {
        let todosProdutos = this.produtos.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Digite o nome completo do produto a ser apagado: `)
        let pegarIndexOF = todosProdutos.indexOf(entrada)
        if (pegarIndexOF == -1) {
            console.log(`Produto ${entrada} não encontrado`);
            console.log(`Tente novamente`);
            console.log();
        } else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Deseja deletar o produto? 1 - Sim | 2 - Não `);
                let valor = this.entrada.receberNumero(`Resposta: `)
                switch (valor) {
                    case 1:
                        this.produtos.map(i => {
                            if (entrada === i.nome) {
                                let index = this.produtos.indexOf(i)
                                this.produtos.splice(index, 1)
                            }
                        })
                        console.log(`Produto deletado com sucesso!`);
                        console.log();
                        execucao = false
                        break;
                    case 2:
                        execucao = false
                        console.log(`Operação cancelada!`);
                        console.log();
                        break;
                }
            }
        }
    }
}