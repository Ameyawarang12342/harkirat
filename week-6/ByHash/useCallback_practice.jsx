import React, { useState, useCallback, memo } from 'react';

const Button = ({ onClick, label }) => {
  console.log(`${label} button rendering...`);
  return <button onClick={onClick}>{label}</button>;
};

const Title = memo(({ initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChangeClick = useCallback(() => {
    console.log('Change title button clicked!');
    setTitle('New Title');
  }, []);

  console.log('Title rendering...');
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleTitleChangeClick} label="Change Title" />
    </div>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = useCallback(() => {
    console.log('Increment button clicked!');
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log('Counter rendering...');
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrementClick} label="Increment Count" />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Title initialTitle="Callback Example" />
      <Counter />
    </>
  );
};

export default App;