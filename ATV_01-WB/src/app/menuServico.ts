import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import ApagaCliente from "../negocio/Cliente/apagaCliente";
import AtualizaCliente from "../negocio/Cliente/atualizaCliente";
import DadosDeCliente from "../negocio/Cliente/dadosCliente";

import CadastroProduto from "../negocio/Produto/cadastroProduto";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";
import ApagaProduto from "../negocio/Produto/apagaProduto";
import AtualizaProduto from "../negocio/Produto/atualizaProduto";
import DadosDoProduto from "../negocio/Produto/dadosProduto";

import CadastroServico from "../negocio/Servico/cadastroServico";
import ListagemServicos from "../negocio/Servico/listagemServicos";
import ApagaServico from "../negocio/Servico/apagaServico";
import AtualizaServico from "../negocio/Servico/atualizaServico";
import DadosDoServico from "../negocio/Servico/dadosServico";

import DezMais from "../negocio/listagens/lista10mais";
import Genero from "../negocio/listagens/listaGenero";
import GeralConsumido from "../negocio/listagens/listaGeralConsumido";
import ConsumidoGenero from "../negocio/listagens/listaConsumidoGenero"
import DezMenos from "../negocio/listagens/lista10menos";
import Valor from "../negocio/listagens/lista5valor";
import Listagem from "../negocio/listagem";

export default class MenuServico extends Listagem{
    private empresa:Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuServ(empresa: Empresa){

        
        let execucao = true
       

        let dadosClientes = new DadosDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            dadosClientes.dados();
        let dadosProdutos = new DadosDoProduto(empresa.getProdutos)
            dadosProdutos.dados();
        let dadosServicos = new DadosDoServico(empresa.getServicos)
            dadosServicos.dados();

        console.log(`Bem-vindo ao Menu do Serviço \n`)
        

        while(execucao){
            console.log(" - Serviços: \n");
            console.log(`1 -> Cadastrar serviço`);
            console.log(`2 -> Listar todos os serviços`);
            console.log(`3 -> Atualizar Dados do Serviço`);
            console.log(`4 -> Excluir Serviço `);
            console.log(`0 -> Voltar para o Menu Principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServico = new ListagemServicos(empresa.getServicos)
                    listagemServico.listar()
                    break;
                case 3:
                    let atualizaServico = new AtualizaServico(empresa.getServicos)
                    atualizaServico.atualizar()
                    break;
                case 4:
                    let apagaServico = new ApagaServico(empresa.getServicos)
                    apagaServico.apagar()
                    break;
                case 0:
                    return
                default:
                    console.log(`\n _Operação não entendida_ \n`)
            }
        }
    }

    public listar(): void {
        this.menuServ(this.empresa)
    }
}
