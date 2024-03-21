import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>CreateListing
        </h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type='text' placeholder='Nazwa' className='border p-3 rounded-lg' id='name'
                maxLength='62' minLength='10' required />
                <textarea type='text' placeholder='Opis' className='border p-3 rounded-lg' id='description'
                 minLength='10' required />
                <input type='text' placeholder='Adres' className='border p-3 rounded-lg' id='address'
                 required />
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='sale' className='w-5' />
                        <span>Sprzedaż</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='rent' className='w-5' />
                        <span>Wynajem</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='parking' className='w-5' />
                        <span>Parking</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' id='furnished' className='w-5' />
                        <span>Umeblowane</span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='beds' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg' />
                        <p>Sypialnie</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='baths' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg' />
                        <p>Łazienki</p>
                    </div>    
                    <div className='flex items-center gap-2'>
                        <input type='number' id='price' min='1' max='10' required 
                        className='p-3 border border-gray-300 rounded-lg' />
                        <div className='text-xs'>
                            <p>Cena</p>
                            <span className=''>($ / miesiąc)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Zdjęcia:
                    <span className='font-normal text-gray-600 ml-2'>
                        Pierwsze zdjęcie będzie głownym
                    </span>
                </p>
                <div className=''>
                    <input className='p-3 border-gray-300 rounded w-full' type='file'
                     id='images' accept='image/*' multiple />
                    <button className='p-3 text-green-700 border-green-700 rounded
                     uppercase hover:shadow-lf disabled:opacity-80'
                    >Prześlij</button>
                </div>
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase
                hover:opacity-95 disabled:opacity-80'>Dodaj ofertę</button>
            </div>
        </form>
    </main>
  )
}
