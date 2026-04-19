@echo off
echo ========================================
echo BLIXA React - Build and Deploy to Vercel
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Building React app...
echo.
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Build failed! Please check the errors above.
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Build successful!
echo.
echo Step 2: Deploying to Vercel...
echo.
call vercel --prod

echo.
echo ========================================
echo Deployment process completed!
echo ========================================
echo.
pause
