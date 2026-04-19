@echo off
echo ========================================
echo Checking for Build Errors
echo ========================================
echo.

cd /d "%~dp0"

echo Current directory:
cd
echo.

echo Checking Node.js...
node --version
echo.

echo Checking npm...
npm --version
echo.

echo Checking if node_modules exists...
if exist "node_modules" (
    echo ✅ node_modules folder exists
) else (
    echo ❌ node_modules folder NOT found
    echo Running npm install...
    call npm install
)
echo.

echo Attempting build with detailed output...
echo.
call npm run build 2>&1

echo.
echo ========================================
echo Check the error messages above
echo ========================================
echo.
pause
