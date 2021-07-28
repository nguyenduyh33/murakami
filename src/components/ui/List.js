import classes from './List.module.css';

const List = ({ isLoading, items = [], error }) => {
  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section>
      {!isLoading && items.length > 0 && (
        <ul className={classes.list}>{items}</ul>
      )}
      {!isLoading && items.length === 0 && <p>No results</p>}
    </section>
  );
};

export default List;
