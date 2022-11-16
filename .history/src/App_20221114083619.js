import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';
import Body from './Body';


function App() {
  return (
    
    <div className="flex  items-center    max-w-screen-xl mx-auto border-2">

       
      <div className=" flex-[0.4] h-screen ">
        <Sidebar/>
      </div>
      <div className=" flex-[0.6] h-screen">
        <Body/>
      </div>
    </div>
  );
}

export default App;
