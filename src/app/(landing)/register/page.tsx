'use client'
import React, { useState } from 'react';

const RegisterLogin = () => {
  const [isRegister, setIsRegister] = useState(true); // Default to Register view

  return (
    <section className="py-16 bg-gray-100 min-h-screen mt-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsRegister(true)}
              className={`py-2 px-4 rounded-lg ${isRegister ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} mr-2`}
            >
              Daftar
            </button>
            <button
              onClick={() => setIsRegister(false)}
              className={`py-2 px-4 rounded-lg ${!isRegister ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Masuk
            </button>
          </div>

          {isRegister ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">Daftar Akun Baru</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Nama Lengkap</label>
                  <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Nama Lengkap" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">Kata Sandi</label>
                  <input type="password" id="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Kata Sandi" />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Daftar</button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6">Masuk ke Akun Anda</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">Kata Sandi</label>
                  <input type="password" id="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Kata Sandi" />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Masuk</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegisterLogin;
