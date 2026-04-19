# 🚀 Cara Menjalankan BLIXA React (Windows)

## ⚠️ Error PowerShell? Gunakan Salah Satu Cara Ini:

---

## ✅ CARA 1: Gunakan File BAT (PALING MUDAH!)

1. **Double-click** file `RUN_HERE.bat`
2. Tunggu proses install & start
3. Browser akan otomatis buka

**File ini akan:**
- Auto install dependencies (jika belum)
- Auto start development server
- Buka di `http://localhost:3000`

---

## ✅ CARA 2: Gunakan Command Prompt (CMD)

1. **Buka Command Prompt** (bukan PowerShell!)
   - Tekan `Win + R`
   - Ketik `cmd`
   - Enter

2. **Navigate ke folder:**
   ```cmd
   cd "C:\Users\MyBook Hype AMD\Documents\Documentation\SUI workshop\blixa-react"
   ```

3. **Install dependencies:**
   ```cmd
   npm install
   ```

4. **Start server:**
   ```cmd
   npm start
   ```

---

## ✅ CARA 3: Fix PowerShell (Untuk yang ingin tetap pakai PowerShell)

1. **Buka PowerShell sebagai Administrator:**
   - Klik kanan Start Menu
   - Pilih "Windows PowerShell (Admin)" atau "Terminal (Admin)"

2. **Jalankan command ini:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Ketik `Y` dan Enter**

4. **Tutup PowerShell Admin, buka PowerShell biasa**

5. **Navigate dan jalankan:**
   ```powershell
   cd "C:\Users\MyBook Hype AMD\Documents\Documentation\SUI workshop\blixa-react"
   npm install
   npm start
   ```

---

## ✅ CARA 4: Gunakan npx Langsung

Di Command Prompt atau PowerShell (setelah di-fix):

```cmd
cd blixa-react
npx react-scripts start
```

---

## ✅ CARA 5: Gunakan VS Code Terminal

1. Buka folder `blixa-react` di VS Code
2. Buka Terminal (Ctrl + `)
3. Pilih "Command Prompt" atau "Git Bash" dari dropdown
4. Jalankan:
   ```bash
   npm install
   npm start
   ```

---

## 🎯 Rekomendasi

**Untuk kemudahan:** Gunakan **CARA 1** (double-click `RUN_HERE.bat`)

**Untuk development:** Fix PowerShell dengan **CARA 3**, lalu gunakan VS Code

---

## 🐛 Troubleshooting

### "npm not recognized"
→ Restart terminal/CMD setelah install Node.js

### Port 3000 sudah digunakan
→ Tutup aplikasi yang pakai port 3000
→ Atau edit `package.json`:
```json
"scripts": {
  "start": "set PORT=3001 && react-scripts start"
}
```

### Masih error?
→ Hapus `node_modules` dan coba lagi:
```cmd
rmdir /s /q node_modules
npm install
```

---

## ✅ Verifikasi Node.js

Anda sudah punya Node.js v24.12.0 ✓

Sekarang tinggal pilih salah satu cara di atas!

---

**Setelah berhasil start, buka browser di:**
```
http://localhost:3000
```

**Happy Coding! 🎉**
