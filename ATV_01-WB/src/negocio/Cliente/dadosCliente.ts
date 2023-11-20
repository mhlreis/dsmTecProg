import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Dados from "../dados"

export default class DadosDeCliente extends Dados {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public dados(): void {
        let nome = "Amanda Amaral"
        let nomeSocial = "Amanda"
        let genero = "Feminino"
        let valor = "111.111.111-11";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "11.111.111-1"
        let rg = new RG(valor, date)
        let ddd = "12"
        let numero = "991111111"
        let telefone = new Telefone(ddd, numero)
        let produtos = [
            "Shampoo OX",
            "Condicionador Match",
            "Creme Match"
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        let servico = [
            "Corte de cabelo",
            "Unhas"]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        //--------------------------------------------------------------------------------------------------------------------------------------
        
        nome = "Beatriz Bianca"
        nomeSocial = "Bia"
        genero = "Feminino"
        valor = "222.222.222-22";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "22.222.222-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992222222"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Pente",
            "Lixa",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Progressiva"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Carlos Cruz"
        nomeSocial = "Carlão"
        genero = "Masculino"
        valor = "333.333.333-33";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "33.333.333-3"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "993333333"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Gillete",
            "Shampoo Clear"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Barba"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Douglas Dias"
        nomeSocial = "Doug"
        genero = "Masculino"
        valor = "444.444.444-44";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "44.444.444-4"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "994444444"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Enxaguante bucal",
            "Pente"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo"]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Elton Euller"
        nomeSocial = "Eltinho"
        genero = "Masculino"
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "55.555.555-5"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "995555555"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo Clear",
            "Shampoo OX"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Sobrancelhas"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------
        
        nome = "Fabiana Freitas"
        nomeSocial = "Fabi"
        genero = "Feminino"
        valor = "666.666.666-66";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "66.666.666-6"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "996666666"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Tesoura",
            "Pinça"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Hidratacao",
            "Botox"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Geraldo Guimarães"
        nomeSocial = "Geraldinho"
        genero = "Masculino"
        valor = "777.777.777-77";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "77.777.777-7"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "997777777"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Tesoura",
            "Capa",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Limpeza facial"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Helen Helena"
        nomeSocial = "Helen"
        genero = "Feminino"
        valor = "888.888.888-88";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "88.888.888-8"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "998888888"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Esmalte",
            "Pinça"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Unhas",
            "Sobrancelhas"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Italo Iago"
        nomeSocial = "Italo"
        genero = "Masculino"
        valor = "999.999.999-99";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "99.999.999-9"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "999999999"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Hidratante facial",
            "Tesoura"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Barba"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Jonas Jeremias"
        nomeSocial = "JJ"
        genero = "Masculino"
        valor = "100.100.100-10";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "10.100.100-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991010101"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo Clear",
            "Gillete"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Hidratacao",]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------
        
        nome = "Kaique Karlos"
        nomeSocial = "Kaique"
        genero = "Masculino"
        valor = "110.110.110-11";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "11.110.110-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991111111"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Tesoura",
            "Cotonetes"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Sobrancelhas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Laura Luiza"
        nomeSocial = "Luh"
        genero = "Feminino"
        valor = "120.120.120-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "12.120.120-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991212121"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo OX",
            "Esmalte"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Alongamento de unha",
            "Sobrancelhas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Maria Martins"
        nomeSocial = "Mari"
        genero = "Feminino"
        valor = "130.130.130-13";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "13.130.130-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991313131"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo especializado",
            "Condicionador Elseve"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Hidratacao",
            "Sobrancelha"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Newton Norman"
        nomeSocial = "New"
        genero = "Masculino"
        valor = "140.140.140-14";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "14.140.140-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991414141"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Condicionador Match",
            "Capa"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Sobrancelhas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Olga Oliveira"
        nomeSocial = "Oli"
        genero = "Feminino"
        valor = "150.150.150-15";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "15.150.150-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991515151"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo OX",
            "Esmalte"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Unhas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Paulo Porto"
        nomeSocial = "Paulão"
        genero = "Masculino"
        valor = "160.160.160-16";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "16.160.160-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991616161"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo Clear",
            "Sabao liquido",
            "Perfume",
            "Tesoura",
            "Fio Dental"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Hidratacao",
            "Sobrancelha",
            "Corte de cabelo",
            "Barba"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Ramon Reis"
        nomeSocial = "Reis"
        genero = "Masculino"
        valor = "170.170.170-17";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "17.170.170-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991717171"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo Clear",
            "Sabao em barra", 
            "Sabao liquido"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Sobrancelhas", 
            "Barba"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Sabrina Santos"
        nomeSocial = "Sasá"
        genero = "Feminino"
        valor = "180.180.180-18";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "18.180.180-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991818181"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Sabao liquido",
            "Lenços"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Lavagem  de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Tom Timoteo"
        nomeSocial = "Tim"
        genero = "Masculino"
        valor = "190.190.190-19";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "19.190.190-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "991919191"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo Ox",
            "Sabonete antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Corte de cabelo",
            "Barba"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Valentina Valente"
        nomeSocial = "Val"
        genero = "Feminino"
        valor = "200.200.200-20";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "20.200.200-1"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992020202"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo Clear",
            "Perfume"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Lavagem de cabelo",
            "Penteado"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Juliana Jardim"
        nomeSocial = "Juju"
        genero = "Feminino"
        valor = "210.210.210-21";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "21.210.210-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992121212"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Escova de dente Colgate",
            "Fio dental"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------
        
        nome = "Carla Cesar"
        nomeSocial = "Carla"
        genero = "Feminino"
        valor = "220.220.220-2";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "22.220.220-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992222222"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Cortador para unhas",
            "Pente"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Lara Lorena"
        nomeSocial = "Lola"
        genero = "Feminino"
        valor = "230.230.230-23";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "23.230.230-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992323232"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Enxaguante bucal",
            "Gillete"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Marcos Medeiros"
        nomeSocial = "Marcão"
        genero = "Masculino"
        valor = "240.240.240-24";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "24.240.240-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992424242"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Creme de barbear",
            "Desodorante Old Spice"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Niceia Nantes"
        nomeSocial = "Ni"
        genero = "Feminino"
        valor = "250.250.250-25";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "25.250.250-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992525252"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Lixa",
            "Lenços",
            "Sabonete para peles oleosas"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Otavio Oliveira"
        nomeSocial = "Oli"
        genero = "Masculino"
        valor = "260.260.260-26";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "26.260.260-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992626262"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Cotonetes",
            "Protetor solar em spray",
            "Sabonete antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Paula Portes"
        nomeSocial = "Paulinha"
        genero = "Feminino"
        valor = "270.270.270-27";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "27.270.270-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992727272"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Creme Pantene",
            "Sabonete antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Venda de produtos"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Renata Raissa"
        nomeSocial = "Renatinha"
        genero = "Feminino"
        valor = "280.280.280-28";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "28.280.280-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992828282"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Hidratante facial"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Limpeza facial"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Gabriela Gomes"
        nomeSocial = "Gabi"
        genero = "Feminino"
        valor = "290.290.290-29";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "29.290.290-2"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "992929292"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Lenços",
            "Lixa",
            "Pincel"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Remoção de manchas na pele",
            "Botox"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------

        nome = "Bruce Wayne"
        nomeSocial = "Batman"
        genero = "Masculino"
        valor = "300.300.300-30";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        valor = "30.300.300-3"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "993030303"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo especializado",
            "Gillete",
            "Creme de barbear",
            "Pinça",
            "Capa",
            "Perfume",
            "Pincel",
            "Sabao Liquido",
            "Creme Match",
            "Sabao liquido",
            "Sabonete para peles oleosas",
            "Escova de dente Colgate",
            "Fio dental",
            "Pente"

        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Tratamento anti-quedas dos fios",
            "Remoção de rugas",
            "Corte de cabelo",
            "Unhas",
            "Progressiva",
            "Sobrancelhas",
            "Hidratacao",
            "Barba",
            "Alongamento de unha",
            "Lavagem  de cabelo",
            "Penteado",
            "Venda de produtos",
            "Limpeza facial",
            "Remoção de manchas na pele",
            "Botox"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        
        //--------------------------------------------------------------------------------------------------------------------------------------
    }    
}