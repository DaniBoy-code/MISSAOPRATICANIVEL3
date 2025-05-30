import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../../classes/controle/ControleLivro";

const controleLivro = new ControleLivro();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const livro = req.body;
            controleLivro.incluir(livro);
            res.status(200).json({ message: 'Livro adicionado com sucesso' });
        } else {
            res.status(405).json({ message: 'Método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};