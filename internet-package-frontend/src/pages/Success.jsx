const Success = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <div className="bg-green-100 p-6 rounded-full mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-4xl font-semibold text-green-600 mb-4">Pembayaran Berhasil!</h1>
      <p className="text-xl text-gray-700 mb-6">Terima kasih telah membeli paket internet kami. Anda akan segera mendapatkan akses ke paket yang Anda pilih.</p>
      <a href="/" className="text-blue-500 text-lg underline">Kembali ke Beranda</a>
    </div>
  );
};

export default Success;
