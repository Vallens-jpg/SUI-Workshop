@echo off
echo ========================================
echo BLIXA React - Install Dependencies Only
echo ========================================
echo.

echo Installing dependencies...
echo This may take a few minutes...
echo.

call npm install

if errorlevel 1 (
    echo.
    echo ERROR: Installation failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation completed successfully!
echo ========================================
echo.
echo Now you can run the app with:
echo   - Double-click RUN_HERE.bat
echo   - Or run: npm start
echo.
pause
