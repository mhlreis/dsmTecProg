import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Apaga from "../apaga";

export default class ApagaServico extends Apaga {

    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    public apagar(): void {
        let todosServicos = this.servicos.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Digite o nome completo do serviço a ser apagado: `)
        let pegarIndexOF = todosServicos.indexOf(entrada)
        if (pegarIndexOF == -1) {
            console.log(`Serviço ${entrada} não encontrado`);
            console.log(`Tente novamente`);
            console.log();
        } else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Deseja deletar o serviço? 1 - Sim | 2 - Não `);
                let valor = this.entrada.receberNumero(`Resposta: `)
                switch (valor) {
                    case 1:
                        this.servicos.map(i => {
                            if (entrada === i.nome) {
                                let index = this.servicos.indexOf(i)
                                this.servicos.splice(index, 1)
                            }
                        })
                        console.log(`Serviço deletado com sucesso!`);
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