import React from 'react'

function Login() {
  return (
    <div className="flex font-serif flex-col text-center mx-auto items-center h-screen justify-center">
        <div className=" flex flex-col items-center   text-3xl md:text-4xl lg:text-6xl">
            <h1 className="font-extrabold mb-3">Welcome to PemChat</h1>
            <h2>Please Login</h2>
        </div>
        <button className="mt-3">Sign In</button>
    </div>
  )
}

export default Login