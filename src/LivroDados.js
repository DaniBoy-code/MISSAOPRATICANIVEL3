import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export default function LivroDados() {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n")
        };
        controleLivro.incluir(livro);
        navigate("/");
    };

    return (
        <main className="container">
            <h1>Cadastro de Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo:</label>
                    <textarea
                        className="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora:</label>
                    <select
                        className="form-select"
                        value={codEditora}
                        onChange={tratarCombo}
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores (1 por linha):</label>
                    <textarea
                        className="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Salvar
                </button>
            </form>
        </main>
    );
}