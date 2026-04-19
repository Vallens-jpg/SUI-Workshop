@echo off
echo ========================================
echo BLIXA React - Quick Launcher
echo ========================================
echo.
echo Checking installation...
echo.

if not exist "node_modules\" (
    echo Installing dependencies...
    echo This will take a few minutes...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo Installation failed! Please check errors above.
        pause
        exit /b 1
    )
    echo.
    echo Installation complete!
    echo.
)

echo Starting development server...
echo.
echo App will open at: http://localhost:3000
echo Press Ctrl+C to stop
echo.

call npm start
