import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';
import Body from './Body';


function App() {
  return (
    
    <div className="flex     max-w-screen-xl mx-auto border-2">

       
      <div className=" flex-[0.4]">
        <Sidebar/>
      </div>
      <div className=" flex-[0.6]">
        <Body/>
      </div>
    </div>
  );
}

export default App;
