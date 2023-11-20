import Servico from "../../modelo/servico";
import Dados from "../dados"

export default class DadosDoServico extends Dados {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public dados(): void {
        let servicos = [
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
            "Botox",
            "Tratamento anti-quedas dos fios",
            "Remoção de rugas"
        ]
        let preco = [
            40.00,
            35.00,
            100.00,
            30.00,
            50.00,
            15.00,
            120.00,
            20.00,
            25.00,
            1.00,
            50.00,
            70.00,
            140.00,
            23.00,
            10.00
        ]
        
        let sliceServicos = servicos.slice();
        let sliceServicosPreco = preco.slice()
        for (let index = 0; index < sliceServicos.length; index++) {
            let adicionandoServicos = new Servico(sliceServicos[index], sliceServicosPreco[index])
            this.servicos.push(adicionandoServicos)
        }
    }
}