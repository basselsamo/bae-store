"use strict"
const port = 3000,
  express = require("express"),
  homeController = require("./controllers/homeController"),
  app = express();
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
app.get("/items/:vegetable", homeController.sendReqParam);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(port, () => {
  console.log(`The Express.js server has started and is listening on port number: ${port}`);
});

