import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Lista de Livros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Dados do Livro</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<LivroLista />} />
                <Route path="/dados" element={<LivroDados />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;