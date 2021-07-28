import { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import useIsMounted from '../hooks/use-is-mounted';

import List from '../ui/List';
import ListItem from '../ui/ListItem';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const { isLoading, error, request: fetchStarships } = useHttp();
  const isMounted = useIsMounted();

  useEffect(() => {
    const transformStarships = ({ results }) => {
      const loadedStarships = results.map((ship) => {
        return {
          name: ship.name,
          model: ship.model,
          class: ship.starship_class,
          hyperdriveRating: ship.hyperdrive_rating,
          manufacturer: ship.manufacturer,
          cost: ship.cost_in_credits,
        };
      });

      if (isMounted.current) {
        setStarships(loadedStarships);
      }
    };

    fetchStarships(
      { url: 'https://swapi.dev/api/starships/' },
      transformStarships
    );
  }, [isMounted, fetchStarships]);

  const starshipsItems = starships.map((ship) => {
    return (
      <ListItem key={ship.name}>
        <p>Name: {ship.name}</p>
        <p>Model: {ship.model}</p>
        <p>Class: {ship.class}</p>
        <p>HyperDrive Rating: {ship.hyperdriveRating}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>Cost: {ship.cost}</p>
      </ListItem>
    );
  });

  return <List items={starshipsItems} isLoading={isLoading} error={error} />;
};

export default Starships;
