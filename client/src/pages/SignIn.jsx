import React, { useState } from 'react'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data));
      Navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  return (
    <div className='pa-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center
                     font-semibold my-7'>
                     Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='nazwa użytkownika'
        className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="password" placeholder='hasło'
        className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white
        p-3 rounded-lg uppercase hover:opacity-95
        disabled:opacity-80'>
          {loading ? 'Wczytywanie...' : 'Zaloguj się'}
        </button>
      </form>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
