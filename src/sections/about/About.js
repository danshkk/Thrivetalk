import s from './About.module.scss';

function About() {
  return (
    <section className={s.about} id='about'>
      <h3 className={s.title}>ABOUT US</h3>
      <p className={s.text}>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
      <span className={s.subtitle}>WE CAN HELP YOU WITH</span>
    </section>
  );
}
export default About;