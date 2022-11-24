const express = require("express");
const app = express();
const cors = require("cors");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

app.use(cors({ origin: "*", credentials: false })); // proxy 문제해결
// req.body에 데이터 넣어주기
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(3065, () => {
  console.log(`
################################################
🛡️Server listening on port: 3065🛡️
################################################
`);
});
