@echo off
cd /d "%~dp0"
echo Hisarmak klonu baslatiliyor...
echo Tarayicida ac: http://localhost:8080
start http://localhost:8080
python -m http.server 8080
pause
