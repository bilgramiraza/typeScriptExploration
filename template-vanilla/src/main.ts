import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

function generateLogoDiv(logo:string, altText:string, anchorLink:string, extraClass:string = ''):HTMLAnchorElement{
  const logoAnchor:HTMLAnchorElement = document.createElement('a');
  const logoElement:HTMLImageElement = document.createElement('img');

  logoElement.src = logo;
  logoElement.className = 'logo';
  if(extraClass)  logoElement.classList.add(extraClass);
  logoElement.alt =altText;
  logoAnchor.href = anchorLink;
  logoAnchor.target = '_blank';

  logoAnchor.append(logoElement);

  return logoAnchor;
}

function generateButtonCard(classes:string):HTMLDivElement{
  const cardDiv:HTMLDivElement = document.createElement('div');
  const counterBtn:HTMLButtonElement = document.createElement('button');

  cardDiv.className = classes;
  counterBtn.type = 'button';

  setupCounter(counterBtn);

  cardDiv.append(counterBtn);
  return cardDiv;
}

function main():void{
  const mainDiv:HTMLDivElement|null = document.querySelector<HTMLDivElement>('#app');
  const siteHeading:HTMLHeadingElement = document.createElement('h1');
  const docsDiv:HTMLParagraphElement = document.createElement('p');

  const buttonCardDiv:HTMLDivElement = generateButtonCard('card');
  const viteLogoAnchor:HTMLAnchorElement = generateLogoDiv(viteLogo, 'Vite logo', 'https://vitejs.dev');
  const tsLogoAnchor:HTMLAnchorElement = generateLogoDiv(typescriptLogo, 'TypeScript logo', 'https://www.typescriptlang.org/', 'vanilla');

  docsDiv.className = 'read-the-docs';
  docsDiv.textContent = 'Click on the Vite and TypeScript logos to learn more';

  siteHeading.textContent = 'Vite + TypeScript';

  mainDiv?.append(viteLogoAnchor, tsLogoAnchor, siteHeading, buttonCardDiv, docsDiv);
}
main();
