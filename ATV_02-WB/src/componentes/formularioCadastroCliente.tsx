import { Component } from "react";

type props = {
    titulo: string,
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let estiloTitulo = `center-align black-text`
        let titulo = `${this.props.titulo}`
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <h5 className={estiloTitulo}>{titulo}</h5>
                <div className="row container">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="idade" type="number" className="validate" />
                                <label htmlFor="idade">Idade</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button onClick={() => this.showToast()} className={estiloBotao} type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    showToast() {
        M.toast({ html: 'Em desenvolvimento!' })
    }
}