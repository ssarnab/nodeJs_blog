const router = require("express").Router();

const signupValidator = require("../validator/auth/signupValidator")
const loginValidator = require("../validator/auth/loginValidator")

const {
  isUnAuthenticated,
  isAuthenticated
} = require('../middleware/authMiddleware')
const {
  signupGetController,
  signupPostController,
  loginGetController,
  loginPostController,
  logoutController,
  changePasswordGetController,
  changePasswordPostController

} = require("../controllers/authController");

router.get("/signup", isUnAuthenticated,signupGetController);
router.post("/signup", signupValidator, signupPostController);

router.get("/login",isUnAuthenticated, loginGetController);
router.post("/login", loginValidator, loginPostController);

router.get('/change-password',isAuthenticated,changePasswordGetController)
router.post('/change-password',isAuthenticated,changePasswordPostController)

router.get("/logout", logoutController);

module.exports = router;