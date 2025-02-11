import { useState } from "react";
import { useParams } from "react-router-dom";
import { createTransaction } from "../api/api";

const Checkout = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createTransaction({ user_name: userName, user_email: userEmail, package_id: id });
    setPaymentUrl(response.transaction_url);
  };

  if (paymentUrl) {
    window.location.href = paymentUrl; // Redirect ke Midtrans
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Lanjutkan Pembayaran
        </button>
      </form>
    </div>
  );
};

export default Checkout;
