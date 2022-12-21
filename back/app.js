const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");

const db = require("./models");
const passportConfig = require("./passport");

dotenv.config(); // .env파일 데이터 읽기

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined")); // 터미널에서 실행되는거 보여줌
  app.use(hpp());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(
    cors({
      origin: "http://nodebird.com",
      credentials: true,
    })
  );
} else {
  app.use(morgan("dev")); // 터미널에서 실행되는거 보여줌
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

app.use("/", express.static(path.join(__dirname, "uploads"))); // 이미지
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // proxy 문제해결
// req.body에 데이터 넣어주기
app.use(express.json()); // json 값 읽기
app.use(express.urlencoded({ extended: true })); // qs모듈 사용
app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키값 읽기
app.use(
  session({
    saveUninitialized: false,
    resave: false, //세션 아이디를 접속할때마다 새롭게 발급하지 않음
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize()); //passport 초기화
app.use(passport.session()); // passport 세션 사용

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/hashtag", hashtagRouter);

app.listen(3065, () => {
  console.log(`
################################################
🛡️Server listening on port: 3065🛡️
################################################
`);
});
