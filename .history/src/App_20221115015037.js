import React from 'react';
import logo from './logo.svg';

import Sidebar from './Sidebar';
import Body from './Body';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';


function App() {
  user = useSelector(selectUser)
  return (
    
    <div className="flex  items-center    max-w-screen-xl mx-auto border-2">

       {user ? (
        <>
        <div className=" flex-[0.4] h-screen ">
          
        <Sidebar/>
      </div>
      <div className=" flex-[0.6] h-screen">
        <Body/>
      </div>
      </>
    
       ) : (
        <Login/>
       )}
    </div>  
  );
}

export default App;
