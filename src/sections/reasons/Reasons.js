import s from './Reasons.module.scss';


function Reasons() {
  return (
    <section className={s.reasons} id='reasons'>
      <div className={s.contentBox}>
        <h3 className={s.title}>Why Thrive</h3>
        <p className={s.textBold}>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist? <span className={s.text}>Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</span></p>
      </div>
    </section>
  );
}

export default Reasons;