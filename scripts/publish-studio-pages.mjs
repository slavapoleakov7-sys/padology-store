import {copyFile,mkdir} from 'node:fs/promises';
await copyFile('dist/index.html','dist/app-shell.html');
const routes={'all-studios.html':'ru','buiucani.html':'buiucani/ru','centru.html':'center/ru','plus.html':'plus/ru'};
for(const [file,route] of Object.entries(routes)){await mkdir(`dist/${route}`,{recursive:true});await copyFile(`dist/studio-assets/${file}`,`dist/${route}/index.html`);}
await copyFile('dist/studio-assets/all-studios.html','dist/index.html');
console.log('Published all four studio entry pages');
