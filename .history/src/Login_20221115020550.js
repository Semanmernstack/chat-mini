import React from 'react'

function Login() {
  return (
    <div className="flex flex-col text-center mx-auto items-center h-screen justify-center">
        <div className=" flex flex-col  text-3xl md:text-4xl lg:text-6xl">
            <h1>Welcome to PemChat</h1>
            <h2>Please Login</h2>
        </div>
        <button>Sign In</button>
    </div>
  )
}

export default Login