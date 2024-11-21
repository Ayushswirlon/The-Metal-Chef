import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(69);

  return (
    <>
      <div className="bg-zinc-900 min-h-screen text-white px-3 py-3 justify-center">
        <h1>{count}</h1>
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-1 py-3 bg-purple-200"
        >
          click
        </button>
      </div>
    </>
  );
}

export default App;
