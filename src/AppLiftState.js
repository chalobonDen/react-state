import './App.css';
import { useState } from 'react';

function App() {
  const [dogs, setDogs] = useState('pitbull');

  return (
    <div className="App">
      <DogsPicker dogs={dogs} setDogs={setDogs} />
      <DogsPicture dogs={dogs} />
    </div>
  );
}

// Component
const DogsPicture = ({ dogs }) => {
  return (
    <div>
      <h1>Dogs {dogs} Picture</h1>
    </div>
  );
};

const DogsPicker = ({ dogs, setDogs }) => {
  return (
    <select value={dogs} onChange={(event) => setDogs(event.target.value)}>
      <option value="pitbull">Pitbull</option>
      <option value="shiba">Shiba</option>
      <option value="bulldog">Bulldog</option>
    </select>
  );
};

export default App;
