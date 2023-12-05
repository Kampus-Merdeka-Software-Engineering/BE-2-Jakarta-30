const express = require("express");
const cors = require("cors");
const router = require("./router.js");
const { sequelize } = require("./src/modules/database.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

router.forEach(({ path, method, handler }) => {
  app[method](path, handler);
});

app.listen(port, "0.0.0.0", async () => {
  try {
    await sequelize.authenticate();
    console.log("Koneksi berhasil terhubung.");
  } catch (error) {
    console.error("Tidak dapat terhubung ke database:", error);
  }
  console.log(`Aplikasi contoh mendengarkan pada port ${port}`);
});
