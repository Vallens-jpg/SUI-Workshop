@echo off
echo ========================================
echo Testing React Build
echo ========================================
echo.

cd /d "%~dp0"

echo Building React app...
echo.
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Build failed!
    echo.
) else (
    echo.
    echo ✅ Build successful!
    echo Build files are in the 'build' folder.
    echo.
)

pause
