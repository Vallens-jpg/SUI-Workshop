# 🚀 Panduan Deploy BLIXA ke Vercel

## 📋 Prerequisites

1. ✅ Akun GitHub (untuk menyimpan code)
2. ✅ Akun Vercel (gratis di [vercel.com](https://vercel.com))
3. ✅ Git terinstall di komputer Anda

---

## 🎯 Metode 1: Deploy via Vercel Dashboard (PALING MUDAH)

### Step 1: Push ke GitHub

1. **Buka terminal di folder `blixa-react`**

2. **Initialize Git (jika belum):**
```bash
git init
```

3. **Add semua file:**
```bash
git add .
```

4. **Commit:**
```bash
git commit -m "Initial commit - BLIXA React Landing Page"
```

5. **Buat repository baru di GitHub:**
   - Buka [github.com/new](https://github.com/new)
   - Nama: `blixa-react` atau nama lain
   - Jangan centang "Initialize with README"
   - Klik "Create repository"

6. **Push ke GitHub:**
```bash
git remote add origin https://github.com/USERNAME/blixa-react.git
git branch -M main
git push -u origin main
```
*(Ganti USERNAME dengan username GitHub Anda)*

### Step 2: Deploy di Vercel

1. **Login ke Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub

2. **Import Project:**
   - Klik "Add New..." → "Project"
   - Pilih repository `blixa-react`
   - Klik "Import"

3. **Configure Project:**
   - **Framework Preset:** Create React App (auto-detect)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detect)
   - **Output Directory:** `build` (auto-detect)
   - **Install Command:** `npm install` (auto-detect)

4. **Deploy:**
   - Klik "Deploy"
   - Tunggu 2-3 menit
   - ✅ Done! Website live di `https://blixa-react.vercel.app`

---

## 🎯 Metode 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

1. **Navigate ke folder project:**
```bash
cd blixa-react
```

2. **Deploy:**
```bash
vercel
```

3. **Ikuti prompt:**
   - Set up and deploy? **Y**
   - Which scope? **Pilih account Anda**
   - Link to existing project? **N**
   - What's your project's name? **blixa-react**
   - In which directory is your code located? **./`**
   - Want to override settings? **N**

4. **Deploy to production:**
```bash
vercel --prod
```

---

## 🎯 Metode 3: Deploy via GitHub Actions (Auto Deploy)

### Step 1: Buat file workflow

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### Step 2: Setup Secrets

1. Get Vercel Token: [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Get Org ID & Project ID dari `.vercel/project.json`
3. Add ke GitHub Secrets

---

## ⚙️ Environment Variables (Opsional)

Jika project butuh environment variables:

1. **Di Vercel Dashboard:**
   - Settings → Environment Variables
   - Add variable (contoh: `REACT_APP_API_URL`)

2. **Di local `.env` file:**
```env
REACT_APP_API_URL=https://api.example.com
```

---

## 🔧 Custom Domain (Opsional)

1. **Di Vercel Dashboard:**
   - Settings → Domains
   - Add domain: `blixa.com`
   - Follow DNS setup instructions

2. **Update DNS:**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`

---

## 📊 Build Settings

File `vercel.json` sudah dikonfigurasi dengan:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    }
  ],
  "routes": [
    { "src": "/static/(.*)", "dest": "/static/$1" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

## 🐛 Troubleshooting

### Build Failed?

**Error: "Module not found"**
```bash
# Delete node_modules dan reinstall
rm -rf node_modules
npm install
```

**Error: "Build exceeded time limit"**
- Vercel free tier: 45 detik build time
- Optimize dependencies jika perlu

### Deployment Failed?

**Check build logs:**
- Vercel Dashboard → Deployments → Click deployment → View logs

**Common fixes:**
```bash
# Clear cache
vercel --force

# Rebuild
npm run build
```

---

## 📱 Preview Deployments

Setiap push ke branch akan create preview deployment:
- `main` branch → Production
- Other branches → Preview URLs

---

## 🔄 Update Website

### Via GitHub:
1. Edit code
2. Commit & push
3. Vercel auto-deploy ✅

### Via Vercel CLI:
```bash
vercel --prod
```

---

## 📈 Analytics & Monitoring

**Enable Vercel Analytics:**
1. Dashboard → Analytics
2. Enable Web Analytics
3. Add to code (optional):
```javascript
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

---

## 🎉 Success!

Website Anda sekarang live di:
- **Production:** `https://blixa-react.vercel.app`
- **Custom Domain:** `https://yourdomain.com` (jika sudah setup)

### Next Steps:
- ✅ Share link dengan tim
- ✅ Setup custom domain
- ✅ Enable analytics
- ✅ Monitor performance

---

## 📞 Support

**Vercel Documentation:**
- [vercel.com/docs](https://vercel.com/docs)

**BLIXA Project:**
- Check `README.md` untuk project info
- Check `ANIMATION_SUMMARY.md` untuk animation docs

---

**Deployed with ❤️ on Vercel**
