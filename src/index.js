const app = require("../src/app");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const port = 3000;

app.listen(port, () => {
  console.log(`Server runing on port ${port}. Check http://localhost:3000`);
});
