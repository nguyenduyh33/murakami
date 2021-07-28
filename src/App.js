import TabSet from './components/ui/TabSet';
import Tab from './components/ui/Tab';
import Starships from './components/pages/Starships';
import Vehicles from './components/pages/Vehicles';
import Planets from './components/pages/Planets';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h2>Welcome Emily To My Star Wars Tabs!</h2>
      </header>
      <TabSet>
        <Tab name="starships" label="Starships" content={<Starships />} />
        <Tab name="planets" label="Planets" content={<Planets />} />
        <Tab name="vehicles" label="Vehicles" content={<Vehicles />} />
      </TabSet>
    </div>
  );
}

export default App;
