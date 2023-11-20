import Entrada from "../../io/entrada";
import Cadastro from "../cadastro";
import Servico from "../../modelo/servico";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        
        let servico = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let nomes = this.servicos.map(i => (i.nome))
        if (nomes.includes(servico)) {
            console.log(`${servico} já cadastrado \n`);
        } else {
            let preco = this.entrada.receberNumero(`Digite o preço do serviço: R$`)
            let cadastrar = new Servico(servico, preco);
            this.servicos.push(cadastrar);
            console.log();
        }
    }
    
}