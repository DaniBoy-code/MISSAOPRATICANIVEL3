import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../components/Menu';
import { LinhaLivro } from '../components/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";

export default function LivroLista() {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const obterLivros = async () => {
        const resposta = await fetch(baseURL);
        const dados = await resposta.json();
        setLivros(dados);
    };

    const excluirLivro = async (codigo: number) => {
        const resposta = await fetch(`${baseURL}/${codigo}`, {
            method: 'DELETE'
        });
        return resposta.ok;
    };

    useEffect(() => {
        obterLivros().then(() => setCarregado(true));
    }, [carregado]);

    const excluir = async (codigo: number) => {
        await excluirLivro(codigo);
        setCarregado(false);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Lista de Livros</title>
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1>Lista de Livros</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro
                                key={livro.codigo}
                                livro={livro}
                                excluir={() => excluir(livro.codigo)}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}