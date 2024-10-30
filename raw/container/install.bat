@echo off

:Installation-Process
title GsLibrary V2 Dynamic Website Template - NodeJS Installation
echo Installing npm dependencies...
call npm install
echo Dependencies installed.

IF EXIST ".env" (
    REM File exists, skip this part
) ELSE (
    echo SECRET_SESSION = %random% > .env
)

IF EXIST "pages\delete-me" (
    del "pages\delete-me" /Q
) ELSE IF EXIST "static\delete-me" (
    del "static\delete-me" /Q
) ELSE IF EXIST "more\ItR\delete-me" (
    del "more\ItR\delete-me" /Q 
) ELSE (
    REM Files do not exist, skip this part
)

timeout 3 >nul