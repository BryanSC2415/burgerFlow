const pedidos = [
  {
    id: 1,
    cliente: "Ana Silva",
    lanche: "X-Burger",
    adicionais: ["bacon", "cheddar"],
    valor: 32.5,
    status: "pendente",
  },
  {
    id: 2,
    cliente: "Bruno Oliveira",
    lanche: "X-Salada",
    adicionais: [],
    valor: 27.0,
    status: "preparando",
  },
  {
    id: 3,
    cliente: "Carlos Souza",
    lanche: "Smash Duplo",
    adicionais: ["ovo"],
    valor: 38.9,
    status: "pronto",
  },
  {
    id: 4,
    cliente: "Daniela Santos",
    lanche: "Veggie Burger",
    adicionais: ["picles", "cebola caramelizada"],
    valor: 35.0,
    status: "entregue",
  },
  {
    id: 5,
    cliente: "Eduardo Lima",
    lanche: "X-Tudo",
    adicionais: ["bacon"],
    valor: 42.0,
    status: "preparando",
  },
];

module.exports = pedidos;
