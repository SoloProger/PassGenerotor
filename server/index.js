import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;
app.use(cors());

let appPassword = "";

const passwordGenerator = (len) => {
  let password = "";
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return (appPassword = password);
};

app.get("/", (req, res) => {
  res.send("Server start...");
});

app.get("/password", (req, res) => {
  passwordGenerator(req.query.num);
  res.send(appPassword);
});

app.listen(PORT, () => {
  console.log("App has start http://localhost:8000");
});
