import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import notasRoutes from "./routes/notasRoutes.js";

const app = express();
const serverPort = process.env.PORT || 3000;

app.use(express.json());
app.use("/tarefas", tarefaRoutes);
app.use("/notas", notasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
