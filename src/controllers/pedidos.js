const pedidos = require("./pedidos.mock");

const STATUS_VALIDOS = ["pendente", "preparando", "pronto", "entregue"];

function listPedidos(req, res) {
  const { status } = req.query;

  if (status) {
    const filtrados = pedidos.filter((pedido) => pedido.status === status);
    return res.status(200).json(filtrados);
  }

  return res.status(200).json(pedidos);
}

function findPedidoById(req, res) {
  const id = Number(req.params.id);

  const pedido = pedidos.find((p) => p.id === id);

  if (!pedido) {
    return res.status(404).json({ erro: "Pedido não encontrado" });
  }

  return res.status(200).json(pedido);
}

function createPedido(req, res) {
  const { cliente, lanche, adicionais, valor } = req.body;

  if (!cliente || !lanche || valor === undefined) {
    return res
      .status(400)
      .json({ erro: "Os campos cliente, lanche e valor são obrigatórios" });
  }

  const novoPedido = {
    id: pedidos.length ? pedidos[pedidos.length - 1].id + 1 : 1,
    cliente,
    lanche,
    adicionais,
    valor,
    status: "pendente",
  };

  pedidos.push(novoPedido);

  return res.status(201).json(novoPedido);
}

function updatePedido(req, res) {
  const id = Number(req.params.id);
  const { cliente, lanche, adicionais, valor, status } = req.body;

  const index = pedidos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Pedido não encontrado" });
  }

  const pedidoAtualizado = {
    id: pedidos[index].id,
    cliente,
    lanche,
    adicionais,
    valor,
    status,
  };

  pedidos[index] = pedidoAtualizado;

  return res.status(200).json(pedidoAtualizado);
}

function updateStatusPedido(req, res) {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (!STATUS_VALIDOS.includes(status)) {
    return res.status(400).json({
      erro: `Status inválido. Use: ${STATUS_VALIDOS.join(", ")}`,
    });
  }

  const pedido = pedidos.find((p) => p.id === id);

  if (!pedido) {
    return res.status(404).json({ erro: "Pedido não encontrado" });
  }

  pedido.status = status;

  return res.status(200).json(pedido);
}

function deletePedido(req, res) {
  const id = Number(req.params.id);

  const index = pedidos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Pedido não encontrado" });
  }

  pedidos.splice(index, 1);

  return res.status(200).json({ mensagem: "Pedido cancelado com sucesso!" });
}

module.exports = {
  listPedidos,
  findPedidoById,
  createPedido,
  updatePedido,
  updateStatusPedido,
  deletePedido,
};
