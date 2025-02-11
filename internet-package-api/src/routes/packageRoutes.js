const express = require("express");
const router = express.Router();  // Pastikan menggunakan express.Router()
const packageController = require("../controllers/packageController");

// Definisikan semua route
router.get("/", packageController.getAllPackages);
router.get("/:id", packageController.getPackageById);
router.post("/", packageController.createPackage);
router.put("/:id", packageController.updatePackage);
router.delete("/:id", packageController.deletePackage);

module.exports = router;  // Pastikan ini ada!
