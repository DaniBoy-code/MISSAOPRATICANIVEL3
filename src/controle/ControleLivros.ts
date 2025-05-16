import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
    new Livro(1, 1, "Use a Cabeça: Java", "Aprenda Java de forma divertida", ["Bert Bates", "Kathy Sierra"]),
    new Livro(2, 2, "Clean Code", "Como escrever código limpo", ["Robert C. Martin"]),
    new Livro(3, 3, "Design Patterns", "Padrões de projeto em OO", ["Erich Gamma", "Richard Helm"]),
];

export class ControleLivro {
    obterLivros(): Livro[] {
        return livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index >= 0) {
            livros.splice(index, 1);
        }
    }
}