import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="flex max-w-screen-xl mx-auto border-2">
      <Sidebar/>
    </div>
  );
}

export default App;
