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

export default class MenuPedido extends Listagem{
    private empresa: Empresa

    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    menuPedido(empresa: Empresa){
        
        let execucao = true
       

        let dadosClientes = new DadosDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            dadosClientes.dados();
        let dadosProdutos = new DadosDoProduto(empresa.getProdutos)
            dadosProdutos.dados();
        let dadosServicos = new DadosDoServico(empresa.getServicos)
            dadosServicos.dados();
        
        
        console.log(`Bem-vindo ao Menu do Pedido \n`);
        

        while(execucao){
            console.log(" - Pedidos: \n");
            console.log(`1 -> 10 clientes que mais consumiram em quantidade`);
            console.log(`2 -> Todos os clientes por gênero.`);
            console.log(`3 -> Geral dos serviços ou produtos mais consumidos.`);
            console.log(`4 -> Serviços ou produtos mais consumidos por gênero.`);
            console.log(`5 -> 10 clientes que menos consumiram produtos ou serviços.`);
            console.log(`6 -> 5 clientes que mais consumiram em valor.`);
            console.log(`0 -> Voltar para o Menu Principal \n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let dezMais = new DezMais(empresa.getClientes)
                    dezMais.listar()
                    break;
                case 2:
                    let generoLista = new Genero(empresa.getClientes)
                    generoLista.listar()
                    break;
                case 3:
                    let geralConsumido = new GeralConsumido(empresa.getClientes)
                    geralConsumido.listar()
                    break;
                case 4:
                    let consumidoGenero = new ConsumidoGenero(empresa.getClientes)
                    consumidoGenero.listar()
                    break;
                case 5:
                    let dezMenos = new DezMenos(empresa.getClientes)
                    dezMenos.listar()
                    break;
                case 6:
                    let cincoValor = new Valor(empresa.getClientes)
                    cincoValor.listar()
                    break;
            break;
                case 0:
                    return
                default:
                    console.log(`\n _Operação não entendida_ `)
            }
        }
    }

    public listar(): void {
        this.menuPedido(this.empresa)
    }
}
