import BurgerMenu from '../../components/burgerMenu/BurgerMenu';
import s from './StartPage.module.scss'

function StartPage() {
  return (
    <section className={s.startPage} id='startPage'>
      <div className={s.topContent}>
        <span className={s.topLogo}>Thrivetalk</span>
        <BurgerMenu/>
        <ul className={s.list}>
          <li className={s.item}><a className={s.link} href="">Home</a></li>
          <li className={s.item}><a className={s.link} href="">About</a></li>
          <li className={s.item}><a className={s.link} href="">Services</a></li>
          <li className={s.item}><a className={s.link} href="">Blog</a></li>
        </ul>
        <button className={s.btnBlue}>CONTACT US</button>
      </div>
      <div className={s.bottomContent}>
        <span className={s.bottomLogo}>Thrivetalk</span>
        <h2 className={s.title}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h2>
        <p className={s.text}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
        <div className={s.btnInner}>
          <button className={s.btnYellow}>WHO AM I</button>
          <a className={s.linkYellow} href="">WHAT DO I DO</a>
        </div>
      </div>
    </section>
  );
}

export default StartPage;