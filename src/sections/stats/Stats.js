import s from './Stats.module.scss';

function Stats() {
  return (
    <div className={s.stats} id='gridStats'>
      <div className={s.contentBox}>
          <h4 className={s.title}>YOU SHOULD ALSO KNOW</h4>
          <p className={s.text}>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at <span className={s.logo}>ThriveTalk</span> can help you.</p>
          <h4 className={s.subtitle}>GET HELP NOW</h4>
      </div>
    </div>
  );
}

export default Stats;