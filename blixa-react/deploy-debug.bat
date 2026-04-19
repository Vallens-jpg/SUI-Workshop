@echo off
setlocal enabledelayedexpansion

echo ========================================
echo   BLIXA Deploy - Debug Mode
echo ========================================
echo.

echo Checking system requirements...
echo.

REM Check Node.js
echo [1/4] Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    echo Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo Node.js found: !NODE_VERSION!
)
echo.

REM Check npm
echo [2/4] Checking npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm not found!
    echo Please reinstall Node.js
    echo.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo npm found: !NPM_VERSION!
)
echo.

REM Check Vercel CLI
echo [3/4] Checking Vercel CLI...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    echo.
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Failed to install Vercel CLI
        echo.
        echo Possible solutions:
        echo 1. Run as Administrator
        echo 2. Check internet connection
        echo 3. Try: npm config set registry https://registry.npmjs.org/
        echo.
        pause
        exit /b 1
    )
    echo Vercel CLI installed!
) else (
    for /f "tokens=*" %%i in ('vercel --version') do set VERCEL_VERSION=%%i
    echo Vercel CLI found: !VERCEL_VERSION!
)
echo.

REM Check if in correct directory
echo [4/4] Checking project files...
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Make sure you're in the blixa-react folder
    echo Current directory: %CD%
    echo.
    pause
    exit /b 1
)
if not exist "src" (
    echo ERROR: src folder not found!
    echo Make sure you're in the blixa-react folder
    echo.
    pause
    exit /b 1
)
echo Project files found!
echo.

echo ========================================
echo   All checks passed!
echo ========================================
echo.
echo Ready to deploy. What would you like to do?
echo.
echo 1. Deploy to Vercel (Production)
echo 2. Build project only (test)
echo 3. Exit
echo.
set /p choice="Enter choice (1, 2, or 3): "

if "%choice%"=="1" goto deploy
if "%choice%"=="2" goto build
if "%choice%"=="3" goto end

:deploy
echo.
echo ========================================
echo   Deploying to Vercel
echo ========================================
echo.
echo Step 1: Login to Vercel
echo A browser will open. Please login.
echo.
pause

vercel login
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Login failed
    echo.
    pause
    exit /b 1
)

echo.
echo Step 2: Deploying...
echo This may take 2-5 minutes...
echo.

vercel --prod
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Deployment failed
    echo.
    echo Try these solutions:
    echo 1. Run: npm install
    echo 2. Run: npm run build
    echo 3. Check error message above
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS!
echo ========================================
echo.
echo Your website is now live!
echo.
goto end

:build
echo.
echo Building project...
echo.
npm run build
if %errorlevel% neq 0 (
    echo.
    echo Build failed! Check errors above.
    echo.
    pause
    exit /b 1
)
echo.
echo Build successful!
echo You can now deploy with option 1.
echo.
pause
goto end

:end
echo.
echo Press any key to exit...
pause >nul
