import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';
import Body from './Body';


function App() {
  return (
    <div className="flex flex-1 max-w-screen-xl mx-auto border-2">
      <Sidebar/>
      <Body/>
    </div>
  );
}

export default App;
