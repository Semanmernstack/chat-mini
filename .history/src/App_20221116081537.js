import React, { useEffect } from 'react';


import Sidebar from './Sidebar';
import Body from './Body';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>  {
    onAuthStateChanged(auth, authuser => {
      if(authuser) {
        dispatch(login({
          uid: authuser.uid,
          displayName: authuser.displayName,
          email: authuser.email,
          photo: authuser.photoURL,
        }))
      } else {dispatch(logout())}
    })
  }, [dispatch])

  

  return (
    
    <div className="flex  items-center overflow-hidden  overflow-y-hidden    h-screen  max-w-[700px]    mx-auto border-2">

       {user ? (
        <>
        <div className=" flex-[0.4]  ">
          
        <Sidebar/>
      </div>
      <div className=" flex-[0.6] ">
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
