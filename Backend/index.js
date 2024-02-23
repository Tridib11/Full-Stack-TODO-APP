const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  //put it in mongodb
});
app.get("/todos", function (req, res) {});
app.put("/completed", function (req, res) {});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
