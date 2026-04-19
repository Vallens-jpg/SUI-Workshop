# Sui Workshop: Smart Contract Development

![Sui](https://img.shields.io/badge/Sui-4DA2FF?style=for-the-badge&logo=sui&logoColor=white)
![Move](https://img.shields.io/badge/Move-Language-000000?style=for-the-badge&logo=fastapi&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

Repositori ini berisi kumpulan modul Smart Contract yang dikembangkan menggunakan bahasa pemrograman **Move** di ekosistem **Sui Network**. Proyek ini mencakup implementasi token kustom, modul NFT, dan logika *counter* terdesentralisasi.

## 🚀 Fitur Utama

* **Custom Coin Contract:** Implementasi pembuatan token (coin) kustom di jaringan Sui menggunakan modul `coin_contract`.
* **NFT Module:** Pembuatan dan pengelolaan Non-Fungible Tokens (NFT) dasar.
* **Counter Workshop:** Logika *state management* sederhana untuk menambah dan menyimpan nilai di blockchain.
* **Frontend Integration:** Dilengkapi dengan folder `blixa-react` sebagai contoh integrasi antara Smart Contract dan antarmuka pengguna (DApp).

## 🛠️ Teknologi yang Digunakan

* **Move Language:** Bahasa pemrograman utama untuk Smart Contract.
* **Sui CLI:** Digunakan untuk melakukan kompilasi, pengujian, dan *deployment* ke Testnet/Mainnet.
* **React.js:** Digunakan untuk membangun landing page dan dashboard interaktif di folder `blixa-landing` dan `blixa-react`.

## 📁 Struktur Proyek

```text
sui-workshop/
├── coin_day2/
│   └── coin_contract/      # Modul kontrak koin & NFT
│       ├── sources/        # Source code Move (.move)
│       └── tests/          # Unit testing untuk kontrak
├── counter_workshop/       # Modul counter sederhana
│   ├── sources/
│   └── tests/
├── blixa-react/            # Integrasi DApp menggunakan React
└── blixa-landing/          # Landing page statis untuk proyek
```
## 🛠️ Cara Menjalankan
**Prasyarat**
Pastikan Anda telah menginstal Sui Binaries (https://docs.sui.io/getting-started/onboarding/sui-install).

**Kompilasi Kontrak**
Masuk ke salah satu folder kontrak (misal: coin_contract) dan jalankan:
```
sui move build
```
**Menjalankan Test**
Untuk memastikan semua logika berjalan dengan benar:
```
sui move test
```
## 📜 Lisensi
Proyek ini dilisensikan di bawah MIT License.


_Dikembangkan oleh Vallens-jpg sebagai bagian dari eksplorasi Web3._

