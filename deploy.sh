git add .
git commit -m $1
git push origin main

npm run build
firebase deploy