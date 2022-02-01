import { PageLoad } from './modules/page-load';
import { HomeLoad } from './modules/home';
import { createMenu } from './modules/menu';

PageLoad.createHeader();
HomeLoad.createHome();
PageLoad.createFooter();

const menuBtn = document.querySelector('.right-side p:nth-child(2)');
const container = document.querySelector('#content');
let canRemove = true;
menuBtn.addEventListener('click', () => {
  if (canRemove) {
    container.removeChild(container.childNodes[1]);
    canRemove = false;
    createMenu();
  }
});
