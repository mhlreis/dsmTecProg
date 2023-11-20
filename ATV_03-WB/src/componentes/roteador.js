import { useState, useEffect } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProdutoServico from "./formularioCadastroProdutoServico";
import ListaClientes from "./listaClientes";
import ListaProdutosServicos from "./listaProdutosServicos";
import ListaConsumos from "./listaConsumos";
import NovoConsumo from "./novoConsumo";


export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const [clientes, setClientes] = useState([])
    const [produtosServicos, setItens] = useState([])
    const [consumos, setConsumos] = useState([])

    useEffect(() => {
        getClientes();
        getProdutosServicos();
        getConsumos();
    }, []);

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const getClientes = () => {
        let listaClientes = [];
        let clienteA = [];
        let clienteB = [];
        let clienteC = [];
        let clienteD = [];

        clienteA.nome = 'Bruce Wayne';
        clienteA.cpf = '123.123.321.12';
        clienteA.idade = 40;

        clienteB.nome = 'Natasha Romanoff';
        clienteB.cpf = '123.123.321.13';
        clienteB.idade = 30;

        clienteC.nome = 'Peter Parker';
        clienteC.cpf = '321.321.321.14';
        clienteC.idade = 28;

        clienteD.nome = 'Jean Grey';
        clienteD.cpf = '321.321.321.15';
        clienteD.idade = 38;



        listaClientes.push(clienteA);
        listaClientes.push(clienteB);
        listaClientes.push(clienteC);
        listaClientes.push(clienteD);

        setClientes(listaClientes);
    }

    const getProdutosServicos = () => {
        let listaProdutosServicos = [];
        let itemA = [];
        let itemB = [];
        let itemC = [];
        let itemD = [];

        itemA.nome = 'Corte de Cabelo';
        itemA.preco = 60.00;
        itemA.tipo = 'Serviço';

        itemB.nome = 'Barba';
        itemB.preco = 20.00;
        itemB.tipo = 'Serviço';

        itemC.nome = 'Shampoo';
        itemC.preco = 65.00;
        itemC.tipo = 'Produto';

        itemD.nome = 'Condicionador';
        itemD.preco = 85.00;
        itemD.tipo = 'Produto';

        listaProdutosServicos.push(itemA);
        listaProdutosServicos.push(itemB);
        listaProdutosServicos.push(itemC);
        listaProdutosServicos.push(itemD);

        setItens(listaProdutosServicos);
    }

    const getConsumos = () => {
        let listaConsumos = [];
        let consumoA = [];
        let consumoB = [];
        let consumoC = [];

        consumoA.id = 1;
        consumoA.data = '01/08/2020';
        consumoA.total = 35.00;
        consumoA.cpfDoCliente = '123.123.321-12';
        consumoA.itemDescricao = 'Shampoo';

        consumoB.id = 2;
        consumoB.data = '16/09/2020';
        consumoB.total = 170.00;
        consumoB.cpfDoCliente = '123.123.321-13';
        consumoB.itemDescricao = 'Condicionador';

        consumoC.id = 3;
        consumoC.data = '17/12/2020';
        consumoC.total = 400.00;
        consumoC.cpfDoCliente = '321.321.321-14';
        consumoC.itemDescricao = 'Barba';

        listaConsumos.push(consumoA);
        listaConsumos.push(consumoB);
        listaConsumos.push(consumoC);

        setConsumos(listaConsumos);
    }

    const construirView = () => {

        let barraNavegacao = <BarraNavegacao seletorView={seletorView} tema="grey" botoes={['Clientes', 'Produtos e Serviços', 'Consumos']} />
        let listaClientes = clientes;
        let listaProdutosServicos = produtosServicos;
        let listaConsumos = consumos;

        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes seletorView={seletorView} titulo="Clientes" tema="grey darken-2" clientes={listaClientes} />
                </>
            )
        } else if (tela === 'Produtos e Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutosServicos seletorView={seletorView} titulo="Produtos e Serviços" tema="grey darken-2" produtosServicos={listaProdutosServicos} />
                </>
            )

        } else if (tela === 'Consumos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumos seletorView={seletorView} titulo="Consumos" tema="grey darken-2" consumos={listaConsumos} />
                </>
            )
        } else if (tela === 'Novo Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente titulo="Cadastro de Cliente" tema="grey darken-2" />
                </>
            )

        } else if (tela === 'Novo Item') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico titulo="Cadastro de Item" tema="grey darken-2" />
                </>
            )

        } else if (tela === 'Novo Consumo') {
            return (
                <>
                    {barraNavegacao}
                    <NovoConsumo titulo="Nova Compra" tema="grey darken-2" />
                </>
            )

        } else if (tela === 'Alteração de Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente titulo="Alteração de Cliente" tema="grey darken-2" />
                </>
            )

        } else if (tela === 'Alteração de Item') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico titulo="Alteração de Item" tema="grey darken-2" />
                </>
            )

        }
    }
    

    return (
        construirView()
    )
}