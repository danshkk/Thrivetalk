import s from './Footer.module.scss';
import footerImg from '../../assets/image/footerpage.png';

function Footer() {
  return (
    <footer className={s.footer} id='gridFooter'>
      <div className={s.footerTop}>
        <img className={s.footerImage} src={footerImg} alt="" />
        <div className={s.contentBox}>
          <div className={s.infoBox}>
            <div className={s.wrap}>
              <h3 className={s.title}>SOME INFO</h3>
              <p className={s.infoText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
            </div>
          </div>
          <div className={s.healthBox}>
            <div className={s.wrap}>
              <h3 className={s.title}>ENFOLD HEALTH</h3>
              <ul className={s.list}>
                <li className={s.item}>Main Street 1, Olcott Buffalo, United States</li>
                <li className={s.item}>+555 283 784 333</li>
                <li className={s.item}><a className={s.link} href="">office@enfold-health.com</a></li>
              </ul>
            </div>
          </div>
          <div className={s.hoursBox}>
            <div className={s.wrap}>
              <h3 className={s.title}>OFFICE HOURS</h3>
              <ul className={s.list}>
                <li className={s.item}>Mo-Fr: 8:00-19:00</li>
                <li className={s.item}>Sa: 8:00-14:00</li>
                <li className={s.item}>Su: closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={s.footerBottom}>
        <span className={s.copyright}> Copyright - ThriveTalk  2017</span>
      </div>
    </footer>
  );
}

export default Footer;