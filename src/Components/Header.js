import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Header = () => {
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchString = search.toLocaleLowerCase();
  const { state } = useContext(CartContext);
  const [dropOpen, setDropOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    clearTimeout(dropOpen);
    setDropOpen(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTimeout(() => {
      if (!hovered) {
        setDropOpen(false);
      }
    }, 2000); // 2 seconds delay
  };

  return (
    <div className='header'>
      <div className='header_bar navbar-light'>
        <Link to='/' className="navbar-brand">
          <img src="./nex_logo.png" alt="Logo not loaded" className='navbar-logo' />
        </Link>

        <div className="nav-item searchbar">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control border border-dark mr-2"
            placeholder="Search..."
            aria-label="Search"
          />
          <Link to={search ? `/search/${searchString}` : '/'}>
            <SearchIcon className='searchButton' />
          </Link>
        </div>

        <Link to='/login' className='loginLink'>
          <div className="mr-2 p-2"><strong>Sign-in</strong></div>
        </Link>

        <Link to='/cart' className='cartLink'>
          <div className="mr-2 p-2" style={{ position: 'relative' }}>
            <ShoppingCartIcon />
            {state.items.length ?
              <span className='cartLength'>{state.items.length}</span> : <div></div>
            }
          </div>
        </Link>

        <div className='toggle-button' onClick={toggleMenu}>
          <MenuIcon fontSize='large' />
        </div>
      </div>

      <div className={`headertwo  p-3 mb-2 bg-white ${dropOpen ? 'active' : ''}`}>
        <Link to='/mobiles' className="nav-link" onClick={handleLinkClick}>Mobiles</Link>
        <Link to='/electronics' className="nav-link" onClick={handleLinkClick}>Electronics</Link>
        <Link to='/fashion' className="nav-link" onClick={handleLinkClick}>Fashion</Link>

        <div className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to='/home-furniture' className="nav-link dropdown-toggle" id="homeFurnitureDropdown" onClick={handleLinkClick}>
            Home & Furniture
          </Link>
          <div className="dropdown-menu" aria-labelledby="homeFurnitureDropdown">
            <Link to='/home-furniture/home-furnishings' className="dropdown-item" onClick={handleLinkClick}>Home Furnishings</Link>
            <Link to='/home-furniture/furniture-studio' className="dropdown-item" onClick={handleLinkClick}>Furniture Studio</Link>
            <Link to='/home-furniture/living-room-furniture' className="dropdown-item" onClick={handleLinkClick}>Living Room Furniture</Link>
            
          </div>
        </div>

        <Link to='/appliances' className="nav-link" onClick={handleLinkClick}>Appliances</Link>
        <Link to='/toys' className="nav-link" onClick={handleLinkClick}>Toys</Link>
      </div>

      {isMenuOpen &&
        <div className='dropLinks'>
          <Link to='/mobiles' onClick={handleLinkClick}>Mobiles</Link>
          <Link to='/electronics' onClick={handleLinkClick}>Electronics</Link>
          <Link to='/fashion' onClick={handleLinkClick}>Fashion</Link>
          <Link to='/home-furniture' onClick={handleLinkClick}>
            Home & Furniture
          </Link>
          <Link to='/appliances' onClick={handleLinkClick}>Appliances</Link>
          <Link to='/toys' onClick={handleLinkClick}>Toys</Link>
          <Link to='/login'>
            <div className="mr-2 p-2"><strong>Sign-in</strong></div>
          </Link>
        </div>
      }
    </div>
  );
};

export default Header;
