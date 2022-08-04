const indexRouter = require("./routes/index");

//auth
const authRouter = require("./routes/auth");

const authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/login");
};

module.exports = (app) => {
  app.use("/", indexRouter);
  app.use("/dashboard", authenticationMiddleware, userRouter);
};
