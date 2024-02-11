import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`Method is : ${req.method}`);
  console.log(`URL is: ${req.url}`);
  console.log(`App is: ${req.app}`);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
