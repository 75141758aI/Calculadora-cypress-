@echo off
title Subir Proyecto a GitHub - Aldo Uriel Incarroca Jayo
color 0a
echo ============================================================
echo   SUBIENDO PROYECTO CALCULADORA A GITHUB (75141758aI)
echo ============================================================
echo.
cd /d "C:\Users\SAM\Desktop\calculadora"

echo 1. Comprobando estado de Git...
git status

echo.
echo 2. Subiendo a GitHub: https://github.com/75141758aI/Calculadora-cypress-.git ...
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ============================================================
    echo   EXITO: Tu proyecto se ha subido correctamente a GitHub!
    echo ============================================================
) else (
    echo ============================================================
    echo   ATENCION: Si te dio error, asegurate de haber creado
    echo   el repositorio 'Calculadora-cypress-' en tu GitHub primero.
    echo ============================================================
)
echo.
pause
