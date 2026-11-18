const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`BurgerFlow API rodando em http://localhost:${PORT} 🍔`);
});
