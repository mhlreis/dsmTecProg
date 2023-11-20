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
import MenuCliente from "./menuCliente";
import MenuProduto from "./menuProduto";
import MenuServico from "./menuServico";
import MenuPedido from "./menuPedidos";

console.log(`_Bem-vindo ao cadastro de clientes do Grupo World Beauty_ \n`)

let empresa = new Empresa()
let execucao = true
       

let dadosClientes = new DadosDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
    dadosClientes.dados();
let dadosProdutos = new DadosDoProduto(empresa.getProdutos)
    dadosProdutos.dados();
let dadosServicos = new DadosDoServico(empresa.getServicos)
    dadosServicos.dados();


while (execucao) {
    console.log(`_Opções:_ \n`);
    console.log(`1 -> Cliente.`);
    console.log(`2 -> Produto.`);
    console.log(`3 -> Serviço.`);
    console.log(`4 -> Pedidos.`);
    console.log(`0 -> _Sair_ \n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let testeCliente = new MenuCliente(empresa)
            testeCliente.listar()
            break;

        case 2:
            let testeProduto = new MenuProduto(empresa)
            testeProduto.listar()
            break;

        case 3:
            let testeServico = new MenuServico(empresa)
            testeServico.listar()
            break;
        case 4:
            let testePedido = new MenuPedido(empresa)
            testePedido.listar()
            break;

        case 0:
            execucao = false
            console.log(`Até mais! \n`)
            break;
        default:
            console.log(`_Operação não entendida_`)
    }
}