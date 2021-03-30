import s from './ContactUs.module.scss';

function ContactUs() {
  return (
    <div id='gridContactUs' className={s.contactUs}>
      <div className={s.contentBox}>
        <h4 className={s.title}>CONTACT US</h4>
        <div className={s.content}>
          <h3 className={s.contentTitle}>Ready. Set. Smile</h3>
          <p className={s.text}>Take the free online assessment to see if you are a candidate and get started on your journey.</p>
        </div>
        <h4 className={s.subtitle}>GET HELP NOW</h4>
      </div>
    </div>
  );
}

export default ContactUs;