import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import ListaProdutoServico from "./listaProdutoServico";
import ListaConsumo from "./listaConsumo";
import { Cliente } from "../models/cliente";
import { ProdutoServico } from "../models/produtoServico";
import { Consumo } from "../models/consumo";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProdutoServico from "./formularioCadastroProdutoServico";
import FormularioCadastroConsumo from "./formularioCadastroConsumo";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="grey" botoes={['Clientes', 'Produtos e Serviços', 'Consumos']} />
        let listaClientes = this.getClientes();
        let listaProdutosServicos = this.getProdutosServicos();
        let listaConsumos = this.getConsumos();

        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente seletorView={this.selecionarView} titulo="Clientes" tema="grey darken-2" clientes={listaClientes} />
                </>
            )
        } else if (this.state.tela === 'Produtos e Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutoServico seletorView={this.selecionarView} titulo="Produtos/Serviços" tema="grey darken-2" produtosServicos={listaProdutosServicos} />
                </>
            )

        } else if (this.state.tela === 'Consumos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumo seletorView={this.selecionarView} titulo="Consumos" tema="grey darken-2" consumos={listaConsumos} />
                </>
            )
        } else if (this.state.tela === 'Novo Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente titulo="Cadastro de Cliente" tema="grey darken-2" />
                </>
            )

        } else if (this.state.tela === 'Novo Item') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico titulo="Cadastro de Item" tema="grey darken-2" />
                </>
            )

        } else if (this.state.tela === 'Novo Consumo') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroConsumo titulo="Nova Compra" tema="grey darken-2" />
                </>
            )

        } else if (this.state.tela === 'Alteração de Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente titulo="Alteração de Cliente" tema="grey darken-2" />
                </>
            )

        } else if (this.state.tela === 'Alteração de Item') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico titulo="Alteração de Item" tema="grey darken-2" />
                </>
            )

        }

    }

    getClientes(): Cliente[] {
        let listaClientes: Cliente[] = [];
        let clienteA: Cliente = new Cliente();
        let clienteB: Cliente = new Cliente();
        let clienteC: Cliente = new Cliente();
        let clienteD: Cliente = new Cliente();

        clienteA.setNome('Bruce Wayne');
        clienteA.setCpf('123.123.321.12');
        clienteA.setIdade(40);

        clienteB.setNome('Natasha Romanoff');
        clienteB.setCpf('123.123.321.13');
        clienteB.setIdade(30);

        clienteC.setNome('Peter Parker');
        clienteC.setCpf('321.321.321.14');
        clienteC.setIdade(28);

        clienteD.setNome('Jean Grey');
        clienteD.setCpf('321.321.321.15');
        clienteD.setIdade(38);

        listaClientes.push(clienteA);
        listaClientes.push(clienteB);
        listaClientes.push(clienteC)
        listaClientes.push(clienteD);

        return listaClientes;
    }

    getProdutosServicos(): ProdutoServico[] {
        let listaProdutosServicos: ProdutoServico[] = [];
        let itemA: ProdutoServico = new ProdutoServico();
        let itemB: ProdutoServico = new ProdutoServico();
        let itemC: ProdutoServico = new ProdutoServico();
        let itemD: ProdutoServico = new ProdutoServico();

        itemA.setNome('Corte de Cabelo');
        itemA.setPreco(60.00);
        itemA.setTipo('Serviço');

        itemB.setNome('Barba');
        itemB.setPreco(20.00);
        itemB.setTipo('Serviço');

        itemC.setNome('Shampoo');
        itemC.setPreco(65.00);
        itemC.setTipo('Produto');

        itemD.setNome('Condicionador');
        itemD.setPreco(85.00);
        itemD.setTipo('Produto');

        listaProdutosServicos.push(itemA);
        listaProdutosServicos.push(itemB);
        listaProdutosServicos.push(itemC);
        listaProdutosServicos.push(itemD);

        return listaProdutosServicos;
    }

    getConsumos(): Consumo[] {
        let listaConsumos: Consumo[] = [];
        let consumoA: Consumo = new Consumo();
        let consumoB: Consumo = new Consumo();
        let consumoC: Consumo = new Consumo();

        consumoA.setId(1);
        consumoA.setData('01/03/2023');
        consumoA.setTotal(65.00);
        consumoA.setCpfDoCliente('123.123.321.12');
        consumoA.setItemDescricao('Shampoo');

        consumoB.setId(2);
        consumoB.setData('20/05/2023');
        consumoB.setTotal(170.00);
        consumoB.setCpfDoCliente('123.123.321.13');
        consumoB.setItemDescricao('Condicionador');

        consumoC.setId(3);
        consumoC.setData('17/03/2020');
        consumoC.setTotal(40.00);
        consumoC.setCpfDoCliente('321.321.321.14');
        consumoC.setItemDescricao('Barba');

        listaConsumos.push(consumoA);
        listaConsumos.push(consumoB);
        listaConsumos.push(consumoC);

        return listaConsumos;
    }
}