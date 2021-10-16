import './App.css';
import { useState, createContext, useContext } from 'react';

const DogsContext = createContext();

function DogsProvider({ children }) {
  const [dogs, setDogs] = useState('pitbull');

  return (
    <DogsContext.Provider value={{ dogs, setDogs }}>
      {children}
    </DogsContext.Provider>
  );
}

const DogsContent = () => {
  return (
    <div className="App">
      <DogsPicker />
      <DogsPicture />
    </div>
  );
};

function App() {
  return (
    <DogsProvider>
      <DogsContent></DogsContent>
    </DogsProvider>
  );
}

// Component
const DogsPicker = () => {
  const { dogs, setDogs } = useContext(DogsContext);

  return (
    <select value={dogs} onChange={(event) => setDogs(event.target.value)}>
      <option value="pitbull">Pitbull</option>
      <option value="shiba">Shiba</option>
      <option value="bulldog">Bulldog</option>
    </select>
  );
};

const DogsPicture = () => {
  const { dogs } = useContext(DogsContext);

  return (
    <div>
      <h1>Dogs {dogs} Picture</h1>
    </div>
  );
};

export default App;
