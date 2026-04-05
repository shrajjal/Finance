const express = require("express");
const router = express.Router();
const controller = require("../controllers/recordController");
const role = require("../middleware/role");
const auth = require("../middleware/auth");



router.post("/", auth, role("admin"), controller.create);
router.get("/", auth, role("admin", "analyst", "viewer"), controller.getAll);
router.get("/summary", auth, role("admin", "analyst"), controller.summary);
router.get("/category-summary", auth, role("admin", "analyst"), controller.categorySummary);
router.put("/:id", auth, role("admin"), controller.update);
router.delete("/:id", auth, role("admin"), controller.remove);

module.exports = router;

/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create a new financial record
 *     tags: [Records]
 *     responses:
 *       201:
 *         description: Record created successfully
 */

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get all records with filters and pagination
 *     tags: [Records]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: income or expense
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: List of records
 */

/**
 * @swagger
 * /api/records/{id}:
 *   get:
 *     summary: Get a single record by ID
 *     tags: [Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record found
 *       404:
 *         description: Record not found
 */

/**
 * @swagger
 * /api/records/{id}:
 *   put:
 *     summary: Update a financial record
 *     tags: [Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record updated
 *       404:
 *         description: Record not found
 */

/**
 * @swagger
 * /api/records/{id}:
 *   delete:
 *     summary: Delete a financial record
 *     tags: [Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record deleted
 *       404:
 *         description: Record not found
 */

/**
 * @swagger
 * /api/records/summary:
 *   get:
 *     summary: Get total income, expense and balance
 *     tags: [Records]
 *     responses:
 *       200:
 *         description: Summary data
 */