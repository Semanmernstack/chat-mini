import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase'

function Login() {

    const SignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(res => {
        alert("You have succefully log in")
        }). catch((error) => alert (error.message) )
    }
  return (
    <div className="flex font-serif flex-col w-screen bg-slate-500 text-center mx-auto items-center h-screen justify-center">
        <div className=" flex flex-col items-center  text-rose-600  text-3xl md:text-4xl lg:text-6xl">
            <h1 className="font-extrabold mb-3">Welcome to PemChat</h1>
            <h2>Please Login</h2>
        </div>
        <button onClick={SignIn} className="mt-3 border p-2 font-extrabold text-lg cursor-pointer animate-bounce">Sign In</button>
    </div>
  )
}

export default Login