import s from './BurgerMenu.scss';

function BurgerMenu(props) {
  return (
<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Home</a></li>
			<li><a class="menu__item" href="#">About</a></li>
			<li><a class="menu__item" href="#">Services</a></li>
			<li><a class="menu__item" href="#">Blog</a></li>
    </ul>
  </div>
  );
}

export default BurgerMenu;