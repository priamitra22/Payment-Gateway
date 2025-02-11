const Package = require("../models/packageModel");

exports.getAllPackages = (req, res) => {
  Package.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getPackageById = (req, res) => {
  Package.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Paket tidak ditemukan" });
    res.json(results[0]);
  });
};

exports.createPackage = (req, res) => {
  Package.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Paket berhasil ditambahkan", id: result.insertId });
  });
};

exports.updatePackage = (req, res) => {
  Package.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Paket berhasil diperbarui" });
  });
};

exports.deletePackage = (req, res) => {
  Package.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Paket berhasil dihapus" });
  });
};
