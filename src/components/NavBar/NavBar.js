import CardWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <h2>MelariCrochet</h2>
            <div className= "clicks">
                <div>
                    <button>Amigurumis</button>
                    <button>Patrones</button>
                    <button>Contacto</button>
                </div>
            </div>
            <CardWidget className= "card-widget" />
        </nav>
    );
};

export default NavBar;