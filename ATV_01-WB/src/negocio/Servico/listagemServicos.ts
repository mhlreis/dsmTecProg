import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nListagem dos Serviço: \n`)
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1}º Serviço: \n` + servico.nome + `\nR$` + servico.preco);
            console.log(`-----------------------------`);
        })
    }
}