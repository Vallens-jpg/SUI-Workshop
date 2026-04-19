# 🚀 Quick Deploy ke Vercel

## Cara Tercepat (3 Langkah)

### 1️⃣ Install Vercel CLI
```bash
npm install -g vercel
```

### 2️⃣ Login ke Vercel
```bash
vercel login
```

### 3️⃣ Deploy!
```bash
cd blixa-react
vercel --prod
```

**ATAU gunakan file batch (Windows):**
```bash
deploy-vercel.bat
```

---

## 📝 Checklist Sebelum Deploy

- ✅ Node.js terinstall
- ✅ npm install sudah dijalankan
- ✅ Project bisa di-build (`npm run build`)
- ✅ Tidak ada error di console
- ✅ Akun Vercel sudah dibuat

---

## 🎯 URL Setelah Deploy

Setelah deploy, Anda akan mendapat URL seperti:
- `https://blixa-react.vercel.app`
- `https://blixa-react-username.vercel.app`

---

## 📚 Dokumentasi Lengkap

Lihat `DEPLOYMENT_GUIDE.md` untuk:
- Deploy via GitHub
- Setup custom domain
- Environment variables
- Troubleshooting
- Dan lainnya

---

## ⚡ Quick Commands

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]
```

---

**Happy Deploying! 🎉**
