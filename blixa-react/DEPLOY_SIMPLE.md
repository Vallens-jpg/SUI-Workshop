# 🚀 Deploy BLIXA ke Vercel - Cara Termudah

## ⚡ Cara Tercepat (Tanpa GitHub)

### Step 1: Install Vercel CLI

Buka PowerShell atau CMD di folder `blixa-react`, lalu jalankan:

```bash
npm install -g vercel
```

### Step 2: Login ke Vercel

```bash
vercel login
```

Pilih metode login (Email atau GitHub), lalu ikuti instruksi di browser.

### Step 3: Deploy!

```bash
vercel
```

Jawab pertanyaan:
- **Set up and deploy?** → Y (Enter)
- **Which scope?** → Pilih account Anda (Enter)
- **Link to existing project?** → N (Enter)
- **What's your project's name?** → blixa-react (atau nama lain)
- **In which directory is your code located?** → ./ (Enter)
- **Want to override settings?** → N (Enter)

### Step 4: Deploy ke Production

Setelah preview berhasil, deploy ke production:

```bash
vercel --prod
```

✅ **DONE!** Website Anda live di URL yang ditampilkan!

---

## 🎯 Alternatif: Deploy via Vercel Dashboard

Jika cara di atas tidak berhasil, gunakan cara ini:

### 1. Build Project Dulu

```bash
npm run build
```

### 2. Upload Manual ke Vercel

1. Login ke [vercel.com](https://vercel.com)
2. Klik "Add New..." → "Project"
3. Klik tab "Import Third-Party Git Repository" atau "Deploy from CLI"
4. Atau drag & drop folder `build` ke Vercel

---

## 🐛 Troubleshooting

### Error: "npm not found"
- Pastikan Node.js sudah terinstall
- Restart terminal

### Error: "vercel not found"
- Install ulang: `npm install -g vercel`
- Restart terminal

### Error: "Build failed"
- Jalankan: `npm install`
- Coba build manual: `npm run build`
- Cek error di console

---

## 📝 Notes

- Anda **TIDAK PERLU** GitHub untuk deploy ke Vercel
- Vercel CLI akan upload langsung dari komputer Anda
- Setiap kali update, jalankan `vercel --prod` lagi

---

**Happy Deploying! 🎉**
