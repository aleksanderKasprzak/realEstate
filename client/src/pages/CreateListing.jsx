import React from 'react'
import { useState } from 'react';
import { getDownloadURL, getStorage, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';

export default function CreateListing() {
    const [files, setFiles] = useState([]);
    const [formData, setFormData] = useState({
        imageUrls: [],
    })
    const [imageUploadError, setImageUploadError] = (false)
    const [uploading, setUploading] = (false);
    
    const handleImageSubmit = (e) => {
        if (files.length > 0 ) {
            const promises = [];

            for (let i = 0; i < files.length; i++) {
                promises.push(storageItem(files[i]));
            }
            Promise.all(promises).then((urls) => {
                setFormData({
                    ...formData, imageUrls:
                    formData.imageUrls.concat(urls)
                });
                setImageUploadError(false);
            }).catch((err) => {
                setImageUploadError('Nie powiodło się')
            })
        }
    }

    const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app)
            const fileName = new Date().getTime() + file.name;
            const storageRed = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error)=>{
                    reject(error);
                },
                ()=>{
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
            );
        });
    };
    handleRemoveImage = (index) => {
        setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_, i) => i !==
            index),
        });
    };

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
                <div className='flex gap-4'>
                    <input onChange={(e)=>setFiles(e.target.files)} className='p-3 border-gray-300
                     rounded w-full' type='file'
                     id='images' accept='image/*' multiple />
                    <button type='button' onClick={handleImageSubmit} className='p-3 text-green-700
                     border-green-700 rounded
                     uppercase hover:shadow-lf disabled:opacity-80'
                    >
                        {uploading ? 'Przesyłam...' : 'Prześlij'}
                    </button>
                </div>
                <p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p>
                {
                    formData.imageUrls.length > 0 && fromData.imageUrls.map((url, index) => (
                        <div key={url} className='flex justify-between p-3 border items-center'>
                            <img src={url} alt='listing image' className='w-20 h-20 object-contain rounded-lg' />
                            <button type='button' onClick={() => handleRemoveImage(index)} className='p-3 text-red-700 rounded-lg
                             uppercase hover:opacity-75'>Usuń</button>
                        </div>
                    ))
                }
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase
                hover:opacity-95 disabled:opacity-80'>Dodaj ofertę</button>
            </div>
        </form>
    </main>
  )
}
