import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';
import Body from './Body';


function App() {
  return (
    <div className="flex flex-col flex-1   max-w-screen-xl mx-auto border-2">

       <div className=" items-center sp">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3>Abejide oluwaseyi</h3> 
            <span>my id</span>
        </div>
      <div className="flex flex-[0.4]">
        <Sidebar/>
      </div>
      <div className="flex flex-[0.6]">
        <Body/>
      </div>
    </div>
  );
}

export default App;
