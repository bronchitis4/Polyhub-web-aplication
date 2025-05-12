

const Header = ({search}) => {
    return(
        <header>
            <nav className='navbar'>
                <span className="logo">LOGO</span>
                {search}
                <div className="log-in">
                    <button className="btn-login">Ввійти</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;