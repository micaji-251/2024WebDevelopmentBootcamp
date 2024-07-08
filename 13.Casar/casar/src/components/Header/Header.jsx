import './Header.css';
import { HiOutlineUser } from 'react-icons/hi2';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="Header navStatic">
      

      <div className="">
        <div className="searchBarContainer">
          <div className="searchBar">
            <img
              src="https://carsaperupoc.vtexassets.com/assets/vtex/assets-builder/carsaperupoc.carsaperupoc-theme/6.1.7/images/header/logo_carsa___cb64af94beb37ffaeca297c102851df3.png"
              alt=""
              className="logo"
            />
            <button className="menuButton">
              Categorias
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <div className="inputContainer">
              <div className="inputSearch">
                <input
                  type="search"
                  placeholder="Buscar Productos..."
                  className="searchInput"
                />
              </div>

              <FiSearch
                style={{ fontSize: '20px', fontWeight: '700' }}
                className={'searchIcon'}
              />
            </div>
            <div className="icons">
              <div className="icon">
                <HiOutlineUser
                  style={{
                    color: '#c20e1a',
                    fontSize: '30px',
                    fontWeight: '800',
                  }}
                />
                <p className="iconName">Mi perfil</p>
              </div>
              <div className="icon">
                <MdOutlineShoppingCart
                  style={{ color: '#c20e1a', fontSize: '30px' }}
                />
                <p className="iconName">Mi carrito</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="navBar">
          <div className="navBarContainer">
            <ul className="navBarLeftList">
              <li className="navBarOption">RENUEVA TU ELECTRO</li>
              <li className="navBarOption">TELEVISORES</li>
              <li className="navBarOption">CELULORES</li>
              <li className="navBarOption">LAPTOPS</li>
              <li className="navBarOption">ELECTROHOGAR</li>
              <li className="navBarOption">DORMITORIO</li>
              <li className="navBarOption">AUDIO</li>
            </ul>
            <ul className="navBarRightList">
              <li className="navBarOption">Credialtoque</li>
              <li className="navBarOption">Contacto</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
