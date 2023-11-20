import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe seu gênero: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf);
        
        

        valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        partesData = data.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()
        dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao);
        var rgs = new Array;
        cliente.getRgs.push(rg);

        /* let novoRg = this.entrada.receberTexto(`Deseja informar outro rg? 1-Sim ou 2-Nao `);
        while (novoRg == '1') {
            valor = this.entrada.receberTexto(`Por favor informe o número do rg: `);
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
            partesData = data.split('/')
            ano = new Number(partesData[2].valueOf()).valueOf()
            mes = new Number(partesData[1].valueOf()).valueOf()
            dia = new Number(partesData[0].valueOf()).valueOf()
            dataEmissao = new Date(ano, mes, dia)
            rg = new RG(valor, dataEmissao);
            cliente.getRgs.push(rg);
            novoRg = this.entrada.receberTexto(`Deseja informar outro rg? 1-Sim ou 2-Nao `);
        } */

        let tel = this.entrada.receberTexto(`Por favor informe o número do telefone, no padrão DDD NUMEROS: `)
        let partesTel = tel.split(' ')
        let ddd = new String(partesTel[0].valueOf()).valueOf()
        let num = new String(partesTel[1].valueOf()).valueOf()
        let telefone = new Telefone(ddd, num)
        cliente.getTelefones.push(telefone);
        /* let novoTel = this.entrada.receberTexto(`Deseja informar outro telefone? 1-Sim ou 2-Nao `);
        while (novoTel == '1') {
            tel = this.entrada.receberTexto(`Por favor informe o número do telefone, no padrão DDD NUMEROS: `)
            partesTel = tel.split(' ')
            ddd = new String(partesTel[0].valueOf()).valueOf()
            num = new String(partesTel[1].valueOf()).valueOf()
            telefone = new Telefone(ddd, num)
            cliente.getTelefones.push(telefone);
            novoTel = this.entrada.receberTexto(`Deseja informar outro telefone? 1-Sim ou 2-Nao `); 
         } */
       


        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}