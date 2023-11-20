export enum URI {
    BUSCAR_CLIENTES = 'http://localhost:32832/clientes',
    BUSCAR_CLIENTE_PELO_ID = 'http://localhost:32832/cliente',
    DELETAR_CLIENTE = 'http://localhost:32832/cliente/excluir',
    CADASTRAR_CLIENTE = 'http://localhost:32832/cliente/cadastrar',
    ATUALIZAR_CLIENTE = 'http://localhost:32832/cliente/atualizar',
    CLIENTE_ADICIONAR_VALORES_CONSUMIDOS = 'http://localhost:32832/cliente/adicionar-valores-consumidos',
    CLIENTE_SUBTRAIR_VALORES_CONSUMIDOS = 'http://localhost:32832/cliente/subtrair-valores-consumidos',
    BUSCAR_ITENS = 'http://localhost:32832/itens',
    BUSCAR_ITEM_PELO_ID = 'http://localhost:32832/item',
    DELETAR_ITEM = 'http://localhost:32832/item/excluir',
    CADASTRAR_ITEM = 'http://localhost:32832/item/cadastrar',
    ATUALIZAR_ITEM = 'http://localhost:32832/item/atualizar',
    ITEM_ADICIONAR_QTD_CONSUMIDA = 'http://localhost:32832/item/adicionar-qtd-consumida',
    ITEM_SUBTRAIR_QTD_CONSUMIDA = 'http://localhost:32832/item/subtrair-qtd-consumida',
    BUSCAR_CONSUMOS = 'http://localhost:32832/consumos',
    BUSCAR_CONSUMO_PELO_ID = 'http://localhost:32832/consumo',
    DELETAR_CONSUMO = 'http://localhost:32832/consumo/excluir',
    CADASTRAR_CONSUMO = 'http://localhost:32832/consumo/cadastrar',
}