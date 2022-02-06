import '../Header/Header.css'

const Header = () => {
       return(
        <nav className='header-nav'>
        <div className="header-wrap">
          <a className="nav-logo" href="#">Star DB</a>
       <div className="">
            <ul className="header-list">
              <li className="header-list_item">
                <a className="header-list_link" href="#">People</a>
              </li>
              <li className="header-list_item">
                <a className="header-list_link" href="#">Planet</a>
              </li>
              <li className="header-list_item">
                <a className="header-list_link" href="#">Starships</a>
              </li>
              </ul>
          </div>
        </div>
      </nav>
       )
};

export default Header;