import { renderHome } from './home';
import { renderAboutUs } from './aboutus';
import { renderMenu } from './menu';

const renderTabs = () => {
  const contentDiv = document.getElementById('content');
  const tabMenu = document.createElement('div');
  tabMenu.setAttribute('id', 'tab-menu');
  const homeTab = document.createElement('div');
  homeTab.setAttribute('class', 'tab-item');
  homeTab.innerHTML = 'Home';
  homeTab.addEventListener('click', () => {
    document.getElementById('content').removeChild(document.querySelector('.tab-content'));
    renderHome();
  });
  tabMenu.appendChild(homeTab);
  const aboutUsTab = document.createElement('div');
  aboutUsTab.setAttribute('class', 'tab-item');
  aboutUsTab.innerHTML = 'About Us';
  aboutUsTab.addEventListener('click', () => {
    document.getElementById('content').removeChild(document.querySelector('.tab-content'));
    renderAboutUs();
  });
  tabMenu.appendChild(aboutUsTab);
  const menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'tab-item');
  menuTab.innerHTML = 'Menu';
  menuTab.addEventListener('click', () => {
    document.getElementById('content').removeChild(document.querySelector('.tab-content'));
    renderMenu();
  });
  tabMenu.appendChild(menuTab);
  contentDiv.appendChild(tabMenu);
};

renderTabs();
renderHome();
