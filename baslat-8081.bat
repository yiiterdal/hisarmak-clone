@echo off
cd /d "%~dp0"
echo Hisarmak klonu baslatiliyor (8081)...
echo Tarayicida ac: http://localhost:8081
start "" "http://localhost:8081"
python -m http.server 8081
pause

