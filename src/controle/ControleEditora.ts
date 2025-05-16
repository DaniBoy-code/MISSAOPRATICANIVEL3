import { Editora } from "../modelo/Editora";

const editoras: Editora[] = [
    new Editora(1, "Alta Books"),
    new Editora(2, "Pearson"),
    new Editora(3, "Addison Wesley"),
];

export class ControleEditora {
    getEditoras(): Editora[] {
        return editoras;
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.filter(e => e.codEditora === codEditora);
        return editora[0]?.nome || "";
    }
}