@echo off
echo ========================================
echo   BLIXA React - Simple Deploy
echo ========================================
echo.

echo [Step 1/3] Checking Vercel CLI...
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo Vercel CLI not found. Installing...
    echo This may take a few minutes...
    echo.
    call npm install -g vercel
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Failed to install Vercel CLI
        echo Please check your internet connection
        echo.
        pause
        exit /b 1
    )
    echo.
    echo Vercel CLI installed successfully!
) else (
    echo Vercel CLI found!
)
echo.

echo [Step 2/3] Login to Vercel...
echo.
echo A browser window will open for login.
echo Please login and come back here.
echo.
pause

vercel login
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Login failed
    echo Please try again
    echo.
    pause
    exit /b 1
)

echo.
echo Login successful!
echo.

echo [Step 3/3] Deploying to Vercel...
echo.
echo This will take 2-5 minutes...
echo Please wait...
echo.

vercel --prod
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Deployment failed
    echo.
    echo Common solutions:
    echo 1. Make sure you're connected to internet
    echo 2. Try running: npm install
    echo 3. Try running: npm run build
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Deployment Successful!
echo ========================================
echo.
echo Your website is now live!
echo Check the URL above to visit your site.
echo.
echo To update your site in the future:
echo Just run this script again!
echo.
echo Press any key to exit...
pause >nul

