PROGRAM 17 - CI/CD pipeline for a React application using GitHub Actions
(Bloom & Petal flower shop website)

RUN LOCALLY (VS Code)
1. File -> Open Folder -> my-app
2. Terminal:  npm install
              npm run dev
3. Open http://localhost:5173/my-app/

PIPELINE  (.github/workflows/ci.yml)
 push to main -> checkout -> setup Node 20 -> npm ci -> npm run build -> deploy dist to GitHub Pages
Live site: https://mcabatch025-png.github.io/my-app/
