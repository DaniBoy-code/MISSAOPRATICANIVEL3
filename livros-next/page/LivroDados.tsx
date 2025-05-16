import React, { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../components/Menu';
import { useRouter } from 'next/router';
import { ControleEditora } from '../classes/controle/ControleEditora';
import styles from '../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";
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
    const router = useRouter();

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluirLivro = async (livro: any) => {
        const resposta = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        });
        return resposta.ok;
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split("\n")
        };
        await incluirLivro(livro);
        router.push("/LivroLista");
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Cadastro de Livro</title>
            </Head>
            <Menu />
            <main className={styles.main}>
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
        </div>
    );
}