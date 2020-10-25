import menuCars from '../template/menu.hbs';
import menuData from '../menu.json';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', menuCars(menuData));
