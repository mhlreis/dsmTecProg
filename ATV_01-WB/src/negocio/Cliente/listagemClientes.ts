import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1}º Cliente: \n`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RGs':`);
            for(let x = 0; (cliente.getRgs.length)>x; ++x){
                console.log(`${x+1}º RG: ` + cliente.getRgs[x].getValor);
            }
            console.log(`Telefones:`);
            for(let x = 0; (cliente.getTelefones.length)>x; ++x){
                console.log(`${x+1}º Telefone: ` + cliente.getTelefones[x].getValor);
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}