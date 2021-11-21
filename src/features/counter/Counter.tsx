import { useState } from 'react';


export function Counter() {

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (

    <div>
      Dead Counter Component
    </div>
  );
}
