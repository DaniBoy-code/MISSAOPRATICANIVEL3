import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from "./index";

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            const codigo = Number(req.query.codigo);
            controleLivro.excluir(codigo);
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } else {
            res.status(405).json({ message: 'Método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};