const content = document.querySelector('#content');
const header = document.querySelector('.header');
const createMenu = () => {
  const menuText = document.createElement('h1');
  menuText.textContent = 'The Menu';
  content.appendChild(menuText);
};

export { createMenu };
