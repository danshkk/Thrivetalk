import s from './BigCard.module.scss';

function BigCard(props) {
  return (
    <div className={s.bigCard} id={props.idGrid} style={props.bgColor}>
      <h3 className={s.title}>{props.title}</h3>
    </div>
  );
}

export default BigCard;