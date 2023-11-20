import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Atualiza from "../atualiza";

export default class AtualizaCliente extends Atualiza {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public atualizar(): void {
        let todos_clientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Digite o nome completo do cliente a ser atualizado: `)
        let pegar_indexOF = todos_clientes.indexOf(entrada)
        let loop = true
        if (pegar_indexOF == -1) {
            console.log(`Cliente ${entrada} não encontrado`);
            console.log(`Tente novamente`);
            console.log();
        } else {
            this.clientes.map(i => {
                while (loop) {
                    console.log("Escolha o que deseja atualizar");
                    console.log("1 - Nome");
                    console.log("2 - Nome social");
                    console.log("3 - CPF");
                    console.log("4 - RG");
                    console.log("5 - Telefone");
                    console.log("0 - Sair");
                    console.log();
                    let entradaOption = this.entrada.receberNumero("Numero escolhido: ")
                    switch (entradaOption) {
                        case 1:
                            let novoNome = this.entrada.receberTexto("Digite o novo nome: ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.nome = novoNome)
                            loop = false
                            console.log("Nome atualizado!");
                            console.log();
                            break
                        case 2:
                            let novoNomeSocial = this.entrada.receberTexto("Digite o novo nome: ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.nomeSocial = novoNomeSocial)
                            console.log("Nome social atualizado!");
                            console.log();
                            break
                        case 3:
                            let cpfLoop = true
                            while (cpfLoop) {
                                console.log("1 - CPF");
                                console.log("2 - Data de emissao");
                                console.log("0 - Sair");
                                let receberCPF = this.entrada.receberNumero("Digite a opção: ")
                                switch (receberCPF) {
                                    case 1:
                                        let novoCPF = this.entrada.receberTexto("Digite o novo CPF: ")
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getCpf.setValor = novoCPF)
                                        break
                                    case 2:
                                        let novaData = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                                        let partesData = novaData.split('/')
                                        let ano = new Number(partesData[2].valueOf()).valueOf()
                                        let mes = new Number(partesData[1].valueOf()).valueOf()
                                        let dia = new Number(partesData[0].valueOf()).valueOf()
                                        let dataEmissao = new Date(ano, mes, dia)
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getCpf.setDataEmissao = dataEmissao)
                                        break
                                    case 0:
                                        cpfLoop = false
                                        break
                                    default:
                                        console.log("Valor não encontrado!");
                                }
                            }
                            break
                        case 4:
                            let rgLoop = true
                            console.log("RGS existente: ");
                            i.getRgs.map((i, index) => {
                                console.log(`Indice ${index} - ${i.getValor} - ${i.getDataEmissao.toLocaleDateString()}`);
                                console.log();
                                while (rgLoop) {
                                    console.log("1 - RG");
                                    console.log("2 - Data de emissao");
                                    console.log("0 - Sair");
                                    let rgEntrada = this.entrada.receberNumero("Digite a opção: ")
                                    switch (rgEntrada) {
                                        case 1:
                                            let rgLoopEscolhido = true
                                            while (rgLoopEscolhido) {
                                                console.log("1 - RG");
                                                let rgEntrada = this.entrada.receberNumero("Escolha o RG pelo indice: ")
                                                switch (rgEntrada) {
                                                    case index:
                                                        let novoRG = this.entrada.receberTexto("Digite o novo RG: ")
                                                        this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getRgs[rgEntrada].setValor = novoRG)
                                                        break
                                                    case -1:
                                                        rgLoopEscolhido = false
                                                        break
                                                    default:
                                                        console.log("Valor não encontrado!");
                                                }
                                            }
                                            break
                                        case 2:
                                            let rgLoopData = true
                                            while (rgLoopData) {
                                                console.log("2 - Data de emissao");
                                                let rgEntrada = this.entrada.receberNumero("Escolha o RG pelo indice: ")
                                                switch (rgEntrada) {
                                                    case index:
                                                        let novaData = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                                                        let partesData = novaData.split('/')
                                                        let ano = new Number(partesData[2].valueOf()).valueOf()
                                                        let mes = new Number(partesData[1].valueOf()).valueOf()
                                                        let dia = new Number(partesData[0].valueOf()).valueOf()
                                                        let dataEmissao = new Date(ano, mes, dia)
                                                        this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getRgs[rgEntrada].setDataEmissao = dataEmissao)
                                                        break
                                                    case -1:
                                                        rgLoopData = false
                                                        break
                                                    default:
                                                        console.log("Valor não encontrado!");
                                                }
                                            }
                                            break
                                        case 0:
                                            rgLoop = false
                                            break
                                        default:
                                            console.log("Valor não encontrado!");
                                    }
                                }
                            })
                            break
                        case 5:
                            console.log("Telefones existente: ");
                            i.getTelefones.map((i, index) => {
                                console.log(`Indice ${index} - ${i.getDdd} ${i.getNumero}`);
                                let telefone = true
                                while (telefone) {
                                    let indices = this.entrada.receberNumero("Digite o indice do Telefone: ")
                                    switch (indices) {
                                        case index:
                                            let tell = this.entrada.receberTexto(`Por favor digite o numero do telefone no padrão DDD NUMERO: `);
                                            let partesTell = tell.split(' ')
                                            let ddd = new String(partesTell[0].valueOf()).valueOf()
                                            let numero = new String(partesTell[1].valueOf()).valueOf()
                                            this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getTelefones[indices].setDdd = ddd)
                                            this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getTelefones[indices].setNumero = numero)
                                            break
                                        case -1:
                                            telefone = false
                                            break
                                        default:
                                            console.log("Valor não encontrado!");
                                    }
                                }
                            })
                            break
                        case 0:
                            loop = false
                            break
                        default:
                            console.log("Comando não encontrado!");
                    }
                }
            })
        }
    }
}