import '../css/style.css';
import Logo from '../img/logo.png';
import Decor_Bottom from '../img/decor_bottom.png';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const PageLoad = (() => {
  const content = document.querySelector('#content');
  const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');

    const restaurantLogo = new Image();
    restaurantLogo.src = Logo;
    restaurantLogo.classList.add('logo');

    const logoText = document.createElement('div');
    logoText.classList.add('logo-text');
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Tamada';
    const restaurantNameSubtext = document.createElement('p');
    restaurantNameSubtext.textContent = 'Georgian Restaurant';

    logoText.appendChild(restaurantName);
    logoText.appendChild(restaurantNameSubtext);

    leftSide.appendChild(restaurantLogo);
    leftSide.appendChild(logoText);

    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    const homeButton = document.createElement('p');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('p');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('p');
    contactButton.textContent = 'Contact';

    const facebookIcon = document.createElement('p');
    facebookIcon.innerHTML = `
    <i class="fab fa-facebook-f"></i>
    `;

    const twitterIcon = document.createElement('p');
    twitterIcon.innerHTML = `
    <i class="fab fa-twitter"></i>
    `;

    const instagramIcon = document.createElement('p');
    instagramIcon.innerHTML = `
    <i class="fab fa-instagram"></i>
    `;

    rightSide.appendChild(homeButton);
    rightSide.appendChild(menuButton);
    rightSide.appendChild(contactButton);
    rightSide.appendChild(facebookIcon);
    rightSide.appendChild(twitterIcon);
    rightSide.appendChild(instagramIcon);

    header.appendChild(leftSide);
    header.appendChild(rightSide);
    content.appendChild(header);
  };

  const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const decorBottom = new Image();
    decorBottom.src = Decor_Bottom;
    decorBottom.classList.add('decor-bottom');
    content.appendChild(decorBottom);
    const footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.innerHTML = `
    Made by Gia Zveriachvili
    <a href="https://github.com/gzveriachvili" target="_blank"><i class="fab fa-github"></i></a>
    `;
    footer.appendChild(footerText);
    content.appendChild(footer);
  };

  return { createHeader, createFooter, content };
})();

export { PageLoad };
