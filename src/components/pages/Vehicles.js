import ReactPlayer from 'react-player/youtube';
import classes from './Vehicles.module.css';

const Vehicles = () => {
  return (
    <div className={classes.vehicles}>
      <ReactPlayer playing url="https://www.youtube.com/embed/qZwsIgjQqJA" />
    </div>
  );
};

export default Vehicles;
