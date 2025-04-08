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

}

export default new NotaController();
