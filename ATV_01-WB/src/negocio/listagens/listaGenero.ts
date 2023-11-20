import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class Genero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nFeminino:`);
        this.clientes.filter(m => m.genero == 'Feminino').map(cliente => console.log(`Nome: ${cliente.nome}`)).toString()
        console.log(`\nMasculino:`);
        this.clientes.filter(m => m.genero == 'Masculino').map(cliente => console.log(`Nome: ${cliente.nome}`)).toString()
        console.log();
    }

}