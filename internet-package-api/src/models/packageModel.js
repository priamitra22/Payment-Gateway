const db = require("../config/db");

const Package = {
  getAll: (callback) => {
    db.query("SELECT * FROM packages", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM packages WHERE id = ?", [id], callback);
  },

  create: (data, callback) => {
    db.query("INSERT INTO packages (name, price, quota, description) VALUES (?, ?, ?, ?)", 
    [data.name, data.price, data.quota, data.description], callback);
  },

  update: (id, data, callback) => {
    db.query("UPDATE packages SET name=?, price=?, quota=?, description=? WHERE id=?", 
    [data.name, data.price, data.quota, data.description, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM packages WHERE id=?", [id], callback);
  },
};

module.exports = Package;
