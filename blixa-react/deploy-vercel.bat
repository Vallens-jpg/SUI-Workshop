@echo off
echo ========================================
echo   BLIXA React - Deploy to Vercel
echo ========================================
echo.

echo [1/4] Checking Vercel CLI...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
) else (
    echo Vercel CLI found!
)
echo.

echo [2/4] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Please check errors above.
    pause
    exit /b 1
)
echo Build successful!
echo.

echo [3/4] Deploying to Vercel...
echo.
echo Choose deployment type:
echo 1. Preview (development)
echo 2. Production
echo.
set /p choice="Enter choice (1 or 2): "

if "%choice%"=="1" (
    echo Deploying to preview...
    vercel
) else if "%choice%"=="2" (
    echo Deploying to production...
    vercel --prod
) else (
    echo Invalid choice. Deploying to preview...
    vercel
)

echo.
echo [4/4] Deployment complete!
echo.
echo Your website is now live!
echo Check the URL above to visit your site.
echo.
pause
