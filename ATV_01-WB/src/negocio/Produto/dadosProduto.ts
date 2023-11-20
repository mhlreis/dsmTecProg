import Produto from "../../modelo/produto";
import Dados from "../dados"

export default class DadosDoProduto extends Dados {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public dados(): void {
        let produtos = [
            "Shampoo Clear",
            "Shampoo OX",
            "Shampoo especializado",
            "Condicionador Match",
            "Condicionador Elseve",
            "Creme Match",
            "Creme Pantene",
            "Mascara de Hidratacao",
            "Sabonete antiacne",
            "Hidratante facial",
            "Sabao em barra", 
            "Sabao liquido",
            "Sabonete para peles oleosas",
            "Escova de dente Colgate",
            "Fio dental",
            "Pente",
            "Enxaguante bucal",
            "Gillete",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lenços",
            "Cotonetes",
            "Protetor solar em spray",
            "Pinça",
            "Tesoura",
            "Esmalte",
            "Capa",
            "Perfume",
            "Cortador para unhas",
            "Lixa",
            "Pincel"
        ]
        let preco = [
            20.00,
            21.00,
            22.00,
            15.00,
            16.00,
            17.00,
            18.00,
            30.00,
            25.00,
            31.00,
            5.00,
            7.00,
            12.00,
            10.00,
            3.00,
            19.00,
            35.00,
            36.00,
            19.00,
            7.00,
            15.00,
            5.00,
            45.00,
            5.00,
            5.00,
            5.00,
            15.00,
            100.00,
            10.00,
            5.00,
            13.00
        ]
        
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}