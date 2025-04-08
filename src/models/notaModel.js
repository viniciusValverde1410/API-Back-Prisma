import prisma from '../../prisma/client.js'

class NotaModel {
  // fução async - espera algo acontecer
  getAll = async () => {
    return await prisma.nota.findMany()
  };

  getById = async (id) => {
    return await prisma.nota.findMany({
      where: { id }
    })
  }

  create = async ( titulo, conteudo, cor,) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        cor, 
      },
    });
  };

  update = async (id, titulo, conteudo, cor) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          titulo, 
          conteudo,
          cor
        }
      })
      return(nota);

    } catch (error) {
      console.log("Error", error);
      throw error;
    };
  };

}

export default new NotaModel();