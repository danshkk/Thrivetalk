import s from './Description.module.scss';

function Description(props) {
    return (
      <div className={s.description} id={props.idDescription}>
        <div className={s.contentBox}>
        <h3 className={s.title}>{props.title}</h3>
        <p className={s.text}>{props.text}</p>
        </div>
      </div>
    );
  }
  
  export default Description;