import s from './SmallCard.module.scss';

function SmallCard(props) {
  return (
    <div className={s.smallCard} id={props.idGrid} style={props.bgColor}>
      <h3 className={s.title}>{props.title}</h3>
    </div>
  );
}

export default SmallCard;