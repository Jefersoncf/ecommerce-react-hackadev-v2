import '../styles/navbar'

const NavBar = () => {
    return(
        <div className="navigation">
            <div className="nav-center container d-flex">
                <a href="index.html" className="logo"><h1>DevModas</h1></a>
                <ul className="nav-list d-flex">
                <li className="nav-item">
                    <a href="index.html" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="product.html" className="nav-link">Produtos</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Sobre</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contato</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">T&C</a>
                </li>
                <li className="icons d-flex">
                    <a href="#" className="icon">
                    <i className="bx bx-user"></i>
                    </a>
                    <div className="icon">
                    <i className="bx bx-search"></i>
                    </div>
                    <a href="carrinho.html" className="icon">
                    <i className="bx bx-shopping-bag"></i>
                    <span className="d-flex">0</span>
                    </a>
                </li>
                </ul>
                <div className="icons d-flex">
                <a href="cadastro.html" className="icon">
                    <i className="bx bx-user"></i>
                </a>
                <div className="icon">
                    <i className="bx bx-search"></i>
                </div>
                <a href="carrinho.html" className="icon">
                    <i className="bx bx-shopping-bag"></i>
                    <span className="d-flex">0</span>
                </a>
                </div>
                <div className="hamburger">
                <i className='bx bx-menu' ></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar;