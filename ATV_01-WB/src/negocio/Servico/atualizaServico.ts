import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualiza from "../atualiza";

export default class AtualizaServico extends Atualiza {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada();
    }
    public atualizar(): void {
       
        let entrada = this.entrada.receberTexto(`Digite o nome completo do serviço a ser alterado: `)
        let todosServicos = this.servicos.map(i => i.nome)
        let indexServicos = todosServicos.indexOf(entrada)

        if (indexServicos == -1) {
            console.log(`Serviço ${entrada} não encontrado`);
            console.log(`Tente novamente`);
            console.log();
        } else {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do serviço: R$`)
            this.servicos.filter(produto => produto.nome == entrada).map(i => i.preco = novoPreco).toString()
            this.servicos.filter(produto => produto.nome == entrada).map(i => i.nome = novoNome ).toString()
            console.log(`Servico alterado com sucesso!`);
            console.log();
        }
    }
}