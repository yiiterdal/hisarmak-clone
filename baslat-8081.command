#!/bin/bash
cd "$(dirname "$0")"
echo "Hisarmak klonu baslatiliyor (8081)..."
echo "Tarayicida ac: http://localhost:8081"
open "http://localhost:8081"
python3 -m http.server 8081
