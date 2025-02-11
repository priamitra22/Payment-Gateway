import { useEffect, useState } from "react";
import { getPackages } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../index.css";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const Home = () => {
  const [packages, setPackages] = useState([]);
  const [category, setCategory] = useState(""); // State untuk kategori yang aktif
  const navigate = useNavigate();

  useEffect(() => {
    getPackages()
      .then(setPackages)
      .catch(console.error);
  }, []);

  // Fungsi untuk menangani perubahan kategori
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  // Filter paket berdasarkan kategori
  const filteredPackages = category
    ? packages.filter((pkg) => pkg.category === category) // Asumsi ada kolom `category` di paket
    : packages;

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section (Slider) */}
      <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <div className="bg-purple-700 text-white p-10 text-center rounded-lg">
            <h2 className="text-3xl font-bold">Tonton Anime Paling Lengkap!</h2>
            <p className="mt-2">Langganan sekarang dengan harga terjangkau</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-600 text-white p-10 text-center rounded-lg">
            <h2 className="text-3xl font-bold">Internet Ultra Cepat</h2>
            <p className="mt-2">Nikmati pengalaman internet terbaik</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Kategori Layanan */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center">
        <div
          className="p-4 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => handleCategoryClick("Internet")}
        >
          Internet
        </div>
        <div
          className="p-4 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => handleCategoryClick("Internet + TV")}
        >
          Internet + TV
        </div>
        <div
          className="p-4 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => handleCategoryClick("Gamer")}
        >
          Gamer
        </div>
        <div
          className="p-4 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => handleCategoryClick("Promo")}
        >
          Promo
        </div>
      </div>

      {/* Daftar Paket */}
      <h1 className="text-4xl font-bold text-center text-blue-600 my-8">Pilih Paket Internet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <PackageCard key={pkg.id} package={pkg} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

// Komponen PackageCard yang menggunakan Material Tailwind dengan fallback jika tidak ada gambar
const PackageCard = ({ package: pkg, navigate }) => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56 flex items-center justify-center">
        {/* Cek jika gambar ada */}
        {pkg.image ? (
          <img
            src={pkg.image}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        ) : (
          // Jika tidak ada gambar, tampilkan nama paket
          <Typography variant="h4" color="white" className="font-semibold text-center">
            {pkg.name}
          </Typography>
        )}
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {pkg.name}
        </Typography>
        <Typography>
          Kuota: {pkg.quota}
        </Typography>
        <Typography>
          Harga: Rp {pkg.price}
        </Typography>
        <Typography className="mt-2 text-sm text-gray-600">
          Deskripsi: {pkg.description || "Deskripsi tidak tersedia."}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={() => navigate(`/checkout/${pkg.id}`)}
          className="w-full bg-blue-500 hover:bg-blue-600"
        >
          Beli Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Home;
