import './App.css';
import { memo, useState, createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryCilent = new QueryClient();

const DogsContext = createContext();

function DogsProvider({ children }) {
  const [dogs, setDogs] = useState('pitbull');

  return (
    <QueryClientProvider client={queryCilent}>
      <DogsContext.Provider value={{ dogs, setDogs }}>
        {children}
      </DogsContext.Provider>
    </QueryClientProvider>
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

// https://dog.ceo/api/breed/Affenpinscher/images

async function fetchPicture({ queryKey }) {
  const response = await fetch(`https://dog.ceo/api/breed/${queryKey}/images`);
  const data = await response.json();
  return data;
}

const DogsPicture = () => {
  const { dogs } = useContext(DogsContext);
  const { data, isLoading, error } = useQuery(dogs, fetchPicture);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops!! error occurred...</p>;

  return (
    <div>
      <h1>Dogs {dogs} Picture</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="row">
        {data.message.map((val, index) => (
          <img key={index} src={val} />
        ))}
      </div>
    </div>
  );
};

export default App;
