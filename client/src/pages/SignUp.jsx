import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='pa-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center
                     font-semibold my-7'>
                     Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='nazwa użytkownika'
        className='border p-3 rounded-lg' id='username' />
        <input type="password" placeholder='hasło'
        className='border p-3 rounded-lg' id='username' />
        <button className='bg-slate-700 text-white
        p-3 rounded-lg uppercase hover:opacity-95
        disabled:opacity-80'>Zaloguj się</button>
      </form>
        </div>
  )
}
