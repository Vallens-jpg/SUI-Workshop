# Setup Instructions untuk BLIXA React

## Cara Install dan Menjalankan

### Opsi 1: Manual Installation (Recommended untuk Windows)

1. **Buka PowerShell sebagai Administrator** dan jalankan:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2. **Navigate ke folder project:**
```bash
cd blixa-react
```

3. **Install dependencies:**
```bash
npm install
```

4. **Jalankan development server:**
```bash
npm start
```

5. **Buka browser** di `http://localhost:3000`

### Opsi 2: Jika npm tidak bisa dijalankan

Gunakan Command Prompt (CMD) sebagai gantinya:

1. Buka **Command Prompt**
2. Navigate ke folder:
```cmd
cd blixa-react
```

3. Install:
```cmd
npm install
```

4. Run:
```cmd
npm start
```

## Troubleshooting

### Error: "running scripts is disabled"
Jalankan PowerShell sebagai Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Error: "npm not found"
Install Node.js dari: https://nodejs.org/

### Port 3000 sudah digunakan
Edit package.json dan tambahkan:
```json
"scripts": {
  "start": "set PORT=3001 && react-scripts start"
}
```

## Build untuk Production

```bash
npm run build
```

File production akan ada di folder `build/`

## Deploy

### Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

### Deploy ke Netlify
```bash
npm run build
# Upload folder 'build' ke Netlify
```

## Struktur File

Semua component ada di `src/components/`  
Setiap component punya file `.js` dan `.css` sendiri  
Main app ada di `src/App.js`
