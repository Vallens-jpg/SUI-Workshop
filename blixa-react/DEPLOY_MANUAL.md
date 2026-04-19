# 🔧 Deploy Manual - Step by Step

## Jika Batch File Tidak Bekerja, Ikuti Ini:

---

## 📋 Step 1: Buka Command Prompt

1. Tekan `Win + R`
2. Ketik: `cmd`
3. Enter

---

## 📋 Step 2: Masuk ke Folder Project

```bash
cd "D:\coding\SUI workshop\blixa-react"
```

Tekan Enter. Anda harus berada di folder blixa-react.

---

## 📋 Step 3: Cek Node.js

```bash
node --version
```

Jika muncul error "node is not recognized":
- Install Node.js dari https://nodejs.org
- Restart CMD
- Coba lagi

Jika muncul versi (contoh: v24.12.0), lanjut ke step 4.

---

## 📋 Step 4: Install Dependencies (Jika Belum)

```bash
npm install
```

Tunggu sampai selesai (2-5 menit).

---

## 📋 Step 5: Test Build

```bash
npm run build
```

Jika berhasil, akan muncul folder `build`.
Jika error, catat error messagenya dan beritahu saya.

---

## 📋 Step 6: Install Vercel CLI

```bash
npm install -g vercel
```

Tunggu sampai selesai.

Jika error "permission denied":
- Buka CMD as Administrator
- Jalankan command di atas lagi

---

## 📋 Step 7: Cek Vercel CLI

```bash
vercel --version
```

Jika muncul versi (contoh: Vercel CLI 33.0.0), lanjut.
Jika error, install ulang step 6.

---

## 📋 Step 8: Login ke Vercel

```bash
vercel login
```

Pilih metode login:
- Email (ketik email Anda)
- GitHub
- GitLab
- Bitbucket

Browser akan terbuka. Login di browser.
Kembali ke CMD setelah login berhasil.

---

## 📋 Step 9: Deploy!

```bash
vercel
```

Jawab pertanyaan:
1. **Set up and deploy?** → Ketik `Y` lalu Enter
2. **Which scope?** → Pilih account Anda (Enter)
3. **Link to existing project?** → Ketik `N` lalu Enter
4. **What's your project's name?** → Ketik `blixa-react` lalu Enter
5. **In which directory is your code located?** → Tekan Enter (default: ./)
6. **Want to override settings?** → Ketik `N` lalu Enter

Tunggu 2-5 menit...

Jika berhasil, akan muncul URL preview seperti:
```
https://blixa-react-xxx.vercel.app
```

---

## 📋 Step 10: Deploy ke Production

```bash
vercel --prod
```

Tunggu 2-5 menit...

Jika berhasil, akan muncul URL production:
```
https://blixa-react.vercel.app
```

✅ **DONE!** Website Anda live!

---

## 🐛 Troubleshooting

### Error: "node is not recognized"
**Solusi:**
1. Install Node.js dari https://nodejs.org
2. Restart CMD
3. Coba lagi

### Error: "npm is not recognized"
**Solusi:**
1. Reinstall Node.js
2. Restart CMD
3. Coba lagi

### Error: "vercel is not recognized"
**Solusi:**
```bash
npm install -g vercel
```
Jika masih error, buka CMD as Administrator.

### Error: "Build failed"
**Solusi:**
```bash
npm install
npm run build
```
Cek error message dan beritahu saya.

### Error: "Login failed"
**Solusi:**
1. Pastikan internet connected
2. Coba browser lain
3. Clear browser cache
4. Coba lagi

### Error: "Deployment failed"
**Solusi:**
1. Cek internet connection
2. Jalankan: `npm run build`
3. Jika build berhasil, coba deploy lagi
4. Catat error message dan beritahu saya

---

## 📞 Masih Error?

Jika masih error setelah ikuti semua step:

1. Screenshot error message
2. Beritahu saya error messagenya
3. Saya akan bantu troubleshoot

---

## 🎯 Alternatif: Deploy via Vercel Website

Jika command line tidak berhasil sama sekali:

1. Build project:
   ```bash
   npm run build
   ```

2. Buka https://vercel.com

3. Login

4. Klik "Add New..." → "Project"

5. Drag & drop folder `build` ke Vercel

6. ✅ Done!

---

**Good luck! 🚀**
