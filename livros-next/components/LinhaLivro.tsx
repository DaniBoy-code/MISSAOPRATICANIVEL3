import React from "react";
import { Livro } from "../classes/modelo/Livro";
import { ControleEditora } from "../classes/controle/ControleEditora";

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

const controleEditora = new ControleEditora();

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <tr>
            <td>{props.livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>{props.livro.resumo}</td>
            <td>
                <ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>
                <button className="btn btn-danger" onClick={props.excluir}>
                    Excluir
                </button>
            </td>
        </tr>
    );
};