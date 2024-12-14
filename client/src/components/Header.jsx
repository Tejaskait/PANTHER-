import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-transparent flex w-full px-8 py-4 bg-white shadow-md items-center justify-between">

      {/* Navigation Section */} 
      <nav>
        <ul className="flex gap-3 px-10 justify-center items-center text-sm font-nmregular text-gray-700">
          <Link to="/profile">
            <li className="hover:underline">SIGN IN</li>
          </Link>
        </ul>
      </nav>
      
      {/* Search Section */}
      <form className="bg-gray-100 p-1 rounded-lg flex items-center gap-0.1">
        <input
          type="text"
          placeholder="SEARCH"
          className="bg-transparent"
        />
        <FaSearch className="text-gray-600" />
      </form>
    </header>
  );
}
