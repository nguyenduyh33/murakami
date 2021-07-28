import classes from './ListItem.module.css';

const ListItem = (props) => {
  return <li className={classes.item}>{props.children}</li>;
};

export default ListItem;
