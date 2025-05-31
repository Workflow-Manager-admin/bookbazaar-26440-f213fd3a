#!/bin/bash
cd /home/kavia/workspace/code-generation/bookbazaar-26440-f213fd3a/book_bazaar_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

