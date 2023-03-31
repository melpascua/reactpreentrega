import carrito from '../asset/carrito.svg';
import './CartWidget.css';

const CardWidget = () => {
    return (
        <div>
            <img src= {carrito} alt="icono-carrito" />
            <span>0</span>
        </div>
    );  
};   

export default CardWidget;