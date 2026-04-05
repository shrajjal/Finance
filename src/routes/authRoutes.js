
const router = require("express").Router();
const ctrl = require("../controllers/authController");

router.post("/register",ctrl.register);
router.post("/login",ctrl.login);

module.exports = router;

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: User registered successfully
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user and get token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login successful
 */
