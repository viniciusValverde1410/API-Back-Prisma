import notaModel from "../models/notaModel.js";
class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Não foi possível obter as notas" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params
    
    try {
      const nota = await notaModel.getById(parseInt(id));

      if (!nota) {
        return res.status(404).json({ erro: "Nota não encontrada!" })
      }
      res.json(nota)
    } catch (error){
      console.log(error);
      res.status(500).json({ erro: "Erro ao buscar nota"})
    }
  }

  create = async (req, res) => {
    const { titulo, conteudo, cor } = req.body;
    try {
      if (!titulo) {
        return res.status(400).json({ erro: "Insira um título para a nota" });
      } else if(!conteudo){
        return res.status(400).json({ erro: "Insira um conteúdo válido para a nota"})
      }
      const novaNota = notaModel.create(titulo, conteudo, cor);
      res.status(201).json(novaNota);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao criar nota." })
    }
  };

  update = async (req, res) => {
    const { id } = req.params
    const { titulo, conteudo, cor } = req.body;

    try {
      const notaAtualizada = await notaModel.update(Number(id), titulo, conteudo, cor);

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada!" })
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao atualizar nota" })
    }
  };

  delete = async (req, res) => {
    const { id } = req.params

    try {
      const sucesso = await notaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Nota não encontrada!" })
      }

      res.status(200).send({ message: "Nota deletada com sucesso"})
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao deletar nota" })
    }
  };

}

export default new NotaController();
