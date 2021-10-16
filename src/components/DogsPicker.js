import React from 'react';

const DogsPicker = ({ dogs, setDogs }) => {
  return (
    <select value={dogs} onChange={(event) => setDogs(event.target.value)}>
      <option value="pitbull">Pitbull</option>
      <option value="shiba">Shiba</option>
      <option value="bulldog">Bulldog</option>
    </select>
  );
};

export default DogsPicker;
