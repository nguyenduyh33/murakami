import { useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';

import List from '../ui/List';
import ListItem from '../ui/ListItem';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { isLoading, error, request: fetchPlanets } = useHttp();

  useEffect(() => {
    const transformPlanets = ({ results }) => {
      setPlanets(results);
    };
    fetchPlanets({ url: 'https://swapi.dev/api/planets/' }, transformPlanets);
  }, [fetchPlanets]);

  const planetsItems = planets.map((planet) => {
    return (
      <ListItem key={planet.name}>
        <p>Name: {planet.name}</p>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
      </ListItem>
    );
  });

  return <List items={planetsItems} isLoading={isLoading} error={error}></List>;
};

export default Planets;
