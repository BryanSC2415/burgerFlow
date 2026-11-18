const { Router } = require("express");
const {
  listPedidos,
  findPedidoById,
  createPedido,
  updatePedido,
  updateStatusPedido,
  deletePedido,
} = require("./controllers/pedidos");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ mensagem: "API da Hamburgueria online!" });
});

routes.get("/pedidos", listPedidos);

routes.get("/pedidos/:id", findPedidoById);

routes.post("/pedidos", createPedido);

routes.put("/pedidos/:id", updatePedido);

routes.patch("/pedidos/:id/status", updateStatusPedido);

routes.delete("/pedidos/:id", deletePedido);

module.exports = routes;
