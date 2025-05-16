import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/LivroLista" className="nav-link">Lista de Livros</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/LivroDados" className="nav-link">Dados do Livro</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};