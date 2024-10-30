@echo off
title Run DWTv2

:run
cls
echo Thank You For Using V2 Of DWT!
start /b node server.js
pause >nul
echo.

:close
taskkill /f /im node.exe
echo.

:choice
choice /c YN /m "Do you want to restart the server (Y/N)?"
if errorlevel 2 goto stop
if errorlevel 1 goto run

:stop
cls
echo Thank You For Using V2 Of DWT!
timeout 5 >nul
exit