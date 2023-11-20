import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Apaga from "../apaga";

export default class ApagaCliente extends Apaga {

    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public apagar(): void {
        let todosClientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Digite o nome completo do cliente a ser apagado: `)
        let pegarIndexOF = todosClientes.indexOf(entrada)
        if (pegarIndexOF == -1) {
            console.log(`Cliente ${entrada} não encontrado`);
            console.log(`Tente novamente`);
            console.log();
        } else {
            let execucao = true
            while (execucao) {
                console.log();
                console.log(`Deseja deletar o cliente? 1 - Sim | 2 - Não `);
                let valor = this.entrada.receberNumero(`Resposta: `)
                switch (valor) {
                    case 1:
                        this.clientes.map(i => {
                            if (entrada === i.nome) {
                                let index = this.clientes.indexOf(i)
                                this.clientes.splice(index, 1)
                            }
                        })
                        console.log(`Cliente deletado com sucesso!`);
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