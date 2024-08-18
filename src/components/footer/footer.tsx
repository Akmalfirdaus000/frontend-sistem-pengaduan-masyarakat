// src/app/landing/_sections/Footer.tsx

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-2xl font-bold mb-4">Layanan Pengaduan Masyarakat</h3>
            <p>Kami berkomitmen untuk memberikan layanan terbaik kepada masyarakat dengan menyediakan platform pengaduan yang responsif dan transparan.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h4 className="text-xl font-semibold mb-4">Navigasi</h4>
            <ul>
              <li className="mb-2">
                <Link href="/home">
                  <button className="hover:underline">Home</button>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq">
                  <button className="hover:underline">FAQ</button>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services">
                  <button className="hover:underline">Layanan</button>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <button className="hover:underline">Kontak</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h4 className="text-xl font-semibold mb-4">Kontak Kami</h4>
            <p>Email: info@pengaduanmasyarakat.id</p>
            <p>Telepon: +62 21 1234 5678</p>
            <p>Alamat: Jl. Merdeka No.1, Jakarta</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Layanan Pengaduan Masyarakat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
