import { memo, useState } from 'react';

export const Memo = () => {
  const name = 'Hi'; // สมมติ fetch จาก api
  const [count, setCount] = useState(0);
  return (
    <div>
      <Item name={name} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Total click: {count}</p>
    </div>
  );
};

// memo
const Item = memo(({ name }) => {
  console.log('render item : ', name);
  return <p>{name}</p>;
});
