import { PageLoad } from './modules/page-load';
import { HomeLoad } from './modules/home';
import { MenuLoad } from './modules/menu';
import { ContactLoad } from './modules/contact';

PageLoad.createHeader();
HomeLoad.createHome();
PageLoad.createFooter();

const homeBtn = document.querySelector('.right-side p:nth-child(1)');
const menuBtn = document.querySelector('.right-side p:nth-child(2)');
const contactBtn = document.querySelector('.right-side p:nth-child(3)');

const container = document.querySelector('#content');

menuBtn.addEventListener('click', () => {
  container.removeChild(container.childNodes[1]);
  MenuLoad.createMenu();
});

homeBtn.addEventListener('click', () => {
  container.removeChild(container.childNodes[1]);
  HomeLoad.createHome();
});

contactBtn.addEventListener('click', () => {
  container.removeChild(container.childNodes[1]);

  ContactLoad.createContact();
});
