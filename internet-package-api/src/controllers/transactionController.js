const db = require("../config/db");
const snap = require("../config/midtrans"); // Pastikan pakai Snap

exports.createTransaction = (req, res) => {
  const { user_name, user_email, package_id } = req.body;

  // Ambil data paket dari database
  db.query("SELECT * FROM packages WHERE id = ?", [package_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Paket tidak ditemukan" });

    const package = result[0];
    const amount = package.price;

    // Setup transaksi untuk Midtrans
    let parameter = {
      transaction_details: {
        order_id: `order-${new Date().getTime()}`, // Order ID unik
        gross_amount: amount,
      },
      customer_details: {
        first_name: user_name,
        email: user_email,
      },
    };

    // Menghasilkan URL pembayaran menggunakan Snap
    snap.createTransaction(parameter)
      .then((snapResponse) => {
        // Simpan transaksi di database
        db.query(
          "INSERT INTO transactions (user_name, user_email, package_id, amount, transaction_id, payment_status) VALUES (?, ?, ?, ?, ?, ?)",
          [
            user_name,
            user_email,
            package_id,
            amount,
            snapResponse.token, // Gunakan Snap Token
            "pending",
          ],
          (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({
              message: "Transaksi berhasil dibuat",
              transaction_url: snapResponse.redirect_url, // Ini URL untuk pembayaran
            });
          }
        );
      })
      .catch((error) => {
        console.error("Midtrans error:", error);
        res.status(500).json({ error: "Pembayaran gagal dibuat" });
      });
  });
};
