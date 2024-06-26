import { Link } from "react-router-dom";
//import { FaSearch } from ;
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold test-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Empire by Leo</span>
            <span className='test-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text'
            placeholder='Szukaj...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden: sm:inline text-slate-700 hover:underline'>
              Nieruchomości
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden: sm:inline text-slate-700 hover:underline'>
              O nas
            </li>
          </Link>
          <Link to='/contact'>
            <li className='hidden: sm:inline text-slate-700 hover:underline'>
              Kontakt
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
