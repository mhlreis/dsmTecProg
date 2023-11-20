/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Cliente } from "../models/cliente";

type props = {
    titulo: string,
    tema: string,
    clientes: Cliente[],
    seletorView: Function
}

type state = {      
    tela: string    
}    


export default class ListaCliente extends Component<props, state> {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        let estiloTitulo = `center-align black-text`
        let estiloBotoesAcao = `btn-floating btn-small waves-effect waves-light btn tooltipped`
        let estiloBotaoNovo = `btn waves-effect waves-light ${this.props.tema}`
        let estiloBotaoEditar = `${estiloBotoesAcao} light-blue`
        let estiloBotaoDeletar = `${estiloBotoesAcao} red`
        let titulo = `${this.props.titulo}`
        return (
            <>
                <h5 className={estiloTitulo}>{titulo}</h5>

                <div className="row container">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">search</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label htmlFor="icon_prefix">Busca</label>
                    </div>
                    <div className="input-field col s6">
                        <select defaultValue="0">
                            <option value="0" disabled> Listagem dos Clientes: </option>
                            <option value="1">- Todos os clientes por gênero</option>
                            <option value="2">- 10 clientes que mais consumiram, em quantidade</option>
                            <option value="3">- 5 clientes que mais consumiram, em valor</option>
                            <option value="4">- 10 clientes que menos consumiram, em valor</option>
                        </select>
                    </div>
                </div>

                <table className="highlight centered responsive-table container striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Idade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.clientes.map((cliente, i) => (
                            <tr>
                                <td>{cliente.getNome()}</td>
                                <td>{cliente.getCpf()}</td>
                                <td>{cliente.getIdade()}</td>
                                <td>
                                    <a className={estiloBotaoEditar} style={{marginRight: "2px"}} href="#!"  onClick={(e) => this.props.seletorView('Alteração de Cliente', e)} data-position="left" data-tooltip="Alterar">
                                        <i className="material-icons">edit</i>
                                    </a>
                                    <a className={estiloBotaoDeletar} href="#!"  onClick={() => this.showToast()} data-position="right" data-tooltip="Deletar">
                                        <i className="material-icons">delete</i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button onClick={(e) => this.props.seletorView('Novo Cliente', e)} className={estiloBotaoNovo} style={{margin: "50px"}} type="submit" name="action">Novo
                    <i className="material-icons right">add</i>
                </button>
            </>
        )
    }

    showToast() {
        M.toast({ html: ' Em desenvolvimento! ' })
    }
}