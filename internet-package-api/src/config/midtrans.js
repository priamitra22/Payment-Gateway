const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false, // Gunakan false untuk sandbox mode
  serverKey: "SB-Mid-server-mlpK9SgUCxmpsnUCHoc29k_h",
  clientKey: "SB-Mid-client-NLDNwa2CkmKVO3rD",
});

module.exports = snap;
