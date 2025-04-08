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
}

export default new NotaModel();