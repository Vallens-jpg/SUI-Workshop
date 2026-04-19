@echo off
echo ========================================
echo BLIXA React - Starting Development Server
echo ========================================
echo.

echo Checking if node_modules exists...
if not exist "node_modules\" (
    echo ERROR: Dependencies not installed!
    echo Please run 'install.bat' first or run: npm install
    echo.
    pause
    exit /b 1
)

echo Starting development server...
echo.
echo The app will open in your browser at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm start
