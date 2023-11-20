import { URI } from "../enuns/uri"
import Atualizador from "./atualizador"

class AtualizadorCliente implements Atualizador {
    atualizar(objeto: Object): void {
        fetch(URI.ATUALIZAR_CLIENTE, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }

    adicionarValoresConsumidos(consumo: any): void {
        fetch(URI.CLIENTE_ADICIONAR_VALORES_CONSUMIDOS, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consumo)
        })
    }

    subtrairValoresConsumidos(consumo: any): void {
        fetch(`${URI.CLIENTE_SUBTRAIR_VALORES_CONSUMIDOS}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consumo)
        })
    }

}
export default AtualizadorCliente