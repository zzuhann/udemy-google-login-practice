const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login");
});

// passport 透過 google 驗證使用者 => 得到 profile 資訊（可以自己決定要取哪些資訊）
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

module.exports = router;
