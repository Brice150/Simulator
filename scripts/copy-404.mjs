// Post-traitement du build statique pour GitHub Pages.
// - 404.html : Pages le sert pour toute URL inconnue, on y copie la page
//   prerendue pour que les liens profonds chargent l'application.
// - index.csr.html / prerendered-routes.json : artefacts du builder inutiles
//   en sortie statique, on ne les publie pas.
import { copyFileSync, rmSync } from 'node:fs';

copyFileSync('docs/index.html', 'docs/404.html');
console.log('docs/404.html generated from docs/index.html');

for (const file of ['docs/index.csr.html', 'docs/prerendered-routes.json']) {
  rmSync(file, { force: true });
}
