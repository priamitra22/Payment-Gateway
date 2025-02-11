const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false, // Gunakan false untuk sandbox mode
  serverKey: "",
  clientKey: "",
});

module.exports = snap;
