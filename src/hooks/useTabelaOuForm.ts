import { useState } from "react";

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState('tabela');

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('formulario')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    }
}