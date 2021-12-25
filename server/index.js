import express from "express";

const app = express();

const passwordGenerator = (len) => {
  let password = "";
  const symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  console.log(password);
};

app.get("/", (req, res) => {
  res.send("Server start...");
});

app.listen(5000, () => {
  console.log("App has start http://localhost:5000");
});
